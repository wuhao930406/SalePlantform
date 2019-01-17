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
    }
})
/*----------------------页面跳转-------------------------*/
function jumpUrl(url){
    window.location.href = url
}
/*------------设置下拉选择框的显示个数-----------*/
window.num = 5; //个数：1 3 5 7 9 ....