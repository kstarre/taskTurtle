jQuery(document).ready(function(){
  'use strict';

  //============================== MENU SCROLL =========================
   $(window).load(function(){
    $('.body-wrapper').each(function(){
      var header_area = $('.header');
      var main_area = header_area.children('.nav-wrapper');

      var logo = main_area.find('.navbar-header');
      var navigation = main_area.find('.navbar-collapse');
      var original = {
        nav_top: navigation.css('margin-top')
      };

      $(window).scroll(function(){
        if( main_area.hasClass('bb-fixed-header') && ($(this).scrollTop() === 0 || $(this).width() < 750)){
          main_area.removeClass('bb-fixed-header').appendTo(header_area);
          navigation.animate({'margin-top': original.nav_top}, {duration: 300, queue: false, complete: function(){
            header_area.css('height', 'auto');
          }});
        }else if( !main_area.hasClass('bb-fixed-header') && $(this).width() > 750 &&
          $(this).scrollTop() > header_area.offset().top + header_area.height() - parseInt($('html').css('margin-top'), 10) ){

          header_area.css('height', header_area.height());
          main_area.css({'opacity': '0'}).addClass('bb-fixed-header');
          main_area.appendTo($('body')).animate({'opacity': 1});

          navigation.css({'margin-top': '0px'});
        }
      });
    });

    $(window).trigger('resize');
    $(window).trigger('scroll');
  });

//============================== SELECT BOX =========================
  $('.select-drop').selectbox();

//============================== HEADER =========================

  $('.navbar a.dropdown-toggle').on('click', function(e) {
      var elmnt = $(this).parent().parent();
      if (!elmnt.hasClass('nav')) {
          var li = $(this).parent();
          var heightParent = parseInt(elmnt.css('height').replace('px', '')) / 2;
          var widthParent = parseInt(elmnt.css('width').replace('px', '')) - 10;

          if(!li.hasClass('open')){
            li.addClass('open');
          }
          else {
            li.removeClass('open');
            $(this).next().css('top', heightParent + 'px');
            $(this).next().css('left', widthParent + 'px');
          }

          return false;
      }
  });

  //============================== ALL DROPDOWN ON HOVER =========================
    if($('.navbar').width() > 1007)
    {
      $('.nav .dropdown').hover(function() {
            $(this).addClass('open');
        },
        function() {
            $(this).removeClass('open');
        });
    }

//============================== SMOOTH SCROLLING TO SECTION =========================

  $('.scrolling  a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    var target = $(this).attr('href');
    $(target).velocity('scroll', {
      duration: 800,
      offset: -150,
      easing: 'easeOutExpo',
      mobileHA: false
    });
  });

// scroll to a div with the ID "scrollToThis" by clicking a link with the class "scrollLink"
$('.scrolling').click( function() {
     $('html, body').animate({
          scrollTop: $('#categories').offset().top -50,
          scrollTop: $('#message').offset().top -50
     }, 600);
});

//============================== FILE UPLOADER =========================
$(document).on('click', '.browse', function(){
  var file = $(this).parent().parent().parent().find('.file');
  file.trigger('click');
});

//============================== FANCY BOX =========================

    $('a.group').fancybox({
      'transitionIn'  : 'elastic',
      'transitionOut' : 'elastic',
      'speedIn'   : 600,
      'speedOut'    : 200,
      'overlayShow' : false
    });


//============================== CLOSE BUTTON =========================
  $('.close-btn').click(function () {
    $(this).parent().hide();
  });
});
