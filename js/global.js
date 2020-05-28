console.log("%c Cerrato", "color: #3BA4FF; font-size: 30pt; padding-left: 15%; padding-right: 15%;")
console.log("%c Never share sensitive information from this webpage, sharing cookies or any type of id voids all warranty.", "color: #FF0000; background-color: #F4F4F4; font-size: 15pt; padding-left: 15%; padding-right: 15%;")



$(".navbar-item.has-dropdown").click(function(e) {
        $(this).toggleClass("is-active");
  });

  $(".navbar-item > .navbar-link").click(function(e) {
        e.preventDefault();
  });
  $(window).resize(function(e) {
    if ($(".navbar-item.has-dropdown.is-active").length) {
      $(".navbar-item.has-dropdown.is-active").removeClass('is-active');
    }
  });



window.addEventListener('load', function () {

  console.log(document.cookie.match('(^|;) ?' + "cerrato_lightdark" + '=([^;]*)(;|$)')[2])
if(document.cookie.match('(^|;) ?' + "cerrato_lightdark" + '=([^;]*)(;|$)')[2] == "true"){
   var icon = document.getElementById('sub-icon');
  var checkbox = document.getElementById('darklight');

        $('body').removeClass("light");
	    $('body').addClass("dark");
      
      $(icon).removeClass("fas fa-sun");
	    $(icon).addClass("fas fa-moon");
  
  $(checkbox).attr("checked", true);
}
})


function changed(){
    var checkbox = document.getElementById('darklight');
  var icon = document.getElementById('sub-icon');
    if (checkbox.checked != false) {
      $('body').removeClass("light");
	    $('body').addClass("dark");
      
      $(icon).removeClass("fas fa-sun");
	    $(icon).addClass("fas fa-moon");
      
    document.cookie = "cerrato_lightdark=true";

      
    }else if (checkbox.checked != true) {
      $('body').removeClass("dark");
	    $('body').addClass("light");
      
      $(icon).removeClass("fas fa-moon");
	    $(icon).addClass("fas fa-sun");
      
    document.cookie = "cerrato_lightdark=false";

      
    }
}