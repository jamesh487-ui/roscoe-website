import { useMemo } from "react"
import { Link, useLocation } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import heroDevicesCombined from "../assets/screenshots/hero-devices-combined.png"
import { ANDROID_APP_URL, IOS_APP_URL } from "../lib/siteLinks"

export default function WorkspaceComingSoonPage() {
  const location = useLocation()

  const requestedModeLabel = useMemo(() => {
    const search = new URLSearchParams(location.search)
    return search.get("mode") === "signup" ? "sign-up" : "login"
  }, [location.search])

  return (
    <main className="min-h-screen bg-slate-50">
      <Header />

      <section className="relative overflow-hidden bg-[#07162f] px-4 py-16 text-white sm:px-6 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_82%_16%,rgba(59,130,246,0.16),transparent_30%),linear-gradient(180deg,#07162f_0%,#0b1e3d_100%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="max-w-2xl">
            <p className="inline-flex rounded-full border border-cyan-200/20 bg-white/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-cyan-100">
              Web and desktop coming soon
            </p>

            <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl">
              Roscoe web login is not live yet.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
              You clicked into the {requestedModeLabel} route, but the browser workspace
              and desktop app are still being finished. They are planned for later, so
              this page is here to stop people landing on an unfinished product.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={IOS_APP_URL}
                className="rounded-2xl bg-white px-6 py-3 text-sm font-black text-[#07162f] shadow-xl shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-cyan-50"
              >
                Get iPhone app
              </a>
              <a
                href={ANDROID_APP_URL}
                className="rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white/15"
              >
                Get Android app
              </a>
              <Link
                to="/desktop"
                className="rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white/15"
              >
                Explore desktop page
              </Link>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[22rem] sm:max-w-[30rem] lg:max-w-[38rem]">
            <img
              src={heroDevicesCombined}
              alt="Roscoe desktop and mobile app preview"
              className="block h-auto w-full"
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {[
            "Use Roscoe on mobile while the browser workspace is completed.",
            "Desktop downloads are planned after the web workspace is properly finished.",
            "We would rather block early access than send people into something half-ready.",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-base font-bold leading-8 text-slate-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
