define(["text!./shop.html","css!./shop.css"],function(html){
	return {
		init:function(){
			$(".axfcon").html(html);

			$.ajax("json/shop.json",{
				
				success:function(data){
					//左边列表数据
					$(".shop_hot").load("tmp/shop_list.html",function(){
						var html = baidu.template("shop_list",{data});
						$(this).html(html);		
						//点击时候获取右边大量对应数据
						$(".shop_hot").on("touchstart","li",function(){
							var id = $(this).data("id");
							var fali = $(this);
							//通过对应ID请求不同数据
							$(".shop_duck").load("tmp/shop_tmp.html",function(){
								var sh = data.data.products[id];
								var html = baidu.template("shop_tmp",{sh});
								$(this).html(html);
								//点击时图标改变
								if (!fali.children("i").hasClass("list_i")) {
									fali.children("i").addClass("list_i").end().siblings('li').children('i').removeClass("list_i");

								}

								//点击小加号执行对应操作 (注意 数据必须写在请求之后 才能找到 不然无法找到数据 无法进行操作)
								$(".shop_tab_mon").on("touchstart",".shop_s3",function(){
									//获取对应数量
									var num = parseInt($(this).prev().html());
									//获取页脚购物车中数据的数量
									var carnum = parseInt($(".mucarsp").html());
									$(this).prev().html(num+1);
									//下面购物车数量的变化
									$(".mucarsp").html(carnum+1).show();

									$(this).siblings().css("visibility","visible");
								})
								//点击减号执行操作
								$(".shop_s1").on("touchstart",function(){
									var num = parseInt($(this).next().html());
									$(this).next().html(num-1);
									var carnum = parseInt($(".mucarsp").html());
									$(".mucarsp").html(carnum-1).show();
									if (carnum<=1) {
										$(".mucarsp").html(0).hide();
									}
									if (num<=1) {
										$(this).css("visibility","hidden").next(".shop_s2").css("visibility","hidden").html(0);
									}
								})
							});
						})
						//默认显示热销榜数据 利用trigge模拟touchstart事件
						$(".shop_hot li:eq(0)").trigger("touchstart");
					});
					
				}

			})
			
		}
	}
})