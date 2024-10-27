// Switch image
const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    loop: true,
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },  
    });


    // Sidemenu


// conect emaIL

const scriptURL = 'https://script.google.com/macros/s/AKfycby_PY8CsefWBQF4jL2Fm3-C_kjX5OEJT790kwbhgZHGc04E5sMbcdI7eNL2VePt_5M/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = 'Message sent successfully'
      setTimeout(function(){
          msg.innerHTML = ''
      },3000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})

document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("active");
});

document.querySelector(".cancel-btn").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.remove("active");
});
