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
function SelectInit(obj,title) {
	var showDom = $(obj);
	var Id = showDom.attr("name"),//获取当前的id值  
		Idname = showDom.attr("id"),//不同按钮的id作为切换数据的判断条件
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
        	 $("#diybtn").removeClass("diybtncur");
        	showDom.val(selectOneObj.value);//选择后修改按钮文字
        	showDom.attr("name",selectOneObj.id);//修改按钮存储的id值
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
function refreshData(selectOneObj){
	console.log(selectOneObj)
}



/*点击全部重置select*/
$("#diybtn").click(function(){
    /*reset data*/
    $('#core').val("分值");
    $('#core').attr("name",null);
   	$('#big').val("大类学科");
    $('#big').attr("name",null);
    $('#small').val("小类学科");
    $('#small').attr("name",null);
    
    
    
    $("#diybtn").addClass("diybtncur");
    /*----修改后执行的操作写在下面----*/
    refreshData(null)
    

})



/*加载更多*/
function loadMore(obj){
    var html = $(".perlist .item").html();
        html = '<li class="item">'+html+'</li>';
    $(".perlist").append(html)



}

