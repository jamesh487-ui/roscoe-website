import { Link } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { SUPPORT_EMAIL, WEB_APP_URL } from "../lib/siteLinks"

export default function Contact() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <Header />

      <section className="flex-grow max-w-4xl mx-auto px-6 py-20">
        <h1 className="mb-6 text-4xl font-bold text-slate-900">
          Contact Roscoe
        </h1>

        <p className="mb-8 leading-relaxed text-slate-600">
          If you have any questions about Roscoe, support, pricing or getting
          your team set up, feel free to get in touch.
        </p>

        <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold text-slate-900">
            Contact details
          </h2>

          <p className="mb-2 text-slate-600">Roscoe</p>

          <p className="mb-2 text-slate-600">
            Email:{" "}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="text-sky-600 hover:underline"
            >
              {SUPPORT_EMAIL}
            </a>
          </p>

          <p className="mb-6 text-sm text-slate-500">
            We aim to respond within 1–2 working days.
          </p>

          <a
            href={WEB_APP_URL}
            className="inline-block rounded-md bg-sky-600 px-6 py-3 font-medium text-white transition hover:bg-sky-700"
          >
            Log in to the web app
          </a>
        </div>

        <div className="mt-10 text-sm text-slate-500">
          Roscoe is live on web and mobile. If you want to explore pricing or
          get your team set up, start from the{" "}
          <Link
            to="/pricing"
            className="font-medium text-sky-600 hover:underline"
          >
            pricing page
          </Link>
          .
        </div>
      </section>

      <Footer />
    </main>
  )
}
