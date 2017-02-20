$(function(){
	var checkRule = $('.checkRule');
	var rulePop = $('.rulePop');
	var rule_cancel = $('.rule_cancel');
	checkRule.click(function(event) {
		rulePop.show();
		$('.ruleContent').css('margin-top',$(document).scrollTop());
	});
	rule_cancel.click(function(event) {
		rulePop.hide();
	});


	// var box=$('.boxIn');
	// var list=$('.imgList');
	
	// var arr = [list.children('li:eq(0)').clone(true),list.children('li:eq(1)').clone(true),list.children('li:eq(2)').clone(true),list.children('li:eq(3)').clone(true),list.children('li:eq(4)').clone(true)];
	// arr.map(function(item, index){
	// 	list.append(item);
	// })

	// var myMarginTop=0;
	// var timer;
	
	// function topFn(){
	// 	myMarginTop=myMarginTop-5;
	// 	if(myMarginTop<=-870){
	// 		myMarginTop=0;
	// 	}
	// 	list.css('margin-top', myMarginTop);	
	// }

	// timer=setInterval(topFn, 100);

	
	// var aLi=$('.imgList li');
	// aLi.hover(function() {
	// 	clearInterval(timer);
	// 	$(this).stop().fadeTo('slow', 1);
	// 	$(this).siblings().stop().fadeTo('slow', 0.5);
	// }, function() {		
	// 	clearInterval(timer);
	// 	timer=setInterval(topFn, 100);
	// 	aLi.stop().fadeTo('slow', 1);
	// });



});