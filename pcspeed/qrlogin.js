function getqrpic() {
	$.post("https://tool.clwl.online/speed/pcspeed/code.php?r=" + Math.random(1), null, function (arr) {
		$('#qrimg').html(arr);
		if (/Android|SymbianOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone|Midp/i.test(navigator.userAgent) && navigator.userAgent.indexOf("QQ/") == -1) {
			$('#mobile').show();
		}
	});
}
function mloginurl() {
	var imagew = $('#qrcodeimg').attr('src');
	imagew = imagew.replace(/data:image\/jpeg;base64,/, "");
	$('#mlogin').html("正在跳转...");
	$.post("qrcode.php?r=" + Math.random(1), { image: imagew }, function (arr) {
		if (arr.code == 0) {
			$('#loginmsg').html('扫码后可直接登录');
			window.location.href = 'mqqapi://forward/url?version=1&src_type=web&url_prefix=' + window.btoa(arr.url);
		} else {
			alert(arr.msg);
		}
		$('#mlogin').html("跳转QQ快捷登录");
	}, 'json');
}
$(document).ready(function () {
	getqrpic();
});