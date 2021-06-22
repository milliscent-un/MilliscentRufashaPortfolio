


// dark and light mode
const body = document.querySelector('body');
const toggle =  document.getElementById('toggle'); 
toggle.onclick = function(){
  toggle.classList.toggle('active')
  body.classList.toggle('active');
}

// navigation
$('.button_container').click(function() {
  $(this).toggleClass('on');
  $('#overlay').toggleClass('open');
 });

 
// progress bars
const num = document.querySelector(".num");
let counter = 0;
setInterval(()=>{
  if (counter == 100){
    clearInterval();
  }else{
    counter+=1;
    num.textContent = counter +"%";
  }
}, 81);



//  slick slider
$('.one-time').slick({
   dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  adaptiveHeight: true
});
		