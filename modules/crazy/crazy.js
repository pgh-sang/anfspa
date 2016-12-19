define(["text!./crazy.html","css!./crazy.css"],function(html){

	return {
		init:function(){
			$(".axfcon").html(html);
		}
	}
})
