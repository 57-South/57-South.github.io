// hamburger menu
const hamburgerMenu = $('.hamburger-menu');

hamburgerMenu.click( function () {
  $(".hamburger-menu").toggleClass('close');
  $(".overlay-container").toggleClass('show-overlay-container');
  $(".main-content").toggleClass('hide-main-content');
});


function handleNext() {

  var $radios = $('input[class*="slide-radio"]');
  var $activeRadio = $('input[class*="slide-radio"]:checked');

  var currentIndex = $activeRadio.index();
  var radiosLength = $radios.length;

  $radios
    .attr('checked', false);


  if (currentIndex >= radiosLength - 1) {

    $radios
      .first()
      .attr('checked', true);

  } else {

    $activeRadio
      .next('input[class*="slide-radio"]')
      .attr('checked', true);

  }

}

 function handlePrevious () {
   var $radios = $('input[class*="slide-radio"]');
   var $activeRadio = $('input[class*="slide-radio"]:checked');

   var currentIndex = $activeRadio.index();
   var radiosLength = $radios.length;

   $radios
     .attr('checked', false);

      if (currentIndex < radiosLength - 1) {
       $radios
        .first()
        .attr('checked', true);
     } else {
       $radios
       .prev()
       .attr('checked', true)
     }



};

const arrowLeft = $('.fa-angle-left');
const arrowRight = $('.fa-angle-right');

arrowRight.click(handleNext);
arrowLeft.click(handlePrevious);