import Layout from "../components/layout"
import Navbar from "../components/navbar"
import HeroSection from "../components/heroSection"


export default function Home() {
  return (
    <Layout title="Snap">
      <div>
        <Navbar />
        <HeroSection />
      </div>
    </Layout>
  )
}
