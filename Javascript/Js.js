// Change nav style on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0);
})

//Contact Buttons (circular text buttons)
const textButtons = document.querySelectorAll('.contact__btn');

textButtons.forEach(textButtons => {
    let text = textButtons.querySelector('p');
    text.innerHTML=text.innerHTML.split('').map((character,index) => `<span style="transform: rotate(${index*12}deg">${character}</span>`).join('')
})



//Swiper JS
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        599:{
            slidesPerView: 2,
            spaceBetween: 40
        },
        1023:{
            slidesPerView: 3,
            spaceBetween: 60
        }
    }
  });