import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AppointmentForm from "@/components/AppointmentForm";
import FAQAccordion from "@/components/FAQAccordion";
import { CheckIcon, PhoneIcon, StarIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Arlington TX Chiropractor | $67 New Patient Exam",
  description:
    "Schedule a $67 new patient exam at Vitality Family Chiropractic in Arlington, TX. Consultation, comprehensive exam, spinal X-rays, sEMG nerve scan, and posture analysis.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Arlington TX Chiropractor | Vitality Family Chiropractic",
    description:
      "$67 new patient exam with consultation, comprehensive exam, spinal X-rays, sEMG nerve scan, and posture analysis.",
    url: "https://vitalitychiroarlington.com",
  },
};

const includedItems = [
  "Consultation",
  "Comprehensive exam",
  "Spinal X-rays",
  "sEMG nerve scan",
  "Posture analysis",
];

const visitReasons = [
  {
    title: "Pregnancy care",
    text: "Webster-certified prenatal support for comfort, alignment, and family wellness.",
    href: "/prenatal-chiropractic-arlington-tx",
  },
  {
    title: "Kids and family",
    text: "Gentle pediatric and family chiropractic care from newborns through adulthood.",
    href: "/pediatric-chiropractor-arlington-tx",
  },
  {
    title: "Pain or posture",
    text: "Back pain, neck pain, headaches, sciatica, disc symptoms, and spinal correction.",
    href: "/back-pain-treatment-arlington-tx",
  },
  {
    title: "Sports and movement",
    text: "Sports chiropractic, mobility, soft tissue support, and performance-focused care.",
    href: "/sports-chiropractor-arlington-tx",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Request a visit",
    text: "Send the short form or call the office. The team confirms the best appointment time.",
  },
  {
    step: "02",
    title: "Get measured",
    text: "Your visit starts with a consultation, exam, spinal X-rays when clinically appropriate, and sEMG nerve scan.",
  },
  {
    step: "03",
    title: "Review the plan",
    text: "Dr. Elise and the Vitality team explain what they found and what your next step should be.",
  },
];

const faqItems = [
  {
    question: "What is included in the $67 new patient exam?",
    answer:
      "The $67 new patient exam includes a consultation, comprehensive exam, spinal X-rays when clinically appropriate, sEMG nerve scan, and posture analysis. The normal value is $320.",
  },
  {
    question: "Where is Vitality Family Chiropractic located?",
    answer:
      "Vitality Family Chiropractic is located at 1106 W. Pioneer Parkway, Suite 300, Arlington, TX 76013.",
  },
  {
    question: "Can I schedule for prenatal or pediatric care?",
    answer:
      "Yes. Dr. Elise Hernandez and the team provide prenatal, pediatric, and family chiropractic care, and the office has bilingual staff available.",
  },
  {
    question: "Can I call instead of using the form?",
    answer:
      "Yes. You can call the office at (817) 962-0182 if you would rather schedule by phone.",
  },
];

