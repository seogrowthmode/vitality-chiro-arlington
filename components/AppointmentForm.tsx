"use client";

import { useState } from "react";

interface AppointmentFormProps {
  /** Which page the form is on — sent as a hidden field to Basin */
  pageSource?: string;
  /** Variant controls which fields are shown */
  variant?: "full" | "compact" | "contact";
  /** Override the submit-button label */
  buttonLabel?: string;
  /** Extra Tailwind classes on the outer wrapper */
  className?: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

const BASIN_ENDPOINT = "https://usebasin.com/f/BASIN_FORM_ID";

const PREFERRED_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Saturday",
  "No Preference",
];

export default function AppointmentForm({
  pageSource = "website",
  variant = "full",
  buttonLabel,
  className = "",
}: AppointmentFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");

  // Derive sensible defaults per variant
  const isContact = variant === "contact";
  const isCompact = variant === "compact";
  const defaultButtonLabel = isContact
    ? "Send Message →"
    : "Book My Appointment →";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch(BASIN_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  // --- Success state ---
  if (status === "success") {
    return (
      <div className={`rounded-[16px] bg-primary/10 border border-primary/30 p-8 text-center ${className}`}>
        <div className="text-4xl mb-3">&#10003;</div>
        <h3 className="text-[1.1rem] font-black text-primary mb-2">
          Request Received!
        </h3>
        <p className="text-text-muted text-[0.9rem] leading-relaxed">
          Thank you — we&rsquo;ll be in touch within one business day to confirm your
          appointment.
        </p>
        <p className="text-[0.82rem] text-text-muted mt-4">
          Need us sooner?&nbsp;
          <a href="tel:8179620182" className="text-primary font-bold">
            (817) 962-0182
          </a>
        </p>
      </div>
    );
  }

  const inputCls =
    "w-full px-3.5 py-3 border-[1.5px] border-border rounded-[10px] text-[0.9rem] bg-linen focus:border-primary focus:bg-white outline-none transition-colors";
  const labelCls = "block text-[0.78rem] font-bold mb-1";

  return (
    <form onSubmit={handleSubmit} className={`space-y-3.5 ${className}`} noValidate>
      {/* Hidden honeypot — Basin uses this field name */}
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} aria-hidden="true" />
      {/* Hidden page source */}
      <input type="hidden" name="page_source" value={pageSource} />

      {/* --- $149 offer badge (full + compact variants) --- */}
      {!isContact && (
        <div className="text-center mb-1">
          <span className="inline-block bg-accent/10 text-accent text-[0.78rem] font-black tracking-wide px-3 py-1 rounded-full">
            $149 New Patient Exam &mdash; Save $171
          </span>
        </div>
      )}

      {/* Name row */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor={`firstName-${pageSource}`} className={labelCls}>
            First Name *
          </label>
          <input
            id={`firstName-${pageSource}`}
            type="text"
            name="first_name"
            placeholder="Jane"
            required
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor={`lastName-${pageSource}`} className={labelCls}>
            Last Name *
          </label>
          <input
            id={`lastName-${pageSource}`}
            type="text"
            name="last_name"
            placeholder="Smith"
            required
            className={inputCls}
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor={`email-${pageSource}`} className={labelCls}>
          Email *
        </label>
        <input
          id={`email-${pageSource}`}
          type="email"
          name="email"
          placeholder="you@email.com"
          required
          className={inputCls}
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor={`phone-${pageSource}`} className={labelCls}>
          Phone *
        </label>
        <input
          id={`phone-${pageSource}`}
          type="tel"
          name="phone"
          placeholder="(817) 555-0123"
          required
          className={inputCls}
        />
      </div>

      {/* Preferred Day — only on full / compact, not contact */}
      {!isContact && (
        <div>
          <label htmlFor={`day-${pageSource}`} className={labelCls}>
            Preferred Day
          </label>
          <select
            id={`day-${pageSource}`}
            name="preferred_day"
            className={inputCls}
            defaultValue=""
          >
            <option value="">Select a day&hellip;</option>
            {PREFERRED_DAYS.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Message / concerns */}
      <div>
        <label htmlFor={`message-${pageSource}`} className={labelCls}>
          {isContact ? "How Can We Help? *" : "Anything we should know?"}
        </label>
        <textarea
          id={`message-${pageSource}`}
          name="message"
          rows={isCompact ? 2 : 3}
          placeholder={
            isContact
              ? "Tell us how we can help..."
              : "Optional — describe your concerns, insurance questions, etc."
          }
          required={isContact}
          className={`${inputCls} resize-y`}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-4 bg-primary text-white rounded-[16px] font-bold text-[1rem] hover:bg-primary-dark transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending…" : (buttonLabel ?? defaultButtonLabel)}
      </button>

      {/* Error state */}
      {status === "error" && (
        <p className="text-[0.82rem] text-red-600 text-center">
          Something went wrong. Please try again or call us at{" "}
          <a href="tel:8179620182" className="font-bold underline">
            (817) 962-0182
          </a>
          .
        </p>
      )}

      {/* Footer note */}
      <p className="text-center text-[0.78rem] text-text-muted">
        Se Habla Espa&ntilde;ol &middot;{" "}
        <a href="tel:8179620182" className="text-primary font-bold">
          (817) 962-0182
        </a>
      </p>
    </form>
  );
}
