$(document).ready(function(){

	$('input[type="checkbox"]').click(function(){
		// var input = $('.text1');
		// var check = $(this);

	// 	// 선택되지 않은 체크박스를 체크해제한다.
	// 	$('input[type="checkbox"]').not(this).prop('checked','');

	// 	// 체크된 메뉴를 다시 체크하여 체크를 해제하는 경우는
	// 	// 체크의 value와 input창의 value가 같다.
	// 	if(input.val() == check.val()) {
	// 		input.val('');
	// 	} else {
	// 		input.val(check.val())
	// 	}
	// });

		// input창에 입력된 문자열들을 받아와서 빈 문자열이 아니면 배열에 저장
		var arr = new Array();
		$('input[type=text]').each(function(){
			var text = $(this).val();
			$(this).val('');
			if(text != '')
				arr.push(text);
		});

		// 클릭한 체크박스의 value를 가져옴
		var check = $(this);
		//console.log(check);

		// 배열에 해당 체크박스의 value가 있는지를 확인
		var isContain = arr.indexOf(check.val()); // 첫번째 위치 리턴, 없으면 -1 리턴

		// 체크 박스의 value가 배열에 없고 배열의 길이가 2이면 해당 체크박스의 체크를 비 활성화
		if(isContain < 0 && arr.length == 2) {
			check.prop('checked','');
			// return;
		}

		// 길이가 2가 아니면 해당 배열에 추가를 해당 체크 박스를 체크를 활성화
		else if (isContain < 0 && arr.length != 2) {
			arr.push(check.val());
			check.prop('checked','checked');
		}
		// 체크박스의 value가 배열에 있으면 배열에서 해당 문자열 제거
		else {
			arr.splice(isContain,1);
		}
		// 배열에 있는 문자열을 input창에 하나씩 뿌려줌
		for(var i=0; i<arr.length; i++) {
			$('input[type=text]').eq(i).val(arr[i]);
		}
	});
});



//.prop('checked','') 체크 설정 해제
//.prop('checked','checked') 체크 설정

// 처음 선택할때 , 동일한 선택했을때, 다른거 선택했을때

