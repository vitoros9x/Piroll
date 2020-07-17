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
     arrList[x].innerHTML = '<i class="fa fa-circle defaut" ></i>';
  }


         var dots = document.querySelectorAll('.slick-dots i');
        for (let n = 0; n < dots.length; n++) {
        dots[n].setAttribute('onclick', 'dotss('+ n +')');
        
        }
    
        function dotss(i) {
         for (let m = 0; m < dots.length; m++) {
         if (m == i) {
             dots[i].classList.add('actived-size');
         } else {
             dots[m].classList.remove('actived-size');
         }
         
     }
 }

//  onclick="dotss('+x+')"