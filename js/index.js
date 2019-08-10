$(document).ready(function(){
	function changeImage(obj) {
		obj.mouseenter(function(){
			obj.addClass('change');
		});

		obj.mouseleave(function(){
			obj.removeClass('change');
		})
	}

	changeImage($('.btn1'));
	changeImage($('.btn2'));
	changeImage($('.btn3')); 
});