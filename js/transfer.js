/**
 * Created by kurosaki on 2019/1/16.
 */
/*下拉菜单模拟数据*/
var data1 = [
    {'id': '10001', 'value': '工商银行'},
    {'id': '10002', 'value': '农业银行'},
    {'id': '10003', 'value': '建设银行'},
    {'id': '10004', 'value': '中国银行'},
    {'id': '10005', 'value': '交通银行'},
    {'id': '10006', 'value': '浦发银行'},
    {'id': '10007', 'value': '上海银行'},
    {'id': '10008', 'value': '汇丰银行'},
    {'id': '10009', 'value': '光大银行'},
    {'id': '10010', 'value': '招商银行'},
    {'id': '10011', 'value': '中信银行'},
    {'id': '10012', 'value': '民生银行'},
    {'id': '10013', 'value': '平安银行'},
    {'id': '10014', 'value': '华夏银行'},
    {'id': '10015', 'value': '广发银行'},
    {'id': '10016', 'value': '北京银行'}
],data2 = [
	{'id': '10001', 'value': '工商银行1'},
    {'id': '10002', 'value': '农业银行1'},
    {'id': '10003', 'value': '建设银行1'},
    {'id': '10004', 'value': '中国银行1'},
    {'id': '10005', 'value': '交通银行1'},
    {'id': '10006', 'value': '浦发银行1'},
    {'id': '10007', 'value': '上海银行1'},
    {'id': '10008', 'value': '汇丰银行1'},
    {'id': '10009', 'value': '光大银行1'},
    {'id': '10010', 'value': '招商银行1'},
    {'id': '10011', 'value': '中信银行1'},
    {'id': '10012', 'value': '民生银行1'},
    {'id': '10013', 'value': '平安银行1'},
    {'id': '10014', 'value': '华夏银行1'},
    {'id': '10015', 'value': '广发银行1'},
    {'id': '10016', 'value': '北京银行1'}
]
/*---SelectInit---
 * obj 绑定当前input点击事件，为当前dom节点
 * title 传入的标题
 * */
function SelectInit(obj,title){
	var showDoma = $(obj);
	var Id = showDoma.attr("name"),//获取当前的id值  
		Idname = showDoma.attr("id"),//不同按钮的id作为切换数据的判断条件
		data = data1 //根据不同的按钮选择不同的数据
	switch (Idname){
		case "level":
			data = data1
			break;
		case "time":
			data = data2
			break;	
		default:
			break;
	}	
	
	var Select = new IosSelect(1, 
    [data],
    {
        container: '.container',//选择框渲染dom
        title: title,
        itemHeight: 50,//行高
        itemShowCount: window.num,//显示个数
        oneLevelId: Id,
        callback: function (selectOneObj) {
        	showDoma.val(selectOneObj.value);//选择后修改按钮文字
        	showDoma.attr("name",selectOneObj.id);//修改按钮存储的id值
            /*----修改后执行的操作写在下面----*/
            refreshData(selectOneObj)
        },
        fallback: function () {
            console.log(1);
        },
        maskCallback: function () {
            console.log(2);
        }
	})
}
/*修改后执行的操作*/
function refreshData(selectOneObj, selectTwoObj,selectOneObjs, selectTwoObjs){
	console.log(selectOneObj)
	console.log(selectTwoObj)
	console.log(selectOneObjs)
	console.log(selectTwoObjs)
}




/*-------2列选择---时间选择框----------*/
var yeararr = [],
	montharr = [];
for(var i = 1970;i<2070;i++){
	var item = {id:i,value:i+"年"}
	yeararr.push(item)
}
for(var i = 1;i<13;i++){
	var item = {id:i,value:i+"月"}
	montharr.push(item)
}	

