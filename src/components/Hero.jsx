import { Link } from "react-router-dom"
import heroDevicesCombined from "../assets/screenshots/hero-devices-combined.png"
import heroVideo from "../assets/videos/hero-background.mp4"
import { WEB_APP_SIGNUP_URL } from "../lib/siteLinks"

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#07162f] text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,22,47,0.6)_0%,rgba(7,22,47,0.44)_34%,rgba(7,22,47,0.72)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_82%_10%,rgba(59,130,246,0.15),transparent_30%)]" />
      <DesktopHero />
      <MobileHero />
    </section>
  )
}

function DesktopHero() {
  return (
    <div className="relative mx-auto hidden max-w-7xl px-6 pb-12 pt-10 xl:block">
      <div className="grid items-center gap-10 xl:grid-cols-[0.82fr_1.18fr]">
        <div className="td-reveal relative z-10 max-w-2xl">
          <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.055em] text-white xl:text-6xl">
            Your trade's best companion.
          </h1>

          <p className="mt-4 max-w-lg text-lg leading-7 text-slate-200">
            Whether you're in the office or on site, Roscoe helps you stay organised, in control and ready for the next job.
          </p>

          <div className="mt-6 flex gap-3">
            <a
              href={WEB_APP_SIGNUP_URL}
              className="rounded-2xl bg-white px-6 py-3 text-sm font-black text-[#07162f] shadow-xl shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-cyan-50"
            >
              Start free
            </a>

            <Link
              to="/desktop"
              className="rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white/15"
            >
              Explore desktop
            </Link>
          </div>
        </div>

        <HeroDevices />
      </div>
    </div>
  )
}

function MobileHero() {
  return (
    <div className="relative mx-auto max-w-7xl px-4 pb-8 pt-5 xl:hidden sm:px-6">
      <div className="td-reveal relative z-10 max-w-[38rem]">
        <h1 className="max-w-[22rem] text-3xl font-black leading-[0.95] tracking-[-0.05em] text-white sm:max-w-[32rem] sm:text-5xl">
          Your trade's best companion.
        </h1>

        <p className="mt-3 max-w-[24rem] text-sm leading-6 text-slate-200 sm:max-w-[34rem] sm:text-base sm:leading-7">
          Whether you're in the office or on site, Roscoe helps you stay organised, in control and ready for the next job.
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
          <a
            href={WEB_APP_SIGNUP_URL}
            className="rounded-2xl bg-white px-4 py-3 text-center text-sm font-black text-[#07162f] shadow-xl shadow-slate-950/20 sm:px-6"
          >
            Start free
          </a>

          <Link
            to="/desktop"
            className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-center text-sm font-black text-white sm:px-6"
          >
            Desktop
          </Link>
        </div>
      </div>

      <div className="td-reveal td-reveal-delay relative z-10 mt-6 sm:mt-8">
        <HeroDevices compact />
      </div>
    </div>
  )
}

function HeroDevices({ compact = false }) {
  return (
    <div
      className={`relative ${
        compact ? "min-h-[18rem] sm:min-h-[28rem] lg:min-h-[31rem]" : "min-h-[30rem]"
      }`}
    >
      <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/20 blur-3xl sm:h-56 sm:w-56" />

      <div
        className={`relative ${
          compact
            ? "mx-auto w-full max-w-[21rem] sm:max-w-[31rem] lg:max-w-[36rem]"
            : "ml-auto mr-0 mt-2 w-[36rem] xl:w-[40rem]"
        }`}
      >
        <img
          src={heroDevicesCombined}
          alt="Roscoe desktop and mobile app preview"
          className="block h-auto w-full image-render-auto"
        />
      </div>
    </div>
  )
}
