	define(["backbone"], function(Backbone){
	var Router = Backbone.Router.extend({
		routes:{
			home: "home",
			shop: "shop",
			mycar: "mycar",
			my: "my",
			"":"home",
			search:"search",
			searchlit:"searchlit",
			crazy:"crazy",
			score:"score",
			indent:"indent"
		},
		home: function(){
			require(["./modules/home/home.js"],function(home){
				home.init();
				
			});
		},
		shop: function(){
			require(["modules/shop/shop.js"],function(shop){
			shop.init();
			});
		},
		mycar: function(){
			require(["modules/mycar/mycar.js"],function(mycar){
			mycar.init();
			});
		},
		my: function(){
			require(["modules/my/my.js"],function(mine){
				mine.init();
			});
		},
		search:function(){
			require(["modules/search/search.js"],function(search){
				search.init();
			})
		},
		searchlit:function(){
			require(["modules/searchlit/searchlit.js"],function(searchlit){
				searchlit.init();
			})
		},
		crazy:function(){
			require(["modules/crazy/crazy.js"],function(crazy){
				crazy.init();
			})
		},
		score:function(){
			require(["modules/score/score.js"],function(score){
				score.init();
			})
		},
		indent:function(){
			require(["modules/indent/indent.js"],function(score){
				score.init();
			})
		}
	});
	return new Router();
});