function SelectTime(starta,startb,enda,endb,title){
	setTimeout(function(){
		$(".cover-area3").show();
	},100)

	var showDoma = $(starta),
		showDomb = $(startb),
		showDomas = $(enda),
		showDombs = $(endb);
	
	var curyear = new Date().getFullYear(),
		curmonth = new Date().getMonth()+1;
		
	var Ida = showDoma.attr("name"),//获取当前的id值  
	    Idb = showDomb.attr("name"),//获取当前的id值  
		Idas = showDomas.attr("name"),//获取当前的id值  
		Idbs = showDombs.attr("name");//获取当前的id值  
	if(!Ida){
		Ida = curyear
	}
	if(!Idb){
		Idb = curmonth
	}
	if(!Idas){
		Idas = curyear
	}
	if(!Idbs){
		Idbs = curmonth
	}
	
		
	var Select = new IosSelect(4, 
    [yeararr,montharr,yeararr,montharr],
    {
        container: '.container',//选择框渲染dom
        title: title,
        itemHeight: 50,//行高
        itemShowCount: window.num,//显示个数
        oneLevelId: Ida,
        twoLevelId: Idb,
        threeLevelId: Idas,
        fourLevelId: Idbs,
        callback: function (selectOneObj, selectTwoObj,selectOneObjs, selectTwoObjs) {
        	showDoma.val(selectOneObj.value);//选择后修改按钮文字
        	showDoma.attr("name",selectOneObj.id);//修改按钮存储的id值
        	
        	showDomb.val(selectTwoObj.value);//选择后修改按钮文字
        	showDomb.attr("name",selectTwoObj.id);//修改按钮存储的id值
        	
        	showDomas.val(selectOneObjs.value);//选择后修改按钮文字
        	showDomas.attr("name",selectOneObjs.id);//修改按钮存储的id值
        	
        	showDombs.val(selectTwoObjs.value);//选择后修改按钮文字
        	showDombs.attr("name",selectTwoObjs.id);//修改按钮存储的id值
            /*----修改后执行的操作写在下面----*/
           	if(selectOneObj.id>selectOneObjs.id){
   		      	var alerttitle = "提示",
		        alerttext = "开始时间必须小于结束时间请重新选择";
			    $("#alerttitle").text(alerttitle);
			    $("#alerttext").text(alerttext);
			    $("#alerttext").attr("name",0);
		        $("#my-alert").modal();
           	}else if(selectOneObj.id==selectOneObjs.id&&selectTwoObj.id>selectTwoObjs.id){
           		var alerttitle = "提示",
		        alerttext = "开始时间必须小于结束时间请重新选择";
			    $("#alerttitle").text(alerttitle);
			    $("#alerttext").text(alerttext);
			    $("#alerttext").attr("name",0);
		        $("#my-alert").modal();
           	}else{
           		var alerttitle = "提示",
		        alerttext = "开始时间"+selectOneObj.value+selectTwoObj.value+",结束时间"+selectOneObjs.value+selectTwoObjs.value+"";
			    $("#alerttitle").text(alerttitle);
			    $("#alerttext").text(alerttext);
			    $("#alerttext").removeAttr("name");
		        $("#my-alert").modal();
           		$("#time").val(selectOneObj.value+"."+selectTwoObj.value+"-"+selectOneObjs.value+"."+selectTwoObjs.value)
		        
           	}
           	
           
            refreshData(selectOneObj, selectTwoObj,selectOneObjs, selectTwoObjs)
        },
        fallback: function () {
            console.log(1);
        },
        maskCallback: function () {
            console.log(2);
        }
	})
}

/*-------alert ifOpen-------*/
function ifOpen(){
	var ifs = $("#alerttext").attr("name");
	if(ifs){
		SelectTime('#timestarta','#timestartb','#timeenda','#timeendb','选择时间')
	}else{
		
	}
}


/*点击全部重置select*/
$("#diybtn").click(function(){
    /*reset data*/
    $('#type').val("类型");
    $('#type').attr("name",null);
    
    $('#time').val("时间");
    $('#time').attr("name",null);
    
    $('#level').val("级别");
    $('#level').attr("name",null);
    
    $('#derection').val("方向");
    $('#derection').attr("name",null);
    
   
    $("#diybtn").addClass("diybtncur");
    /*----修改后执行的操作写在下面----*/
    refreshData(null)
    

})



