/*按钮复制文字*/
$(document).ready(function(){
	var clipboard = new ClipboardJS('#copy', {
	    text: function() {
	    	var text =  $(".innerthisbox").text()
	        return text;//复制内容，需要页面渲染完成再去获取内容，注意异步
	    }
	});
	
	clipboard.on('success', function(e) {
	    var alerttitle = "提示",alerttext = "复制成功!"
	    $("#alerttitle").text(alerttitle);
	    $("#alerttext").text(alerttext);
	    $("#my-alert").modal();
	});
	
	clipboard.on('error', function(e) {
	    var alerttitle = "提示",alerttext = "复制成功!"
	    $("#alerttitle").text(alerttitle);
	    $("#alerttext").text(alerttext);
	    $("#my-alert").modal();
	});

})















