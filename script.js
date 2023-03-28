const list = ["01 Neural Network Evolution", "02 The Cybersecurity gold rush", "03 Sensitive data with Blockchain", "04 Metaverse steps into healthcare"];


var swiper = new Swiper(".mySwiper", {

    slidesPerView: 1,
    spaceBetween: 10,
    direction: "horizontal",
    cssMode: true,
    keyboard: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
    breakpoints: {
        1199: {
        direction: "vertical",
        autoHeight: true,
        freeMode: true,
        spaceBetween: 0,
        scrollbar: {
            el: ".swiper-scrollbar",
          },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (list[index]) + '</span>';
          },
        },
        mousewheel: true,
        keyboard: true,
    },
}
      });