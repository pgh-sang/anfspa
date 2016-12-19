define(["text!./home.html","css!./home.css"],function(html){

	return {
		init:function(){
			$(".axfcon").html(html);
			
			//用模板找到轮播图片
			 $.ajax("json/home.json",{
			 	success:function(data){

			 		var str = "";
			 		$.each(data.data.act_info[0].act_rows,function(i,elem){
			 			str += "<img class='swiper-slide' src="+elem.activity.img+"/>";
			 		})
			 		$('.swiper-wrapper').html(str);
			 		//轮播图插件设置
					var mySwiper = new Swiper ('.swiper-container', {
					    loop: true,
					    autoplay:2000,
					    autoplayDisableOnInteraction:false,
					    // 如果需要分页器
					    pagination: '.swiper-pagination',
					})
					//加载其余东西
					var da = data.data.act_info;
				
					$(".home_tmp").load("tmp/home_tmp.html",function(){
						var html = baidu.template("home_tmp",{da});
						$(this).html(html);
						//点击home中的加号
						$(".home_b").on("touchstart",function(){
							var carnum = parseInt($(".mucarsp").html());
							$(".mucarsp").html(carnum+1).show();
						})
					})
			 	}
			 })
		}
	}
})