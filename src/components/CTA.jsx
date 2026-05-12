import { Link } from "react-router-dom"
import { ANDROID_APP_URL, IOS_APP_URL, WEB_APP_URL } from "../lib/siteLinks"

export default function CTA() {
  return (
    <section id="get-started" className="scroll-mt-24 bg-slate-50 px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-[#07162f] px-5 py-8 text-white shadow-2xl shadow-slate-300/30 sm:rounded-[2.2rem] sm:px-8 sm:py-14">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Get started
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Start with Roscoe on web and mobile. Desktop workspace is next.
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Roscoe is ready to market as a live product. Start free, log in
              to the web app, or explore the desktop workspace page while the
              native desktop download is being prepared.
            </p>

            <div className="mt-6 grid gap-3 text-sm text-slate-200 sm:grid-cols-3">
              {[
                "Free plan available",
                "Web app live",
                "Desktop workspace preview",
              ].map((benefit) => (
                <div
                  key={benefit}
                  className="rounded-2xl border border-slate-700 bg-slate-800 px-4 py-4 font-semibold"
                >
                  {benefit}
                </div>
              ))}
            </div>

            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400">
              Roscoe is built for trade businesses that want a more organised
              way to manage jobs, customers, quotes, invoices and commercial
              follow-up.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-slate-700 bg-slate-800 p-6">
            <div className="grid gap-4">
              <a
                href={WEB_APP_URL}
                className="rounded-2xl bg-white px-5 py-4 text-center text-base font-semibold text-slate-900 transition hover:-translate-y-0.5"
              >
                Start free in Roscoe
              </a>

              <a
                href={WEB_APP_URL}
                className="rounded-2xl border border-slate-600 bg-slate-900 px-5 py-4 text-center text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-950"
              >
                Log in to the web app
              </a>

              <Link
                to="/desktop"
                className="rounded-2xl border border-slate-600 bg-slate-900 px-5 py-4 text-center text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-950"
              >
                See the desktop workspace
              </Link>

              <div className="grid gap-3 pt-2 sm:grid-cols-2">
                <a
                  href={IOS_APP_URL}
                  className="rounded-2xl border border-slate-700 px-4 py-3 text-center text-sm font-semibold text-slate-200 transition hover:bg-slate-700"
                >
                  Download on iPhone
                </a>

                <a
                  href={ANDROID_APP_URL}
                  className="rounded-2xl border border-slate-700 px-4 py-3 text-center text-sm font-semibold text-slate-200 transition hover:bg-slate-700"
                >
                  Download on Android
                </a>
              </div>

              <p className="pt-2 text-xs leading-relaxed text-slate-400">
                The web app is live now. Native desktop downloads will follow.
                See our{" "}
                <Link to="/privacy" className="text-cyan-300 hover:underline">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link to="/terms" className="text-cyan-300 hover:underline">
                  Terms of Service
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
