import customerPortalScreenshot from "../assets/screenshots/customer-portal-screen.png"
import dashboardScreenshot from "../assets/screenshots/dashboard-phone-generated.png"
import diaryPhoneScreenshot from "../assets/screenshots/product-diary-phone.png"
import diaryTabletScreenshot from "../assets/screenshots/diary-tablet.png"
import featureHeroPhoneScreenshot from "../assets/screenshots/feature-hero-phone.png"
import featureHeroTabletScreenshot from "../assets/screenshots/feature-hero-tablet.png"
import fieldPhoneScreenshot from "../assets/screenshots/field-phone.png"
import formsPhoneScreenshot from "../assets/screenshots/product-forms-phone.png"
import formsScreenshot from "../assets/screenshots/forms-screen.png"
import reportsPhoneScreenshot from "../assets/screenshots/product-reporting-phone.png"
import reportsScreenshot from "../assets/screenshots/reports-screen.png"
import smartDiagnosticsScreenshot from "../assets/screenshots/smart-diagnostics-summary.png"
import supplierScreenshot from "../assets/screenshots/supplier-quote-request-screen.png"
import purchaseOrderScreenshot from "../assets/screenshots/purchase-order-screen.png"

const allPlans = ["Free", "Starter", "Pro", "Premium"]
const starterPlus = ["Starter", "Pro", "Premium"]
const proPlus = ["Pro", "Premium"]
const premiumOnly = ["Premium"]

const workflowSteps = [
  "Enquiry",
  "Customer",
  "Quote",
  "Job",
  "Diary",
  "Parts",
  "Paperwork",
  "Invoice",
  "Report",
]

const workflowSections = [
  {
    eyebrow: "Diary & scheduling",
    title: "Plan the day without fighting the diary.",
    text: "Use TradeDesk for manual scheduling first, then step up to slot finding, travel-aware booking and route planning as the workload grows.",
    tabletImage: diaryTabletScreenshot,
    phoneImage: diaryPhoneScreenshot,
    reverse: false,
    bullets: [
      { label: "Free", text: "Day, week and month diary views with manual scheduling." },
      { label: "Starter+", text: "Diary slot finder, multi-visit jobs and smarter booking tools." },
      { label: "Pro+", text: "Route planner, engineer tracking and smart auto scheduling." },
      { label: "Premium", text: "Advanced route planner and higher route-planning usage." },
    ],
  },
  {
    eyebrow: "Customers & properties",
    title: "Keep every customer, property and appliance connected.",
    text: "Customer records should hold more than a phone number. TradeDesk links customers, properties, appliances, documents, jobs, quotes and invoices together.",
    tabletImage: customerPortalScreenshot,
    phoneImage: dashboardScreenshot,
    reverse: true,
    bullets: [
      { label: "Customers", text: "Manage names, contacts, addresses and job history." },
      { label: "Properties", text: "Support customers with more than one property." },
      { label: "Appliances", text: "Store service detail and appliance records from Starter." },
      { label: "Portal", text: "Share public customer links for quotes, invoices and job information." },
    ],
  },
  {
    eyebrow: "Jobs & field workflow",
    title: "Run the job from the van, not from memory.",
    text: "Jobs bring together notes, photos, videos, checklists, stock, customer detail and paperwork so the engineer can work from one record.",
    tabletImage: fieldPhoneScreenshot,
    phoneImage: formsPhoneScreenshot,
    reverse: false,
    bullets: [
      { label: "Core job record", text: "Notes, media, customer, address, status and job history." },
      { label: "Basic checklists", text: "Free includes tick-box job checklists." },
      { label: "Advanced checklists", text: "Starter adds text, number, date, evidence, signatures and PDF reports." },
      { label: "Profitability", text: "Track parts, labour and job value against the work." },
    ],
  },
  {
    eyebrow: "Quotes, invoices & payment",
    title: "From customer enquiry to getting paid, TradeDesk has you covered.",
    text: "Create professional paperwork, send customer links, track acceptance and keep invoice/payment status connected to the job.",
    tabletImage: customerPortalScreenshot,
    phoneImage: dashboardScreenshot,
    reverse: true,
    bullets: [
      { label: "Quotes", text: "Build quotes, send links and track customer acceptance." },
      { label: "Invoices", text: "Create invoices from completed work and monitor payment status." },
      { label: "Customer links", text: "Customers can view quote and invoice details without another app." },
      { label: "Branding", text: "Starter adds branded paperwork across customer-facing documents." },
    ],
  },
  {
    eyebrow: "Suppliers, POs & inventory",
    title: "Control parts, supplier prices and purchase orders.",
    text: "TradeDesk connects buying decisions to the job instead of leaving supplier quotes, parts and purchase orders scattered across emails.",
    tabletImage: supplierScreenshot,
    phoneImage: purchaseOrderScreenshot,
    reverse: false,
    bullets: [
      { label: "Starter+", text: "Supplier records, supplier quote requests and purchase orders." },
      { label: "Inventory", text: "Manage parts and supplier-specific pricing." },
      { label: "Smart import", text: "Import supplier prices from documents and match them back to the job." },
      { label: "Job costs", text: "Keep materials and supplier pricing close to the job margin." },
    ],
  },
  {
    eyebrow: "Forms, certificates & records",
    title: "Keep trade paperwork tied to the work.",
    text: "Complete forms, certificates and service records from the job, then keep the finished document connected to the customer and property.",
    tabletImage: formsScreenshot,
    phoneImage: formsPhoneScreenshot,
    reverse: true,
    bullets: [
      { label: "Pro+", text: "Forms, certificates and completed records." },
      { label: "Records", text: "Store completed paperwork against jobs, customers and properties." },
      { label: "Branded output", text: "Use branded forms and certificates for a cleaner handover." },
      { label: "Checklists", text: "Advanced checklist reports sit alongside job paperwork from Starter." },
    ],
  },
  {
    eyebrow: "AI, diagnostics & reporting",
    title: "Use the data already in the job to make better decisions.",
    text: "AI and reporting are kept practical: faster drafts, supplier import, fault guidance, video summaries and KPIs that show where attention is needed.",
    tabletImage: reportsScreenshot,
    phoneImage: reportsPhoneScreenshot,
    reverse: false,
    bullets: [
      { label: "Starter+", text: "AI message drafting for customer-facing communication." },
      { label: "Pro+", text: "Smart Diagnostics, supplier AI import and video transcription." },
      { label: "KPIs", text: "Quote conversion, paid rate, outstanding balances and overdue work." },
      { label: "Toolbox", text: "Trade calculators and practical job tools in the same app." },
    ],
  },
]

