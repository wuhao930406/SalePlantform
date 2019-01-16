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
/*-------------滚动轮播------------*/
var t = setInterval(function(){
    $("#roll1").animate({marginTop:-25},400,function(){
        $("#roll1 a:last-child").after($("#roll1 a:first-child"));
        $("#roll1").css({marginTop:0})
    })
    $("#roll2").animate({marginTop:-25},400,function(){
        $("#roll2 a:last-child").after($("#roll2 a:first-child"));
        $("#roll2").css({marginTop:0})
    })
},2400)

