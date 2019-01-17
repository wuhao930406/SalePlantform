/*按钮复制文字*/
$(function(){
	$("#copy").zclip('show');
$("#copy").zclip({
	path: "https://cdn.bootcss.com/zclip/1.1.2/ZeroClipboard.swf",
	copy: function () {//复制内容 
		return $("#copy").text();
	},
	afterCopy: function () {//复制成功 
		console.log(0)
		var alerttitle = "提示",alerttext = "复制成功!"
	    $("#alerttitle").text(alerttitle);
	    $("#alerttext").text(alerttext);
	    $("#my-alert").modal();
	}
});
})
















