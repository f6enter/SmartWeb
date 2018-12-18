$(document).ready(function(){
	$('#contents').click(function(){
		/**
		 * prop('속성','값') : 해당 객체의 속성을 값으로 설정
		 * prop('속성') : 해당 객체의 속성 값을 가져옴
		 * css('속성','값') : 해당 객체의 css 속성을 값으로 설정
		 * css('속성') : 해당 객체의 css 속성 값을 가져옴
		 * text('값') : 해당 객체의 텍스트 값을 설정
		 * text() : 해당 객체의 텍스트 값을 가져옴
		 * val('값') : 해당 객체의 value 값을 설정
		 * val() : 해당 객체의 value 값을 가져옴
		 */

		// 방법 1
		if($(this).prop('checked')){
			$('input[type=checkbox]').prop('checked','checked');
		} else {
			$('input[type=checkbox]').prop('checked', '');
		}

		// // 다른 방법2
		// if($(this).is(':checked')){
		// 	$('.board').prop('checked','checked');
		// } else {
		// 	$('.board').prop('checked', '');
		// }

		// // 다른 방법3
		// $('input[type=checkbox]').prop('checked', $(this).prop('checked'));
		// // 다른 방법4
		// var checked = $(this).prop('checked');
		// $('input[type=checkbox]').each(function(){
		// 	$(this).prop('checked',checked);
		// });

	});
});
