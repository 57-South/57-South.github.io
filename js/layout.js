const containerEl = document.querySelector('.box-container');
const mixer = mixitup(containerEl);
function clear(){
    $(".link-list li a").removeAttr("style");
}

$("#all").on("click",function(e){
  e.preventDefault();
  clear()
  $(".link-all").css("border-bottom","4px solid #F46F32");
})

$("#profiles").on("click",function(e){
  e.preventDefault();
  clear()
  $(".link-profiles").css("border-bottom","4px solid #F46F32");
})

$("#insights").on("click",function(e){
  e.preventDefault();
  clear()
  $(".link-insights").css("border-bottom","4px solid #F46F32");
})

$("#work").on("click",function(e){
  e.preventDefault();
  clear()
  $(".link-work").css("border-bottom","4px solid #F46F32");
})




