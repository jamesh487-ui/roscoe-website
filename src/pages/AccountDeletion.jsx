import Footer from "../components/Footer"
import Header from "../components/Header"

export default function AccountDeletion() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <Header />

      <section className="flex-grow max-w-4xl mx-auto px-6 py-20">
        <h1 className="mb-6 text-4xl font-bold text-slate-900">
          Account deletion
        </h1>

        <p className="mb-8 leading-relaxed text-slate-600">
          TradeDesk users can request deletion of their account and associated
          workspace data by contacting our support team. This page explains how
          to make that request and what happens afterwards.
        </p>

        <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm space-y-8">
          <div>
            <h2 className="mb-3 text-xl font-semibold text-slate-900">
              How to request deletion
            </h2>
            <p className="leading-relaxed text-slate-600">
              Email{" "}
              <a
                href="mailto:admin@tradedeskuk.com?subject=TradeDesk%20account%20deletion%20request"
                className="text-sky-600 hover:underline"
              >
                admin@tradedeskuk.com
              </a>{" "}
              from the email address linked to your TradeDesk account and use
              the subject line <strong>Account deletion request</strong>.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold text-slate-900">
              What to include
            </h2>
            <ul className="list-disc space-y-2 pl-6 text-slate-600">
              <li>your full name</li>
              <li>your TradeDesk account email address</li>
              <li>your business or workspace name</li>
              <li>a clear statement that you want your account deleted</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold text-slate-900">
              What happens next
            </h2>
            <p className="leading-relaxed text-slate-600">
              We may need to verify that the request is genuine before deleting
              the account. Once verified, we will process the request and remove
              the account together with associated workspace data, subject to
              any legal, tax, fraud-prevention or accounting records we are
              required to retain.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold text-slate-900">
              Data retention
            </h2>
            <p className="leading-relaxed text-slate-600">
              Where deletion is requested, TradeDesk will remove account and
              workspace data that is no longer needed to provide the service.
              Limited records may be retained where required for legal,
              regulatory, tax, accounting, billing dispute or security reasons.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
