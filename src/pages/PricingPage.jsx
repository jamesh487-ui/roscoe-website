import Header from "../components/Header"
import Footer from "../components/Footer"
import PageIntro from "../components/PageIntro"
import Pricing from "../components/Pricing"

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      <PageIntro
        eyebrow="Pricing"
        title="Simple plans for running the work."
        text="Start with the core tools every trade business needs, then move up when you need more jobs, users, smart tools, reporting and support."
      />
      <Pricing />
      <Footer />
    </main>
  )
}
