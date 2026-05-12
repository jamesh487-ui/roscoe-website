import Header from "../components/Header"
import Footer from "../components/Footer"
import desktopHeroLaptop from "../assets/screenshots/desktop-hero-laptop.png"
import { WEB_APP_SIGNIN_URL } from "../lib/siteLinks"
import desktopJobHub from "../assets/screenshots/desktop-job-hub.png"
import desktopCustomerHub from "../assets/screenshots/desktop-customer-hub.png"
import desktopSignInShell from "../assets/screenshots/desktop-signin-shell.png"
import desktopMapBoard from "../assets/screenshots/desktop-map-board.png"

const desktopSections = [
  {
    eyebrow: "Team control",
    title: "Give the office a proper control desk.",
    body: "Use a larger workspace to coordinate visits, track job value, watch timelines and keep engineers, jobs and paperwork moving together without working off a phone all day.",
    image: desktopJobHub,
    alt: "Roscoe desktop job control workspace",
  },
  {
    eyebrow: "Customer oversight",
    title: "Keep every customer, site and commercial detail close at hand.",
    body: "Desktop is being shaped for the people chasing documents, reviewing balances, checking property history and keeping the relationship side of the business organised.",
    image: desktopCustomerHub,
    alt: "Roscoe desktop customer workspace",
  },
  {
    eyebrow: "Map board",
    title: "See the week spatially, not just as a list.",
    body: "For coordinators and office teams, the map board gives a clearer view of where work is happening, who is nearby and which jobs need attention before the day runs away from you.",
    image: desktopMapBoard,
    alt: "Roscoe desktop map board",
  },
  {
    eyebrow: "Workspace access",
    title: "Built for shared office use when web and desktop launch.",
    body: "The browser workspace and native desktop app are still being finished, but the direction is clear: faster sign-in, larger views and a calmer place for admin, scheduling and commercial follow-up.",
    image: desktopSignInShell,
    alt: "Roscoe desktop sign in preview",
  },
]

export default function DesktopPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Header />

      <section className="relative overflow-hidden bg-[#07162f] px-4 py-18 text-white sm:px-6 sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_82%_16%,rgba(59,130,246,0.16),transparent_30%),linear-gradient(180deg,#07162f_0%,#0b1e3d_100%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl">
              A bigger Roscoe workspace for the office side of the business.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
              Roscoe desktop is being shaped for planners, coordinators and
              admin teams who need more room for scheduling, paperwork,
              reporting and day-end commercial control. Web access and native
              desktop downloads are both still coming soon.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WEB_APP_SIGNIN_URL}
                className="rounded-2xl bg-white px-6 py-3 text-sm font-black text-[#07162f] shadow-xl shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-cyan-50"
              >
                Web workspace coming soon
              </a>

              <a
                href="/pricing"
                className="rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white/15"
              >
                View pricing
              </a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[22rem] sm:max-w-[34rem] lg:max-w-[40rem]">
            <img
              src={desktopHeroLaptop}
              alt="Roscoe desktop workspace preview"
              className="block h-auto w-full"
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl space-y-8">
          {desktopSections.map((section, index) => (
            <div
              key={section.title}
              className="grid gap-6 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-10 lg:p-8"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <p className="text-sm font-black uppercase tracking-[0.18em] text-sky-700">
                  {section.eyebrow}
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-slate-950 sm:text-4xl">
                  {section.title}
                </h2>
                <p className="mt-4 max-w-xl text-base leading-8 text-slate-700 sm:text-lg">
                  {section.body}
                </p>
              </div>

              <div
                className={`overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50 p-3 shadow-sm ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <img
                  src={section.image}
                  alt={section.alt}
                  className="w-full rounded-[1.2rem]"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
