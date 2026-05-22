import Footer from "../components/Footer"
import Header from "../components/Header"
import { SUPPORT_EMAIL } from "../lib/siteLinks"

export default function AccountDeletion() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <Header />

      <section className="flex-grow max-w-4xl mx-auto px-6 py-20">
        <h1 className="mb-6 text-4xl font-bold text-slate-900">
          Account deletion
        </h1>

        <p className="mb-8 leading-relaxed text-slate-600">
          Roscoe users can delete their account from inside the app. This page
          explains where to find that option, when workspace data is also
          removed, and when to contact support instead.
        </p>

        <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm space-y-8">
          <div>
            <h2 className="mb-3 text-xl font-semibold text-slate-900">
              Delete your account in the app
            </h2>
            <p className="leading-relaxed text-slate-600">
              Open Roscoe and go to <strong>Settings</strong>. If you are a
              standard user, choose <strong>Delete account</strong>. If you are
              the workspace owner, choose <strong>Delete workspace account</strong>.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold text-slate-900">
              What gets deleted
            </h2>
            <p className="leading-relaxed text-slate-600">
              For standard users, deleting the account removes that user’s
              access and account data. For workspace owners, deleting the
              workspace account removes the workspace and associated workspace
              data, subject to any legal, tax, fraud-prevention, billing or
              accounting records we are required to retain.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold text-slate-900">
              If you cannot access the app
            </h2>
            <p className="leading-relaxed text-slate-600">
              If you cannot sign in and still need help deleting your account,
              contact{" "}
              <a
                href={`mailto:${SUPPORT_EMAIL}?subject=Roscoe%20account%20deletion%20request`}
                className="text-sky-600 hover:underline"
              >
                {SUPPORT_EMAIL}
              </a>{" "}
              from the email address linked to your Roscoe account and use the
              subject line <strong>Account deletion request</strong>.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold text-slate-900">
              What to include
            </h2>
            <ul className="list-disc space-y-2 pl-6 text-slate-600">
              <li>your full name</li>
              <li>your Roscoe account email address</li>
              <li>your business or workspace name</li>
              <li>a clear statement that you want your account deleted</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold text-slate-900">
              What happens next
            </h2>
            <p className="leading-relaxed text-slate-600">
              If the deletion is started in the app, Roscoe will begin the
              deletion flow immediately. If the request comes through support,
              we may need to verify that the request is genuine before
              processing it.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold text-slate-900">
              Data retention
            </h2>
            <p className="leading-relaxed text-slate-600">
              Where deletion is requested, Roscoe will remove account and
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
