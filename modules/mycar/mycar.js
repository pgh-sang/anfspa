define(["text!./mycar.html","css!./mycar.css"],function(html){

	return {
		init:function(){
			$(".axfcon").html(html);
			//点击全选按钮
			$("#mycar_all_o").on("touchstart",function(){
				if (!$(this).hasClass("mycar_span_con")) {
					$(this).addClass("mycar_span_con").removeClass("mycar_all_o");
					//上面的td图标改变
					
				}else{
					$(this).addClass("mycar_all_o").removeClass("mycar_span_con");
				}

			})
			//点击td中的点击按钮
			$(".mycar_tab_qx").on("touchstart",function(){
				if (!$(this).hasClass("mycar_tab_con")) {
					$(this).addClass("mycar_tab_con").removeClass("mycar_tab_o");
				}else{
					$(this).addClass("mycar_tab_o").removeClass("mycar_tab_con");
				}
			})
		}
	}
})
