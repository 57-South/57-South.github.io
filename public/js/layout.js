// initialize IIFE


const $grid = $('.box-container').isotope({
  itemSelector: '.box',
  layoutMode: 'fitRows',
  percentPosition: true
});


$("#all").on("click",function(e){
  e.preventDefault();
  $grid.isotope({filter:"*"})
})

$("#profiles").on("click",function(e){
  e.preventDefault();
  $grid.isotope({filter:".profiles"})
})

$("#insights").on("click",function(e){
  e.preventDefault();
  $grid.isotope({filter:".insights"})
})

$("#work").on("click",function(e){
  e.preventDefault();
  $grid.isotope({filter:".work"})
})
