import customerPortalScreenshot from "../assets/screenshots/customer-portal-screen.png"
import formsPhoneScreenshot from "../assets/screenshots/product-forms-phone.png"
import reportingPhoneScreenshot from "../assets/screenshots/product-reporting-phone.png"
import supplierQuoteScreenshot from "../assets/screenshots/supplier-quote-request-screen.png"

const previews = [
  {
    label: "Customer portal",
    title: "Customers can approve without another phone call",
    text: "Send portal links for quote review, job information and document access.",
    image: customerPortalScreenshot,
  },
  {
    label: "Supplier workflow",
    title: "Smart-import supplier prices",
    text: "Send supplier quote requests, track replies, smart-import prices with AI and convert approved lines into purchase orders.",
    image: supplierQuoteScreenshot,
  },
  {
    label: "Forms, certificates and records",
    title: "Keep proof with the work",
    text: "Forms, photos, certificates and job notes stay tied to the customer and property.",
    image: formsPhoneScreenshot,
  },
  {
    label: "Reporting",
    title: "See what is moving",
    text: "Keep an eye on work, spend, invoices and activity without building another spreadsheet.",
    image: reportingPhoneScreenshot,
  },
]

export default function ProductPreview() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-14 text-white sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(34,211,238,0.16),transparent_30%),radial-gradient(circle_at_85%_50%,rgba(59,130,246,0.14),transparent_32%)]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="td-reveal flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
              Product proof
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] sm:text-5xl">
              See the workflows before you test it.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-slate-300">
            A quick look at the first areas testers will use: customer approvals,
            supplier pricing, forms, certificates, records and reporting.
          </p>
        </div>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {previews.map((preview, index) => (
            <article
              key={preview.title}
              className="td-reveal group overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/[0.06] p-3 shadow-2xl shadow-slate-950/20 backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.09]"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="aspect-[9/12] overflow-hidden rounded-[1.25rem] bg-slate-900">
                <img
                  src={preview.image}
                  alt={`TradeDesk ${preview.label} screenshot`}
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-3">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                  {preview.label}
                </p>
                <h3 className="mt-2 text-lg font-black leading-6 text-white">
                  {preview.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {preview.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
