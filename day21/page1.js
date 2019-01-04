$(document).ready(function(){

    var swiper = new Swiper('.contents.swiper-container');

    var titleSwiper = new Swiper('.title.swiper-container', {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        slideToClickedSlide: true
    });
    swiper.controller.control = titleSwiper;
    titleSwiper.controller.control = swiper;

    // 클릭했을때만 이미지 넘어감.
    // $('carousel').carousel('pause');
	new daum.roughmap.Lander({
		"timestamp" : "1546584189571",
		"key" : "rn7f",
		"mapWidth" : "520",
		"mapHeight" : "300"
	}).render();
});
