define(["text!./search.html","css!./search.css"],function(html){

	return {
		init:function(){
			$(".axfcon").html(html);
			$(".goback").on("click","b",function(){
			history.go(-1);
			})
		}
	}
})