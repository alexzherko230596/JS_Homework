// $(document).ready(function(){
//     $('.header__burgerMobile').click(function(event){
//         $('.header__burgerMobile').addClass('active');
//     });
// });

// (function($){
//     $(function(){
//         $('.header__burgerMobile').on('click', function(){
//             $(this).toggleClass('active');
//         });
//     });
// })(jquery);

// $(document).ready(function() {
//     $(".header__burgerMobile").click(function() {
//       $(this).toggleClass("header__burgerMobile_active");
//       $('.menu').slideToggle(300, function(){
//         if($(this).css('display') === "none"){
//           $(this).removeAttr('style');
//         }
//       });
//     });
//   });

$(document).ready(function(){
	$(".header__burgerMobile").click(function(){
		$(".header__mobileMenu").toggleClass("header__mobileMenu_active"); return false;
	});
});