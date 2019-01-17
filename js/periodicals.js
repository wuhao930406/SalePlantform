/**
 * Created by kurosaki on 2019/1/16.
 */
/*是否手动渲染*/
$('.level').trigger('changed.selected.amui');
$('.time').trigger('changed.selected.amui');
/*点击全部重置select*/
$("#diybtn").click(function(){
    /*reset data*/
    $('.level').find('option').eq(0).attr('selected', true).trigger('changed.selected.amui');
    $('.level').next(".am-selected").find(".am-selected-content").find(".am-selected-list").find("li").removeClass("am-checked");
    $('.level').next(".am-selected").find(".am-selected-content").find(".am-selected-list").find("li").eq(0).addClass("am-checked");
    $('.level').next(".am-selected").find("button").children("span").text($('.level').find('option').eq(0).text())

    $('.time').find('option').eq(0).attr('selected', true).trigger('changed.selected.amui');
    $('.time').next(".am-selected").find(".am-selected-content").find(".am-selected-list").find("li").removeClass("am-checked");
    $('.time').next(".am-selected").find(".am-selected-content").find(".am-selected-list").find("li").eq(0).addClass("am-checked");
    $('.time').next(".am-selected").find("button").children("span").text($('.time').find('option').eq(0).text())

    $('.level').val("");//设置为空
    $('.time').val("");//设置为空

    $("#diybtn").addClass("diybtncur");

})
/*监听select事件 修改-1为null*/
$(".level").on('change',function(){
    if($(this).val()==-1){
        $(this).val("")
    }
    if($(".time").val()==-1){
        $(".time").val("")
    }
    console.log($(this).val()+":"+$(".time").val())
    if($(this).val()==null&&$(".time").val()==null){
        $("#diybtn").addClass("diybtncur");
    }else{
        $("#diybtn").removeClass("diybtncur");
    }
})
/*监听select事件 修改-1为null*/
$(".time").on('change',function(){
    if($(this).val()==-1){
        $(this).val("")
    }
    if($(".level").val()==-1){
        $(".level").val("")
    }
    if($(this).val()==null&&$(".level").val()==null){
        $("#diybtn").addClass("diybtncur");
    }else{
        $("#diybtn").removeClass("diybtncur");
    }
})
/*加载更多*/
function loadMore(obj){
    var html = $(".perlist .item").html();
        html = '<li class="item">'+html+'</li>';
    $(".perlist").append(html)



}