const proofPoints = ["3 doctors", "370+ reviews", "Se habla Espanol", "MaxLiving health center"];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-linen">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/heroes/hero-clinic-chiropractic.webp"
            alt="Vitality Family Chiropractic clinic in Arlington, TX"
            fill
            priority
            className="object-cover opacity-12"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,245,241,0.98)_0%,rgba(248,245,241,0.92)_54%,rgba(232,245,244,0.9)_100%)]" />
        </div>

        <div className="relative z-[1] max-w-[1180px] mx-auto px-5 sm:px-8 py-8 sm:py-10 lg:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_430px] gap-7 lg:gap-10 items-start">
            <div className="pt-3 lg:pt-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-[0.82rem] font-extrabold text-deep-teal shadow-[var(--shadow-card)]">
                <StarIcon className="w-4 h-4 text-accent" />
                Arlington TX new patient special
              </div>

              <h1 className="mt-5 max-w-[760px] text-[2.35rem] sm:text-[4rem] lg:text-[5rem] leading-[0.95] font-black text-deep-teal">
                Start with a $67 chiropractic exam.
              </h1>

              <p className="mt-4 max-w-[620px] text-[1rem] sm:text-[1.12rem] leading-relaxed text-text-muted">
                Schedule with Vitality Family Chiropractic in Arlington, TX. Your visit includes a consultation,
                comprehensive exam, spinal X-rays, sEMG nerve scan, and posture analysis.
              </p>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-[700px]">
                {proofPoints.map((proof) => (
                  <div key={proof} className="rounded-[8px] border border-border bg-white/80 px-3 py-2 text-center text-[0.8rem] font-bold text-text">
                    {proof}
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <a
                  href="#request"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-[8px] bg-primary px-7 py-3 text-[0.98rem] font-black text-white transition-colors hover:bg-primary-dark"
                >
                  Request Appointment
                </a>
                <a
                  href="tel:8179620182"
                  className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-[8px] border-2 border-deep-teal px-7 py-3 text-[0.98rem] font-black text-deep-teal transition-colors hover:bg-deep-teal hover:text-white"
                >
                  <PhoneIcon className="w-4 h-4" />
                  Call (817) 962-0182
                </a>
              </div>

              <div className="mt-8 hidden flex-col gap-3 sm:flex sm:flex-row sm:items-center">
                <div className="relative h-[74px] w-[74px] overflow-hidden rounded-full border-4 border-white shadow-[var(--shadow-card)]">
                  <Image
                    src="/images/staff/dr-elise-hernandez.jpg"
                    alt="Dr. Elise Hernandez"
                    fill
                    className="object-cover object-top"
                    sizes="74px"
                  />
                </div>
                <p className="max-w-[520px] text-[0.92rem] leading-relaxed text-text-muted">
                  Led by Dr. Elise Hernandez with prenatal, pediatric, sports, and corrective care available for
                  families across Arlington.
                </p>
              </div>
            </div>

            <div id="request" className="rounded-[8px] border border-border bg-white p-5 shadow-[var(--shadow-card-lg)] lg:sticky lg:top-24">
              <div className="mb-4 rounded-[8px] bg-deep-teal p-4 text-white">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[0.78rem] font-bold uppercase text-primary">New Patient Exam</p>
                    <p className="mt-1 text-[2.4rem] leading-none font-black">$67</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[0.78rem] text-white/65">Normally</p>
                    <p className="text-[1.1rem] font-extrabold line-through text-white/70">$320</p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-1 gap-2">
                  {includedItems.slice(0, 4).map((item) => (
                    <div key={item} className="flex items-center gap-2 text-[0.86rem]">
                      <CheckIcon className="h-4 w-4 flex-shrink-0 text-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <AppointmentForm pageSource="homepage-jf-hero" variant="compact" buttonLabel="Request My Visit" />
              <p className="mt-3 text-center text-[0.75rem] leading-relaxed text-text-muted">
                Please do not submit urgent medical details. For emergencies, call 911.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-white">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 divide-y divide-border px-5 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0">
          {processSteps.map((item) => (
            <div key={item.step} className="py-7 md:px-6">
              <p className="text-[0.82rem] font-black text-accent">{item.step}</p>
              <h2 className="mt-1 text-[1.18rem] font-black text-deep-teal">{item.title}</h2>
              <p className="mt-2 text-[0.92rem] leading-relaxed text-text-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-soft-teal py-16 lg:py-20">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <div className="max-w-[680px]">
            <p className="text-[0.86rem] font-extrabold text-primary">Choose the reason you are booking</p>
            <h2 className="mt-2 text-[2rem] sm:text-[2.6rem] leading-tight font-black text-deep-teal">
              Care paths built around real family needs.
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {visitReasons.map((reason) => (
              <Link
                key={reason.title}
                href={reason.href}
                className="group rounded-[8px] border border-border bg-white p-5 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1"
              >
                <h3 className="text-[1.02rem] font-black text-deep-teal">{reason.title}</h3>
                <p className="mt-2 min-h-[88px] text-[0.9rem] leading-relaxed text-text-muted">{reason.text}</p>
                <span className="mt-4 inline-flex text-[0.86rem] font-black text-primary group-hover:text-primary-dark">
                  View path
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-8 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="relative min-h-[430px] overflow-hidden rounded-[8px] bg-linen">
            <Image
              src="/images/team/team-mission-wall.jpg"
              alt="Vitality Family Chiropractic team at the Arlington office"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 520px"
            />
          </div>
          <div>
            <p className="text-[0.86rem] font-extrabold text-accent">Why families choose Vitality</p>
            <h2 className="mt-2 text-[2rem] sm:text-[2.7rem] leading-tight font-black text-deep-teal">
              Direct answers, measured findings, and a clear next step.
            </h2>
            <p className="mt-4 text-[1rem] leading-relaxed text-text-muted">
              The homepage is now centered around the appointment request, but the trust story is still visible:
              three doctors, bilingual support, MaxLiving care, and specialty paths for prenatal, pediatric,
              corrective, and sports chiropractic.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Webster-certified prenatal care",
                "Pediatric and family chiropractic",
                "Sports chiropractic and performance care",
                "sEMG scan and posture analysis",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-[8px] border border-border bg-linen p-4">
                  <CheckIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-[0.9rem] font-bold text-text">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-deep-teal py-16 lg:py-20 text-white">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
            <div>
              <p className="text-[0.86rem] font-extrabold text-primary">The $67 exam</p>
              <h2 className="mt-2 text-[2rem] sm:text-[2.7rem] leading-tight font-black">
                A simple start before any care decision.
              </h2>
              <p className="mt-4 text-[1rem] leading-relaxed text-white/72">
                This section keeps the offer specific without promising treatment outcomes. Patients know what is
                included, what it is worth, and what happens after they request a visit.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {includedItems.map((item, index) => (
                <div key={item} className="rounded-[8px] border border-white/12 bg-white/8 p-5">
                  <p className="text-[0.78rem] font-black text-primary">0{index + 1}</p>
                  <h3 className="mt-1 text-[1.02rem] font-black">{item}</h3>
                </div>
              ))}
              <div className="rounded-[8px] border border-primary/40 bg-primary/15 p-5">
                <p className="text-[0.78rem] font-black text-primary">VALUE</p>
                <h3 className="mt-1 text-[1.02rem] font-black">$67 today, normally $320</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-linen py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-8 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-[0.86rem] font-extrabold text-primary">Questions before booking</p>
            <h2 className="mt-2 text-[2rem] sm:text-[2.6rem] leading-tight font-black text-deep-teal">
              Quick answers for new patients.
            </h2>
            <p className="mt-4 text-[1rem] leading-relaxed text-text-muted">
              Call the office if you want help picking the right visit type or need to ask about insurance before
              scheduling.
            </p>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-5 rounded-[8px] border border-border bg-soft-teal p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-[1.7rem] sm:text-[2.2rem] leading-tight font-black text-deep-teal">
                Ready to request the $67 exam?
              </h2>
              <p className="mt-2 text-[0.96rem] text-text-muted">
                Vitality Family Chiropractic, 1106 W. Pioneer Parkway, Suite 300, Arlington, TX 76013.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#request"
                className="inline-flex min-h-[50px] items-center justify-center rounded-[8px] bg-primary px-6 py-3 text-[0.95rem] font-black text-white hover:bg-primary-dark"
              >
                Request Appointment
              </a>
              <a
                href="tel:8179620182"
                className="inline-flex min-h-[50px] items-center justify-center rounded-[8px] border-2 border-deep-teal px-6 py-3 text-[0.95rem] font-black text-deep-teal hover:bg-deep-teal hover:text-white"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
