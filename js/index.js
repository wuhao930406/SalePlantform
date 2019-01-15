/**
 * Created by kurosaki on 2019/1/15.
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