// initialize IIFE


// const $grid = $('.box-container').isotope({
//   itemSelector: '.box',
//   layoutMode: 'fitRows',
//   percentPosition: true
// });

function clear(){
    $(".link-list li a").removeAttr("style");
}

$("#all").on("click",function(e){
  e.preventDefault();
  clear()
  $(".link-all").css("border-bottom","4px solid #F46F32");
  $grid.isotope({filter:"*"})
})

$("#profiles").on("click",function(e){
  e.preventDefault();
  clear()
  $(".link-profiles").css("border-bottom","4px solid #F46F32");
  $grid.isotope({filter:".profiles"})
})

$("#insights").on("click",function(e){
  e.preventDefault();
  clear()
  $(".link-insights").css("border-bottom","4px solid #F46F32");
  $grid.isotope({filter:".insights"})
})

$("#work").on("click",function(e){
  e.preventDefault();
  clear()
  $(".link-work").css("border-bottom","4px solid #F46F32");
  $grid.isotope({filter:".work"})
})




