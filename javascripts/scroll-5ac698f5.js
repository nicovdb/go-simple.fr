$(function(){$("a[href*=#]").on("click",function(t){t.preventDefault(),$("html, body").animate({scrollTop:$($(this).attr("href")).offset().top},500,"linear")})});