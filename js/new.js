//// JavaScript Document
//
//var newsPosition;
//var newsElement;
//
//function getOffset( el ) {
//	var _x = 0;
//	var _y = 0;
//	var _xx, _yy;
//	var element = el;
//	while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
//		_x += el.offsetLeft - el.scrollLeft;
//		_y += el.offsetTop - el.scrollTop;
//		el = el.offsetParent;
////		console.log(el);
//	}
////	if !isNaN( element.offsetWidth ) {
////		_xx = null;
////	} else {
//		_xx = _x + element.offsetWidth;
////	}
////	if !isNaN( element.offsetHeight ) {
////		_yy = null;	
////	} else {
//		_yy = _y + element.offsetHeight;
////	}
//	return { top: _y, left: _x, bottom: _yy, right: _xx };
//}
//
//window.onload = function () {
//	newsElement = document.getElementById("news");
//	newsPosition = getOffset(newsElement)
//};
//
//
////$(window).scroll(function(){
////	console.log("news: ");
////	console.log(getOffset(newsElement));
////	console.log("page: ");
////	console.log(newsElement.getBoundingClientRect());
////
//////	console.log(window.scrollX);
//////	console.log(window.scrollY);
//////	$(".scrollable").stop().animate({"marginTop": ($(window).scrollTop()) + "px", "marginLeft":($(window).scrollLeft()) + "px"}, "fast" );
////});
//
//
////
////document.addEventListener('scroll', function (event) {
////    if (document.body.scrollHeight == 
////        document.body.scrollTop +        
////        window.innerHeight) {
////        alert("Bottom!");
////    }
////});
//
//document.onscroll = function() {
//	var newsBounding = newsElement.getBoundingClientRect();
//	console.log("news: ");
//	console.log(getOffset(newsElement));
//	console.log("page: ");
//	console.log(newsBounding);
////	console.log("window: ");
////	console.log(window.scrollY);
////	console.log(window.innerHeight);
////	console.log(document.body.scrollHeight);
////    if(window.scrollY + window.innerHeight >= document.body.scrollHeight) {
////        alert('bottom');
////    }
//	if (newsBounding.y <= 0) {
////		newsElement.scrollTop -= newsBounding.y;
//		$("#news").css({"position":"fixed","top":"6em","left":10});
//	}
//}


$(function () {
  var includes = $('[data-include]')
  $.each(includes, function () {
    var file = 'views/' + $(this).data('include') + '.html'
    $(this).load(file)
  })
})



