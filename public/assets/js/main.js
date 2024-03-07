var swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    loop: true,
    autoplay: true,
    
    
    
    

    
    pagination: {
        el: '.swiper-pagination',
    },

    
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // }
}); 

new countUp.CountUp('YearsOfExperience', 23).start();
new countUp.CountUp('HoursOfCooking', 3200).start();
new countUp.CountUp('HappyClients', 5000).start();
new countUp.CountUp('SkilledChefs', 12).start();