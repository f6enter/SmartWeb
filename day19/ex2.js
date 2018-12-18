$(document).ready(function(){
	// hover(함수1, 함수2) : 함수1은 들어올 때 호출, 함수2는 나갈 때 호출
	// hover(함수) : 들어올 때와 나갈 때 함수를 각각 호출
	// 방법1
	$('div').hover(function(){
		$(this).text('text');
	}, function() {
		$(this).text('');
	}
	);

	// // 마우스가 div로 들어올 때
	// // 방법2
	// $('div').mouseenter(function(){
	// 	$(this).text('text');
	// });
	// // 마우스가 div로 나갈 때
	// $('div').mouseleave(function(){
	// 	$(this).text('');
	// });
});
