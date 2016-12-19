define(["text!./indent.html","css!./indent.css"],function(html){

	return {
		init:function(){
			$(".axfcon").html(html);
			$(".goback").on("click","b",function(){
			history.go(-1);
			})
		}
	}
})