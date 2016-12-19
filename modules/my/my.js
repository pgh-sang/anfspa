define(["text!./my.html","css!./my.css"],function(html){

	return {
		init:function(){
			$(".axfcon").html(html);
		}
	}
})