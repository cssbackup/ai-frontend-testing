"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Crown, Gift } from "lucide-react";

const plans = [
  {
    name: "Starter",
    icon: Gift,
    description:
      "Free for every website. Build and publish on a shared URL. No AI tools or custom domain.",
    monthly: 0,
    annual: 0,
    includes: "",
    features: [
      "No limits on websites, pages, or publishing",
      "Full website builder and editor access",
      "Publish on a shared domain (/published/your-site-name)",
      "Live sites work like your current published URLs",
      "No AI content, image, or design generation",
      "Free forever",
    ],
    href: "/auth",
    cta: "Try Lestow",
  },
  {
    name: "Core",
    icon: Crown,
    description: "AI, hosting, and a custom domain — billed per website.",
    monthly: 9,
    annual: 7,
    includes: "Everything in Starter, plus:",
    features: [
      "AI content writing and editing",
      "AI image generation and replacement",
      "AI-powered section and design changes",
      "Free hosting included",
      "Connect your own custom domain",
      "Domain stays yours — self-owned domain",
      "SSL included on custom domain",
    ],
    href: "/user/plan",
    cta: "Try Lestow",
  },
];

const usd = (amount: number) => `$${amount.toLocaleString("en-US")}`;
const actionClass =
  "mt-auto flex min-h-11 w-full items-center justify-center rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600";

function Features({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((feature) => (
        <li
          key={feature}
          className="flex items-start gap-3 text-[13px] leading-5"
        >
          <Check
            aria-hidden="true"
            size={17}
            strokeWidth={2.2}
            className="mt-0.5 shrink-0"
          />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Pricing({ hideHeader = false }: { hideHeader?: boolean }) {
  const [annualPlans, setAnnualPlans] = useState<Record<string, boolean>>({});

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className={`scroll-mt-20 px-5 py-16 text-black sm:px-8 sm:py-20 ${hideHeader ? "bg-white" : "bg-[#f5f4f2]"}`}
    >
      <div className="mx-auto max-w-[1040px]">
        {hideHeader ? (
          <h2 id="pricing-heading" className="sr-only">
            Starter and Core pricing
          </h2>
        ) : (
          <header className="text-center">
            <h2
              id="pricing-heading"
              className="text-2xl font-medium leading-tight tracking-[-0.045em] sm:text-[35px]"
            >
              Transparent pricing for every builder
            </h2>
            <p className="mt-3 text-sm leading-6 text-neutral-600">
              Start free on a shared URL. Upgrade one website at a time for AI,
              hosting, and your own domain.
            </p>
          </header>
        )}

        <div className="mx-auto mt-10 grid max-w-[706px] gap-6 sm:grid-cols-2 sm:gap-8">
          {plans.map((plan) => {
            const annual = Boolean(annualPlans[plan.name]);
            const Icon = plan.icon;
            const price = annual ? plan.annual : plan.monthly;
            return (
              <article
                key={plan.name}
                aria-label={`${plan.name} plan`}
                className="flex min-h-[540px] flex-col rounded-xl border border-black/[0.06] bg-white px-5 py-7 sm:px-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="flex items-center gap-2 text-[22px] font-medium tracking-[-0.04em]">
                    {plan.name}
                    <Icon aria-hidden="true" size={17} />
                  </h3>
                  {plan.monthly > 0 && (
                    <button
                      type="button"
                      role="switch"
                      aria-checked={annual}
                      aria-label={`Annual billing for ${plan.name}`}
                      onClick={() =>
                        setAnnualPlans((current) => ({
                          ...current,
                          [plan.name]: !current[plan.name],
                        }))
                      }
                      className={`flex min-h-8 cursor-pointer items-center gap-2 rounded-md text-xs font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 ${annual ? "text-blue-600" : "text-neutral-600"
                        }`}
                    >
                      Annual
                      <span
                        aria-hidden="true"
                        className={`flex h-[18px] w-8 items-center rounded-full p-[3px] transition-colors ${annual ? "bg-blue-600" : "bg-neutral-600"
                          }`}
                      >
                        <span
                          className={`size-3 rounded-full bg-white transition-transform motion-reduce:transition-none ${annual ? "translate-x-[14px]" : "translate-x-0"
                            }`}
                        />
                      </span>
                    </button>
                  )}
                </div>
                <p className="mt-1 min-h-10 text-[13px] leading-5 text-neutral-600">
                  {plan.description}
                </p>
                <div className="mt-6 min-h-[78px]">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p>
                      <span className="text-[30px] font-semibold tracking-tight">
                        {usd(price)}
                      </span>
                      <span className="ml-1 text-xs text-neutral-500">
                        / month
                      </span>
                    </p>
                    {annual && plan.monthly > 0 ? (
                      <span className="rounded-full bg-blue-50 px-2.5 py-1.5 text-[11px] font-medium text-blue-600">
                        Save {usd((plan.monthly - plan.annual) * 12)} / year
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-1 text-[11px] leading-4 text-neutral-500">
                    {annual && plan.monthly > 0
                      ? `${usd(plan.annual * 12)} billed annually`
                      : plan.monthly > 0
                        ? "per website"
                        : "Free forever"}
                  </p>
                </div>
                <div className="pb-9">
                  {plan.includes ? (
                    <p className="mb-3 text-[13px] text-neutral-500">
                      {plan.includes}
                    </p>
                  ) : null}
                  <Features items={plan.features} />
                </div>
                <Link
                  href={plan.href}
                  className={actionClass}
                  aria-label={`${plan.cta} ${plan.name}`}
                >
                  {plan.cta}
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
