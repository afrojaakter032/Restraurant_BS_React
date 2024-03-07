import Layout from "../../components/Layout/Layout"
import ExperienceSection from "./_ExperienceSection"
import DiscoverSection from "./_DiscoverSection"
import OurTeamSection from "./_OurTeamSection"
import RestrontsSection from "./_RestrontsSection"
import TodaysSpecialSection from "./_TodaysSpecialSection"
import OurMenuSection from "./_OurMenuSection"
import OurGallerySection from "./_OurGallerySection"

function Home() {
    return (
        <>
            <Layout>
                <DiscoverSection />

                <RestrontsSection />

                <TodaysSpecialSection />

                <OurMenuSection />

                <RestrontsSection />

                <OurTeamSection />

                <ExperienceSection />

                <OurGallerySection />
            </Layout>
        </>
    )
}

export default Home
