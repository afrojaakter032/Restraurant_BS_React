import { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout(props) {
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

        window.addEventListener("scroll", () => {
            if (window.scrollY > 70) {
                document.querySelector(".header").classList.add("fixed-top")
            } else {
                document.querySelector(".header").classList.remove("fixed-top")
            }
            
        })

        
    }, []);

    return (
        <>
            <Header />

            <main>
                {props.children}
            </main>

            <Footer />
        </>
    )
}

export default Layout;
