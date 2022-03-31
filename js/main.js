$(function () {
  if($(window).scrollTop() >= $('.icon_wrap').offset().top) {
    $('header').addClass('bg_on')
 }
 if($(window).scrollTop() < $('.icon_wrap').offset().top) {
    $('header').removeClass('bg_on')
 }
  $(window).scroll(function() {
    if($(window).scrollTop() >= $('.icon_wrap').offset().top) {
       $('header').addClass('bg_on')
    }
    if($(window).scrollTop() < $('.icon_wrap').offset().top) {
       $('header').removeClass('bg_on')
    }
  })
  $('.brand_box .brand_slider ul').slick({
    slidesToShow : 2,
    autoplay : true,
    dots : true,
    //appendDots: $('.brand_btns'),
    responsive : [{
      breakpoint : 720,
      settings : {
        slidesToShow : 1,
        centerMode: false,
      }
    }]
  })
  $('.brand_wrap .mo_logo_btns').slick({
    slidesToShow : 3,
    dots : false,
    arrows : false,
    responsive : [{
      breakpoint : 580,
      settings : {
        slidesToShow : 2,
      }
    }]
    });
  

   $('.global_wrap .slider_box').slick({
      autoplay : true,
      slidesToShow : 1,
      dots : true,
      centerMode : true,
      centerPadding : '400px',
      appendDots : $('.global_btns'),
      appendArrows : $('.global_arrow'),
      responsive : [
         {
           breakpoint : 1299,
           settings : {
             centerPadding : '100px'
           }
         }, {
            breakpoint : 1200,
            settings : {
              centerPadding : '0px',
            }
         },{
           breakpoint : 720,
           settings : {
            dots : true,
            centerPadding : '30px'
           }
         }
       ]
   });


   $('.vis_slider ul').slick({
      slidesToShow : 1,
      autoplay : true,
      dots : true,
      appendDots : $('.vis_btns'),
      appendArrows : $('.vis_arrow')
   })

   $('.yong_slider').slick({
    slidesToShow : 2,
    autoplay : true,
    dots : true,
  })
   
   $('.news_slider ul').slick({
      slidesToShow : 3,
      autoplay : true,
      dots : true,
      responsive : [{
        breakpoint : 1299,
        settings : {
          slidesToShow : 3
        },
        breakpoint : 920,
        settings : {
          slidesToShow : 2
        }
      }],
   })
  //  $('news_slider .slick-dots li').

   $('.news_slider li').each(function() {
    let elm = $(this).find('strong')
    let elmTxt = elm.text().substr(0, 40).concat('...')
    if(elm.text().length > 40) {
      elm.text(elmTxt)
    }
   })
   $(window).resize(function() {
    if ($('.sns_wrap').width() < 1299) {
     $('.sns_slider li').each(function() {
      let elm = $(this).find('p')
      let elmTxt = elm.text().substr(0, 30).concat('...')
      if(elm.text().length > 30) {elm.text(elmTxt)}
    })
   }
   })
   
   

   $('.sns_slider ul').slick({
    slidesToShow : 2,
    autoplay : true,
    dots : true,
    appendDots : $('.sns_btns'),
    appendArrows : $('.sns_arrow'),
    // responsive : [{
    //   breakpoint : 1299,
    //   settings : {
    //     slidesToShow : 4,
    //     centerMode : true,
    //   },
    //   breakpoint : 720,
    //   settings : {
    //     slidesToShow : 2
    //   }
    // }]
  })
})//ready()