const availability = [
  { feature: "Customer, property, jobs, quotes and invoices", plans: allPlans },
  { feature: "Customer portal links", plans: allPlans },
  { feature: "Manual diary scheduling", plans: allPlans },
  { feature: "Basic tick-box checklists", plans: allPlans },
  { feature: "Advanced checklists and checklist reports", plans: starterPlus },
  { feature: "Supplier quote requests and purchase orders", plans: starterPlus },
  { feature: "Appliance records and service reminders", plans: starterPlus },
  { feature: "Diary slot finder and multi-visit jobs", plans: starterPlus },
  { feature: "Forms and certificates", plans: proPlus },
  { feature: "Smart Diagnostics", plans: proPlus },
  { feature: "Supplier AI price import", plans: proPlus },
  { feature: "Video transcription", plans: proPlus },
  { feature: "Advanced reporting and KPIs", plans: proPlus },
  { feature: "Route planner and public engineer tracking", plans: proPlus },
  { feature: "Advanced route planner", plans: premiumOnly },
  { feature: "Priority setup and support", plans: premiumOnly },
]

function PlansTag({ plans }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {plans.map((plan) => (
        <span
          key={plan}
          className={`rounded-full px-2.5 py-1 text-[0.66rem] font-black uppercase tracking-[0.12em] ${
            plan === "Premium"
              ? "bg-slate-950 text-white"
              : plan === "Pro"
                ? "bg-sky-100 text-sky-800"
                : plan === "Starter"
                  ? "bg-amber-100 text-amber-800"
                  : "bg-slate-100 text-slate-700"
          }`}
        >
          {plan}
        </span>
      ))}
    </div>
  )
}

function DevicePair({
  tabletImage,
  phoneImage,
  title,
  phonePosition = "-bottom-2 right-2 sm:right-6",
  rawPhone = false,
  rawTablet = false,
  tabletScaleClass = "",
}) {
  return (
    <div className="relative mx-auto w-full max-w-[38rem] pb-10 lg:max-w-none">
      <div
        className={
          rawTablet
            ? tabletScaleClass
            : "rounded-[2rem] border border-slate-200 bg-slate-950 p-2 shadow-2xl shadow-slate-900/20"
        }
      >
        <div className={rawTablet ? "" : "overflow-hidden rounded-[1.45rem] bg-white"}>
          <img
            src={tabletImage}
            alt={`${title} tablet screenshot`}
            className={rawTablet ? "w-full" : "aspect-[4/3] w-full object-cover object-top"}
          />
        </div>
      </div>

      <div
        className={`absolute ${phonePosition} w-[34%] min-w-[8.5rem] max-w-[12rem] ${
          rawPhone
            ? ""
            : "rounded-[2rem] border border-slate-800 bg-black p-1.5 shadow-2xl shadow-slate-950/30"
        }`}
      >
        <div className={rawPhone ? "" : "overflow-hidden rounded-[1.55rem] bg-white"}>
          <img
            src={phoneImage}
            alt={`${title} mobile screenshot`}
            className={rawPhone ? "w-full" : "aspect-[9/16] w-full object-cover object-top"}
          />
        </div>
      </div>
    </div>
  )
}

