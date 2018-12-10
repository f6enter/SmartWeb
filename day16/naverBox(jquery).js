
$(document).ready(function(){

	$('.auto-search').click(function(){
		console.log('test')
		$('#auto-box').toggleClass('display-block');
		$('.auto-down').toggleClass('auto-up');
	});

	$('.item4').click(function(){
		$(this).toggleClass('item4-1');
		$('.sub-menu').toggleClass('display-block');
		$('.sub-menu-background').toggleClass('display-block');
	});

	$('.menu-close').click(function(){
		//$('.sub-menu').toggleClass('display-block');
		$('.item4').toggleClass('item4-1');
		$('.sub-menu').removeClass('display-block');
		$('.sub-menu-background').removeClass('display-block');
	});
	
	function menu() {
		$('.item4').toggleClass('item4-1');
		$('.sub-menu').removeClass('display-block');
		$('.sub-menu-background').removeClass('display-block');
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

	
	$('.a0110').click(function(){
		$('.search-0110').css('display', 'block');
		$('.search-1120').css('display', 'none');
	});

	$('.a1120').click(function(){
		$('.search-1120').css('display', 'block');
		$('.search-0110').css('display', 'none');
	});

	

});