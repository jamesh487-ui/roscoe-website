import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { WEB_APP_SIGNIN_URL, WEB_APP_SIGNUP_URL } from "../lib/siteLinks"

function PlatformAvailability({ mobile = false }) {
  return (
    <div className={`flex items-center gap-2 ${mobile ? "justify-center" : ""}`}>
      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-sm">
        <AppleMark />
      </span>
      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-sm">
        <AndroidMark />
      </span>
    </div>
  )
}

function AppleMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M16.7 12.6c0-2.2 1.8-3.2 1.9-3.3-1-1.5-2.7-1.7-3.2-1.7-1.4-.1-2.7.8-3.4.8-.7 0-1.8-.8-3-.8-1.5 0-3 .9-3.8 2.2-1.6 2.7-.4 6.7 1.1 8.8.7 1 1.6 2.2 2.8 2.1 1.1 0 1.6-.7 3-.7s1.9.7 3 .7c1.2 0 2-1.1 2.8-2.1.8-1.2 1.2-2.3 1.2-2.4 0 0-2.4-.9-2.4-3.6Zm-2.1-6.4c.6-.7 1-1.8.9-2.8-.9 0-2 .6-2.7 1.3-.6.7-1.1 1.8-1 2.8 1 .1 2.1-.5 2.8-1.3Z" />
    </svg>
  )
}

function AndroidMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M7 8.2h10c.9 0 1.7.8 1.7 1.7v6.6c0 1-.8 1.7-1.7 1.7h-.8v2.1c0 .5-.4.9-.9.9s-.9-.4-.9-.9v-2.1h-4.8v2.1c0 .5-.4.9-.9.9s-.9-.4-.9-.9v-2.1H7c-1 0-1.7-.8-1.7-1.7V9.9C5.3 9 6 8.2 7 8.2Zm2-4.3c.2-.3.6-.4.8-.2.3.2.4.6.2.8L9.2 5.8c.9-.4 1.8-.6 2.8-.6s1.9.2 2.8.6l-.8-1.3c-.2-.3-.1-.7.2-.8.3-.2.7-.1.8.2l1 1.7c1.1.7 1.9 1.8 2.3 3.1H5.7c.4-1.3 1.2-2.4 2.3-3.1l1-1.7Zm.4 6.8a.9.9 0 1 0 0 1.8.9.9 0 0 0 0-1.8Zm5.2 0a.9.9 0 1 0 0 1.8.9.9 0 0 0 0-1.8Z" />
    </svg>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === "/"

  const navItems = [
    { label: "Features", to: "/features" },
    { label: "How it works", to: "/how-it-works" },
    { label: "Desktop", to: "/desktop" },
    { label: "Pricing", to: "/pricing" },
    { label: "Contact", to: "/contact" },
  ]

  function handleNavClick() {
    setMenuOpen(false)
  }

  const logo = (
    <span className="inline-flex items-center">
      <img
        src="/roscoe-header-logo.png"
        alt="Roscoe"
        className="h-11 w-auto shrink-0 object-contain sm:h-12"
      />
    </span>
  )

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#07162f]/95 text-white shadow-[0_12px_30px_rgba(2,6,23,0.35)] backdrop-blur xl:sticky">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-10">
            {isHomePage ? (
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="inline-flex items-center"
              >
                {logo}
              </button>
            ) : (
              <Link to="/" className="inline-flex items-center">
                {logo}
              </Link>
            )}

            <nav className="hidden items-center gap-6 xl:flex">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`text-sm font-semibold transition hover:text-cyan-300 ${
                    location.pathname === item.to ? "text-cyan-300" : "text-slate-200"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="hidden items-center gap-3 xl:flex">
            <PlatformAvailability />
            <a
              href={WEB_APP_SIGNIN_URL}
              className="rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-white/15"
            >
              Log in
            </a>
            <a
              href={WEB_APP_SIGNUP_URL}
              className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-[#07162f] shadow-[0_12px_24px_rgba(255,255,255,0.12)] transition hover:-translate-y-0.5 hover:bg-cyan-50"
            >
              Sign up
            </a>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white shadow-sm xl:hidden"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-5 bg-white transition ${
                  menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-white transition ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-white transition ${
                  menuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {menuOpen ? (
          <div className="border-t border-white/10 bg-[#07162f] xl:hidden">
            <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={handleNavClick}
                    className={`rounded-xl px-3 py-3 text-sm font-medium transition hover:bg-white/10 hover:text-cyan-300 ${
                      location.pathname === item.to
                        ? "bg-white/10 text-cyan-300"
                        : "text-slate-200"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4">
                <PlatformAvailability mobile />
                <a
                  href={WEB_APP_SIGNIN_URL}
                  className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  Log in
                </a>
                <a
                  href={WEB_APP_SIGNUP_URL}
                  className="rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-[#07162f]"
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </header>
      <div aria-hidden="true" className="h-[69px] xl:hidden" />
    </>
  )
}