function FeatureSection({ section, index }) {
  const visual = <DevicePair tabletImage={section.tabletImage} phoneImage={section.phoneImage} title={section.title} />
  const copy = (
    <div className="td-reveal">
      <p className="text-sm font-black uppercase tracking-[0.18em] text-sky-700">
        {section.eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-black tracking-[-0.045em] text-slate-950 sm:text-5xl">
        {section.title}
      </h2>
      <p className="mt-5 text-base leading-8 text-slate-600">
        {section.text}
      </p>

      <div className="mt-7 grid gap-3 sm:grid-cols-2">
        {section.bullets.map((item) => (
          <div key={`${section.title}-${item.label}`} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs font-black uppercase tracking-[0.14em] text-sky-700">
              {item.label}
            </p>
            <p className="mt-2 text-sm font-bold leading-6 text-slate-700">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <section className={`${index % 2 ? "bg-slate-50" : "bg-white"} py-14 sm:py-20`}>
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        {section.reverse ? (
          <>
            <div className="td-reveal td-reveal-delay lg:order-2">{visual}</div>
            <div className="lg:order-1">{copy}</div>
          </>
        ) : (
          <>
            <div>{copy}</div>
            <div className="td-reveal td-reveal-delay">{visual}</div>
          </>
        )}
      </div>
    </section>
  )
}

export default function FeatureCatalogue() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#07162f] py-14 text-white sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(34,211,238,0.22),transparent_30%),radial-gradient(circle_at_84%_26%,rgba(14,165,233,0.16),transparent_34%)]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-50 to-transparent" />

        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="td-reveal">
            <h1 className="text-4xl font-black tracking-[-0.055em] sm:text-6xl">
              Everything you need to get the job done.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              TradeDesk offers advanced features to spend less time worrying about paperwork and more time earning money.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#workflow"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-black text-slate-950 transition hover:-translate-y-0.5"
              >
                See the workflow
              </a>
              <a
                href="#availability"
                className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-black text-white transition hover:bg-white/10"
              >
                View plan access
              </a>
            </div>
          </div>

          <div className="td-reveal td-reveal-delay">
            <DevicePair
              tabletImage={featureHeroTabletScreenshot}
              phoneImage={featureHeroPhoneScreenshot}
              title="TradeDesk workflow"
              phonePosition="-bottom-7 -right-1 sm:-right-4 lg:-right-8"
              rawTablet
              rawPhone
              tabletScaleClass="scale-110 lg:scale-125"
            />
          </div>
        </div>
      </section>

      <section id="workflow" className="bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="td-reveal rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-sky-700">
                  How it fits together
                </p>
                <h2 className="mt-2 text-2xl font-black tracking-[-0.04em] text-slate-950 sm:text-4xl">
                  The same job record carries the work forward.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-7 text-slate-600">
                The page below is grouped by workflow area, not by every screen in the app, so visitors can understand what TradeDesk actually helps them run.
              </p>
            </div>

            <div className="mt-6 overflow-x-auto pb-2">
              <div className="flex min-w-max items-center gap-2">
                {workflowSteps.map((step, index) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className="rounded-2xl bg-slate-950 px-4 py-3 text-sm font-black text-white">
                      {step}
                    </span>
                    {index < workflowSteps.length - 1 ? (
                      <span className="text-slate-300">→</span>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {workflowSections.map((section, index) => (
        <FeatureSection key={section.title} section={section} index={index} />
      ))}

      <section id="availability" className="bg-slate-950 py-14 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="td-reveal flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Plan availability
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] sm:text-5xl">
                The main feature gates, kept clear.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-slate-300">
              This is the section for people comparing plans. It should stay shorter than the app, but clear enough that Free, Starter, Pro and Premium make sense.
            </p>
          </div>

          <div className="mt-9 overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.06]">
            {availability.map((item, index) => (
              <div
                key={item.feature}
                className={`grid gap-3 px-4 py-4 sm:grid-cols-[1fr_auto] sm:items-center sm:px-5 ${
                  index ? "border-t border-white/10" : ""
                }`}
              >
                <p className="text-sm font-black leading-6 text-white">
                  {item.feature}
                </p>
                <PlansTag plans={item.plans} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
