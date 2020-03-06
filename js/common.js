//function scrollShrink() { 
//    window.addEventListener('scroll', function(e){
//        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
//            shrinkOn = 150; // 기준점인 y 픽셀. 
//            
//        if (distanceY > shrinkOn) { // 줄어든 헤더 버전
////            $("#search").hide();
//            $(".navbar-right").css("font-size","12px");
//            $(".logo-image-desktop").css("height","40px");
//        } else { // 평소 헤더 버전
////            $("#search").show();
//            $(".navbar-right").css("font-size","15px");
//            $(".logo-image-desktop").css("height","45px");
//        }
//    });         
//}

//탑버튼
(function ($) {
    $(document).ready(function () {
        $('.m_tops').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 500);
        })
    });
})(jQuery);


//스크롤로딩
// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

//탭메뉴
$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})

//더보기
function loadfunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "More"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Less"; 
    moreText.style.display = "inline";
  }
}