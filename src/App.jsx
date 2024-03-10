
import { useEffect } from "react"
import Home from "/pages/Home/Home"

function App() {
    useEffect(() => {
        var swiper = new Swiper('.swiper', {
            slidesPerView: 3,
            loop: true,
            autoplay: true,
            pagination: {
                el: '.swiper-pagination',
            },
        }); 
        
        new countUp.CountUp('YearsOfExperience', 23).start();
        new countUp.CountUp('HoursOfCooking', 3200).start();
        new countUp.CountUp('HappyClients', 5000).start();
        new countUp.CountUp('SkilledChefs', 12).start();
        
    }, []);

    return (
        <>
        </>
    )
}

export default App
