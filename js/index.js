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

});
