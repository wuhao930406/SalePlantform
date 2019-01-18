/**
 * Created by kurosaki on 2019/1/16.
 */
/*-----------------搜索非空提示----------------*/
$("#search").click(function(){
    var value = $("#searchtext").val(),
        alerttitle = "提示",
        alerttext = "请输入搜索内容"
    $("#alerttitle").text(alerttitle);
    $("#alerttext").text(alerttext);
    if(!value||value==""){
        $("#my-alert").modal();
    }else if(value=="0"){//跳转到无结果页面
    	var ifs = $(".header").attr("name");
    	if(ifs){
    		jumpUrl("./html/searchresult/noresult.html");
    	}else{
    		jumpUrl("../searchresult/noresult.html");
    	}
    	sessionStorage.setItem("val",value);//模拟数据传参
    }else{//跳转到结果页面
    	var ifs = $(".header").attr("name");
    	if(ifs){
    		jumpUrl("./html/searchresult/result.html");
    	}else{
    		jumpUrl("../searchresult/result.html");
    	}
    	sessionStorage.setItem("val",value);//模拟数据传参
    }
})
$(document).ready(function(){
	var val = sessionStorage.getItem("val");
	if(val){
		$("#searchtext").val(val)
	}
	
})


/*----------------------页面跳转-------------------------*/
function jumpUrl(url){
    window.location.href = url
}
/*------------设置下拉选择框的显示个数-----------*/
window.num = 5; //个数：1 3 5 7 9 ....