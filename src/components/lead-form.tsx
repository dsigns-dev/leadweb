"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { SubmittingOverlay } from "@/components/submitting-overlay";

export type LeadFormConfig = {
  kind:
    | "google-ads"
    | "seo"
    | "web-design"
    | "social-media"
    | "rent-website"
    | "pay-per-lead"
    | "general";
  title: string;
  subtitle: string;
  buttonLabel?: string;
};

export function LeadForm({ config }: { config: LeadFormConfig }) {
  const [state, setState] = useState<"idle" | "sending">("idle");
  const router = useRouter();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // Capture browser metadata for tracking
    const params = new URLSearchParams(window.location.search);

    try {
      const res = await fetch("/api/leads/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          source: config.kind,
          pageUrl: window.location.href,
          service: data.service || config.kind,
          utmSource: params.get("utm_source") || "",
          utmMedium: params.get("utm_medium") || "",
          utmCampaign: params.get("utm_campaign") || "",
          utmTerm: params.get("utm_term") || "",
          utmContent: params.get("utm_content") || "",
          referer: document.referrer || "",
        }),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        console.error("[LeadForm] Submission error:", result.message);
      }

      if (result.warnings) {
        console.warn("[LeadForm] Partial warnings:", result.warnings);
      }
    } catch (err) {
      console.error("[LeadForm] Network error:", err);
    }

    form.reset();
    router.push("/thank-you/");
  }

  return (
    <>
      <SubmittingOverlay visible={state === "sending"} />

      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-hairline bg-surface p-6 md:p-8"
      >
        <h3 className="font-display text-2xl font-semibold">{config.title}</h3>
        <p className="mt-1 text-sm text-ink-dim">{config.subtitle}</p>

        <div className="mt-6 grid gap-4">
          <Field label="Business name" name="business" required />
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Your name" name="name" required />
            <Field label="Email" name="email" type="email" required />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Phone" name="phone" type="tel" required />
            <Field label="Website (if any)" name="website" placeholder="https://" />
          </div>
          <Select
            label="Monthly marketing budget"
            name="budget"
            options={[
              "Under $2k / month",
              "$2k – $5k / month",
              "$5k – $10k / month",
              "$10k+ / month",
              "Not sure yet",
            ]}
          />
          <Textarea
            label="What's the lead-flow problem you're trying to solve?"
            name="message"
            placeholder="e.g. leads are inconsistent, cost per lead has crept up, quotes don't convert…"
          />
        </div>

        <button
          type="submit"
          disabled={state === "sending"}
          className="mt-6 inline-flex w-full cursor-pointer items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-medium text-brand-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-60"
        >
          {state === "sending" ? "Sending…" : (config.buttonLabel ?? "Send brief")}
        </button>
        <p className="mt-3 text-center text-xs text-ink-dim">
          No spam. No auto-responder. A real strategist replies.
        </p>
      </form>
    </>
  );
}

function Field(props: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-ink-dim">
        {props.label}
        {props.required ? <span className="text-brand"> *</span> : null}
      </span>
      <input
        name={props.name}
        type={props.type ?? "text"}
        required={props.required}
        placeholder={props.placeholder}
        className="w-full rounded-lg border border-hairline bg-background/60 px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-ink-dim/60 focus:border-brand"
      />
    </label>
  );
}

function Textarea(props: { label: string; name: string; placeholder?: string }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-ink-dim">
        {props.label}
      </span>
      <textarea
        name={props.name}
        rows={4}
        placeholder={props.placeholder}
        className="w-full rounded-lg border border-hairline bg-background/60 px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-ink-dim/60 focus:border-brand"
      />
    </label>
  );
}

function Select(props: { label: string; name: string; options: string[] }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-ink-dim">
        {props.label}
      </span>
      <select
        name={props.name}
        className="w-full rounded-lg border border-hairline bg-background/60 px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-brand"
      >
        {props.options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
