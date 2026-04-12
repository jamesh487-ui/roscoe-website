import Header from "../components/Header"
import Footer from "../components/Footer"
import FeatureCatalogue from "../components/FeatureCatalogue"
import CTA from "../components/CTA"

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      <FeatureCatalogue />
      <CTA />
      <Footer />
    </main>
  )
}
