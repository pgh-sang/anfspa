<?php
require_once "jssdk.php";
// appId  和 秘钥
$jssdk = new JSSDK("wxae8146d65ffa36e3", "3e1428025dbe620638b2ed2a3493d128");
$signPackage = $jssdk->GetSignPackage();
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
	<link rel="stylesheet" type="text/css" href="css/reset.css">
	<link rel="stylesheet" type="text/css" href="css/index.css">
	<script data-main="app" type="text/javascript" src="js/require.js"></script>
	<link rel="stylesheet" type="text/css" href="js/swiper-3.3.1.min.css">
</head>
	<body>
		<div class="axfcon"></div>
		<footer class="index_foo">
			<ul>
				<li>
					<a href="#home">
						<div>
							<img src="images/01.png">
						</div>
						<p>首页</p>
					</a>
				</li>
				<li>
				<a href="#shop">
					<div>
						<img src="images/02.png">
					</div>
					<p>山松超市</p>+

				</a>
				</li>
				<li class="mycarNum">
					<a href="#mycar">
						<div>
							<img src="images/03.png">
						</div>
						<p>购物车</p>
					</a>
					<span class="mucarsp">0</span>
				</li>
				<li>
				<a href="#my">
					<div>
						<img src="images/04.png">
					</div>
					<p>我的</p>
					</a>
				</li>
			</ul>
		</footer>
		<script type="text/javascript"></script>
	</body>
	<script type="text/javascript">
	document.documentElement.style.fontSize = innerWidth/10 + "px";
	window.onresize = function(){
		document.documentElement.style.fontSize = innerWidth/10 + "px";
	}
	wx.config({
		    debug: true,
		    appId: '<?php echo $signPackage["appId"];?>',
		    timestamp: <?php echo $signPackage["timestamp"];?>,
		    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
		    signature: '<?php echo $signPackage["signature"];?>',
		     jsApiList: [
		        'checkJsApi',
		        'hideMenuItems',
		        'showMenuItems',
		        'hideAllNonBaseMenuItem',
		        'showAllNonBaseMenuItem',
		        'translateVoice',
		        'startRecord',
		        'stopRecord',
		        'onVoiceRecordEnd',
		        'playVoice',
		        'onVoicePlayEnd',
		        'pauseVoice',
		        'stopVoice',
		        'uploadVoice',
		        'downloadVoice',
		        'chooseImage',
		        'previewImage',
		        'uploadImage',
		        'downloadImage',
		        'getNetworkType',
		        'openLocation',
		        'getLocation',
		        'hideOptionMenu',
		        'showOptionMenu',
		        'closeWindow',
		        'scanQRCode',
		        'chooseWXPay',
		        'openProductSpecificView',
		        'addCard',
		        'chooseCard',
		        'openCard'
		      ]
		  });

</script>
</html>

