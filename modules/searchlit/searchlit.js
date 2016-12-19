define(["text!./searchlit.html","css!./searchlit.css"],function(html){

	return {
		init:function(){
			$(".axfcon").html(html);
			$(".goback").on("touchstart","b",function(){
			history.go(-1);
			})
		}
	}
})