$('.pp-pic').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1.67,
    dots:true,
    prevArrow: '<button class="slick-prev slick-arrow absolute-prev" aria-label="Previous" type="button" style=""><i class="fa fa-chevron-left"></i></button>',
    nextArrow: '<button class="slick-next slick-arrow absolute-next" aria-label="Next" type="button" style=""><i class="fa fa-chevron-right"></i></button>'
  });

  var arrList = document.querySelectorAll('.slick-dots li');
  for (var x = 0; x < arrList.length; x++) {
     arrList[x].innerHTML = '<i class="fa fa-circle defaut" onclick="dots('+ x + 1 + ')"></i>';
     arrList[0].innerHTML = '<i class="fa fa-circle defaut actived-size"></i>';
  }

  
