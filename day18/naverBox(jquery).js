$(document).ready(function(){

	$('.auto-search').click(function(){
		console.log('test')
		$('#auto-box').toggleClass('display-block');
		$('.auto-down').toggleClass('auto-up');
	});

	$('.item4').click(function(){
		// 접기 또는 더보기 버튼을 클릭하면 메뉴에 있는 배열을 임시 배열에 저장한다.
		// 접기 버튼 눌렀을 때 확인을 거치지 않은 선택된 메뉴들을 제거하는 작업.
		selectedMenu = menuArr2.slice();
		menu();
		checkMenu();
		closeSubMenu(); //closeSubMenu() 함수 안에 displayMenu() 포함되어있다.
		initCheck();
		//displayMenu();
		// $(this).toggleClass('item4-1');
		// $('.sub-menu').toggleClass('display-block');
		// $('.sub-menu-background').toggleClass('display-block');
	});

	// $('.menu-close').click(function(){
	// 	//$('.sub-menu').toggleClass('display-block');
	// 	$('.item4').toggleClass('item4-1');
	// 	$('.sub-menu').removeClass('display-block');
	// 	$('.sub-menu-background').removeClass('display-block');
	// });
	
	function menu() {
		$('.item4').toggleClass('item4-1');
		$('.sub-menu').toggleClass('display-block');
		$('.sub-menu-background').toggleClass('display-block');
	}

	// div는 ul태그를 감싸는 객체의 선택자명
	// h는 marginTop의 높이
	var ticker = function (div, h, time) {
		
		timer = setTimeout(function () {
			
			$(div+' li:first').animate({ marginTop: h }, time, function () {
				//console.log('123')
				// this는 item5클래스 안에 있는 ul태그 안에 있는 첫번째 li태그 객체
				// detach()는 해당 객체를 제구한 후 해당 객 체를 리턴한다.				
				$(this).detach().appendTo(div+'>ul').removeAttr('style');
			});
			ticker(div, h, time);
		}, 2000);

	};

	ticker('.item5', '-20px', 400);
	ticker('.news-contents', '-20px', 600);


	$('.item5').hover(function(){
		$('.real-search-box').toggleClass('display-block');
	});


	// $('.api-item').hover(function(){
	// 	$('.api-list-in').toggleClass('display-block');
	// 	$('.btn1').toggleClass('display-none');
	// });

	$('.api-list>li').hover(function(){
		//$('.api-list>li>a').toggleClass('display-none');
		$(this).children('a').toggleClass('display-none');
		//$('.api-list>li>div').toggleClass('display-block');
		$(this).children('div').toggleClass('display-block');
	});

	// box5-bottom 6개 중 선택할 박스 번호가 index
	var index = 1;
	function displayBox5(i){
		// 현재 display되어있는 box를 안보이게 하기 위해.
		$('.box5-bottom').removeClass('display-block');
		// 선택한 i번째를 보여준다.
		$('.box5-bottom').eq(i-1).addClass('display-block');
		$('.color-black').text(i);

		$('.location').removeClass('display-inline-block');
		$('.location').eq(i-1).addClass('display-inline-block');
	}

	displayBox5(index);

	$('.box5-next').click(function(){
		index++;
		// 박스가 6개이기 때문에 7번째로 가려고 하면 첫번째로 보내준다.
		if(index > 6) {
			index = 1;
		}
		displayBox5(index);
	});

	$('.box5-prev').click(function(){
		index--;
		// 박스가 6개이기 때문에 7번째로 가려고 하면 첫번째로 보내준다.
		if(index <= 0) {
			index = 6;
		}
		displayBox5(index);
	});


	$('.rank-lists').first().css('display', 'block');
	$('.rank-lists').last().css('display', 'none');

	$('.rank-left').click(function(){
		$('.rank-lists').first().css('display', 'block');
		$('.rank-lists').last().css('display', 'none');
		$(this).css('background-color', '#f9fafc');
		$('.rank-right').css('background-color', '#fff');
	});
	$('.rank-right').click(function(){
		$('.rank-lists').last().css('display', 'block');
		$('.rank-lists').first().css('display', 'none');
		$(this).css('background-color', '#f9fafc');
		$('.rank-left').css('background-color', '#fff');
	});

	// // 메뉴 설정에서 선택한 메뉴 갯수
	// var selectedMenuCnt = 0; //  사용자가 지정한 메뉴 갯수
	// // 기본 메뉴
	// var menuArr = ["dici","newsi","stocki","dealeri","mapi","moviei","musici","booki","webtooni"];
	// $('.menu-setting').click(function(){
	// 	// 메뉴 설정 클릭시 5 개의 빈 박스를 보이기 위한 cnt
	// 	var cnt = 0;
	// 	$('.item2-1').each(function(){
	// 		// 기본 코드에 item2-1과 back-img와 각 아이콘 클래스가 있는데,
	// 		// back-img와 아이콘 클래스를 제거하기 위해 prop함수로 class를 덮어쓰기한다.
	// 		$(this).prop('class','item2-1');
	// 		cnt++;
	// 		if(cnt > 5) {
	// 			$(this).addClass('display-none');
	// 		}
	// });

	// $('.menu-close').click(function(){
	// 	var i = 0;
	// 	if(selectedMenuCnt == 0) {
	// 		$('.item2-1').each(function(){
	// 			$(this).prop('class','item2-1 back-img');
	// 			$(this).addClass(menuArr[i++]);
	// 		});
	// 	}
	// });
	// });
	//subMenu.js 부분
	// 메뉴 설정에서 선택한 메뉴 갯수
	//var selectedMenuCnt = 0; //  사용자가 지정한 메뉴 갯수
	// 기본 메뉴
	var menuArr = ["dici","newsi","stocki","dealeri","mapi","moviei","musici","booki","webtooni"];
	$('.menu-setting').click(function(){
		createCheck();
		// 메뉴 설정 클릭시 5 개의 빈 박스를 보이기 위한 cnt
		var cnt = 0;
		$('.item2-1').each(function(){
			// 기본 코드에 item2-1과 back-img와 각 아이콘 클래스가 있는데,
			// back-img와 아이콘 클래스를 제거하기 위해 prop함수로 class를 덮어쓰기한다.
			if(menuArr2.length <= cnt) {
				$(this).prop('class', 'item2-1');
				if(cnt > 4) {
					$(this).addClass('display-none');
				}
			}
			cnt++;
			
		});
			// 2018-12-17
			$('.sub-menu-div input[type="checkbox"]').each(function(){
				$(this).removeClass('display-none');
			});
				$('.all-service').addClass('display-none');
				$(this).addClass('display-none');
				$('.ok').removeClass('display-none');
				$('.init').removeClass('display-none');
				$('.cancel').removeClass('display-none');
	});

	$('.menu-close').click(function(){
		selectedMenu = [];
		checkMenu();
		menu();
		closeSubMenu();
		initCheck();
	});

	$('.cancel').click(function(){
		initCheck();
		checkMenu();
		selectedMenu = menuArr2.slice(); //
		$('.all-service').removeClass('display-none');
		$('.menu-setting').removeClass('display-none');
		$('.ok').addClass('display-none');
		$('.init').addClass('display-none');
		$('.cancel').addClass('display-none');
		var i = 0;

		if(menuArr2.length == 0) {
			$('.item2-1').each(function(){
				$(this).prop('class','item2-1 back-img');
				$(this).addClass(menuArr[i++]);
			});
		} else {
			$('.item2-1').each(function(){
				if(menuArr2.length > i) {
					$(this).prop('class','item2-1 back-img');
					$(this).addClass(menuArr2[i++]);
				} else {
					$(this).prop('class', 'item2-1 display-none');
				}
			});
		}

		$('.sub-menu-div input[type="checkbox"]').each(function(){
			$(this).addClass('display-none');
		});
	});



	// ------------------ 더보기 -> 메뉴설정 -> 체크박스 선택하는 부분 ---------------------

	var selectedMenu = []; // 메뉴 설정에서 선택한 메뉴들을 저장하는 배열
	var menuArr2 = []; // 실제 네이버에 뿌려줄 메뉴
	$('.sub-menu-div input[type="checkbox"]').click(function(){
		// 클릭한 체크박스의 value를 가져옴
		var check = $(this);

		// 배열에 해당 체크박스의 value가 있는지를 확인
		var isContain = selectedMenu.indexOf(check.val()); // 첫번째 위치 리턴, 없으면 -1 리턴
		var maxSize = 5;
		// 체크 박스의 value가 배열에 없고 배열의 길이가 5이면 해당 체크박스의 체크를 비 활성화
		if(isContain < 0 && selectedMenu.length == maxSize) {
			check.prop('checked','');
			// return;
		}
		// 길이가 5가 아니면 해당 배열에 추가를 해당 체크 박스를 체크를 활성화
		else if (isContain < 0 && selectedMenu.length != maxSize) {
			selectedMenu.push(check.val());
			check.prop('checked','checked');
		}
		// 체크박스의 value가 배열에 있으면 배열에서 해당 문자열 제거
		else {
			selectedMenu.splice(isContain,1);
		}

		// 2018-12-17
		// 배열에 있는 문자열을 item2-1에 하나씩 뿌 려 줌
		var cnt = 0;
		$('.item2-1').each(function(){
			if(cnt < selectedMenu.length) {
				$(this).prop('class','item2-1 back-img');
				$(this).addClass(selectedMenu[cnt++]);
			}
			else {
				$(this).prop('class','item2-1');
				if (cnt > 4)
				$(this).addClass('display-none');
				cnt++;
			}
		});
	});
  // ------------------ 더보기 -> 메뉴설정 -> 체크박스 선택하는 부분 ---------------------
	

	$('.ok').click(function(){
		initCheck();
		menuArr2 = selectedMenu.slice();
		menu();
		closeSubMenu();
	});

	$('.init').click(function(){
		initCheck();
		menuArr2 = [];
		selectedMenu = [];
		alert('초기 설정으로 돌아갑니다.');
		menu();
		closeSubMenu();
		checkMenu();
	});


	// MenuArr2에서 저장된 값들만 check가 되도록 하는 함수
	// checkMenu() 함수는 선택된 사용자 메뉴의 값을 이용하여 체크박스의 체크 여부를 결정 2018-12-18
	// 사용자 설정에 체크된 메뉴만 체크되도록 해줌.
	function checkMenu() {
		$('.sub-menu-div input[type="checkbox"]').each(function(){
			$(this).prop('checked', '');
			for(var i = 0; i<menuArr2.length; i++) {
				if($(this).val() == menuArr2[i]) {
					$(this).prop('checked', 'checked');
				}
			}
		});
	}

	function closeSubMenu(){
		displayMenu();
		// 더보기 버튼 클릭시 체크박스가 보이지 않게 해주는 기능
		$('.sub-menu-div input[type="checkbox"]').each(function(){
			$(this).addClass('display-none');
		});
		subDetailMenu(0);
		// $('.all-service').removeClass('display-none');
		// $('.menu-setting').removeClass('display-none');
		// $('.ok').addClass('display-none');
		// $('.init').addClass('display-none');
		// $('.cancel').addClass('display-none');
	}

	// subDetailMenu(toggle) 함수는 더보기 버튼 클릭시 오른 쪽 상단 보이는 메뉴를 결정하는 함수로, 
	// 0이면 서비스 전체보기 메뉴설정이 보이고, 1이면 초기화, 확인, 취소가 보임.
	function subDetailMenu(toggle){
		if(toggle==0){
			$('.all-service').removeClass('display-none');
			$('.menu-setting').removeClass('display-none');
			$('.ok').addClass('display-none');
			$('.init').addClass('display-none');
			$('.cancel').addClass('display-none');
		}else {
			$('.all-service').addClass('display-none');
			$('.menu-setting').addClass('display-none');
			$('.ok').removeClass('display-none');
			$('.init').removeClass('display-none');
			$('.cancel').removeClass('display-none');
		}
	}

	// menu()함수는 더보기/접기 버튼
	function menu() {
		$('.item4').toggleClass('item4-1');
		$('.sub-menu').toggleClass('display-block');
		$('.sub-menu-background').toggleClass('display-block');
	}

	// 더보기 눌렀을 때 체크박스가 없는 라벨을 클릭시 아무 동작을 하지 않도록 해주는 함수.
	function initCheck() {
		$('.sub-menu-div label').each(function(){
			$(this).prop('for','');
		});
	}

	// 라벨과 체크를 연결해줌.
	function createCheck() {
		var i = 0;
		var checkbox = $('.sub-menu-div input[type=checkbox]');
		$('.sub-menu-div label').each(function(){
			$(this).prop('for',checkbox.eq(i++).prop('id'));
		});
	}

	// 선택(체크)된 메뉴를 표시하고, 선택되지 않은 메뉴는 보이지 않게함(ej)
	// displayMenu() 함수는 사용자가 선택한 메뉴 또는 기본 메뉴를 출력하는 기능.
	function displayMenu() { 
		var i = 0;
		if(menuArr2.length == 0) {
			$('.item2-1').each(function(){
				$(this).prop('class','item2-1 back-img');
				$(this).addClass(menuArr[i++]);
			});
		} else {
			$('.item2-1').each(function(){
				if(menuArr2.length > i) {
					$(this).prop('class','item2-1 back-img');
					$(this).addClass(menuArr2[i++]);
				} else {
					$(this).prop('class', 'item2-1 display-none');
				}
			});
		}
	}


});