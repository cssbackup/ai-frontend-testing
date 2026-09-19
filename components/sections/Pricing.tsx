"use client";

import { useState } from "react";
import Link from "next/link";
import { Building2, Check, Compass, Gift, Sparkles, Users } from "lucide-react";
import GetQuoteEnquiryModal from "../home/GetQuoteEnquiryModal";

// Draft USD amounts; keep pricing together until final rates are confirmed.
const individualPlans = [
    {
        name: "Free", icon: Gift,
        description: "Get started with essential features at no cost",
        monthly: 0, annual: 0, intro: null,
        includes: "",
        features: ["10 free monthly credits", "Unlock all core platform features", "Build elegant Web and Mobile experiences", "Instant access to the most advanced models", "One-click LLM integration"],
    },
    {
        name: "Standard", icon: Compass,
        description: "Perfect for first-time builders",
        monthly: 20, annual: 16, intro: 3,
        includes: "Everything in Free, plus:",
        features: ["Build web & mobile apps", "Private project hosting", "100 credits per month", "Purchase extra credits as needed", "GitHub integration", "Fork tasks"],
    },
    {
        name: "Pro", icon: Sparkles,
        description: "Built for serious creators and brands",
        monthly: 167, annual: 150, intro: null,
        includes: "Everything in Standard, plus:",
        features: ["1M context window", "Ultra thinking", "System Prompt Edit", "Create custom AI agents", "High-performance computing", "750 monthly credits", "Priority customer support"],
    },
];

const enterprisePlans = [
    {
        name: "Business", icon: Users,
        description: "For businesses with custom needs",
        includes: "Everything in Pro, plus:",
        features: ["Role-Based Access Control (RBAC)", "Single sign-on (SSO)", "Shared Team Workspaces", "Real-time Co-Editing & Coworking"],
    },
    {
        name: "Enterprise", icon: Building2,
        description: "For large organizations with custom needs",
        includes: "Everything in Business, plus:",
        features: ["User-Level Credit Limits", "Audit Logs", "Self Hosted Database Support", "Priority SLA and Support", "User Groups", "Deploy apps in your own cloud (VPC setup)", "Credit Usage Reports and Analytics Dashboard"],
    },
];

const usd = (amount: number) => `$${amount.toLocaleString("en-US")}`;
const actionClass = "mt-auto flex min-h-11 w-full items-center justify-center rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600";

function Features({ items }: { items: string[] }) {
    return (
        <ul className="space-y-3">
            {items.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-[13px] leading-5">
                    <Check aria-hidden="true" size={17} strokeWidth={2.2} className="mt-0.5 shrink-0" />
                    <span>{feature}</span>
                </li>
            ))}
        </ul>
    );
}

export default function Pricing({ hideHeader = false }: { hideHeader?: boolean }) {
    const [audience, setAudience] = useState<"Individual" | "Enterprise">("Individual");
    const [annualPlans, setAnnualPlans] = useState<Record<string, boolean>>({});
    const [demoOpen, setDemoOpen] = useState(false);

    return (
        <section id="pricing" aria-labelledby="pricing-heading" className={`scroll-mt-20 px-5 py-16 text-black sm:px-8 sm:py-20 ${hideHeader ? "bg-white" : "bg-[#f5f4f2]"}`}>
            <div className="mx-auto max-w-[1040px]">
                {hideHeader ? (
                    <h2 id="pricing-heading" className="sr-only">
                        Transparent pricing for every builder
                    </h2>
                ) : (
                    <header className="text-center">
                        <h2 id="pricing-heading" className="text-2xl font-medium leading-tight tracking-[-0.045em] sm:text-3xl">
                            Transparent pricing for every builder
                        </h2>
                        <p className="mt-5 text-sm leading-6 text-neutral-600">
                            Choose the plan that fits your building ambitions.<br className="hidden sm:block" />
                            <span className="sm:hidden"> </span>From weekend projects to enterprise applications, we&apos;ve got you covered.
                        </p>
                    </header>
                )}

                <div className="mt-10 flex justify-center">
                    <div role="group" aria-label="Pricing category" className="inline-flex rounded-full border border-black/[0.06] bg-[#efefed] p-1">
                        {(["Individual", "Enterprise"] as const).map((option) => (
                            <button key={option} type="button" aria-pressed={audience === option} onClick={() => setAudience(option)} className={`min-h-9 min-w-28 cursor-pointer rounded-full px-5 text-[13px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${audience === option ? "bg-white text-black shadow-sm" : "text-neutral-600 hover:text-black"}`}>
                                {option}
                            </button>
                        ))}
                    </div>
                </div>

                {audience === "Individual" ? (
                    <div className="mt-5 grid gap-4 md:grid-cols-3">
                        {individualPlans.map((plan) => {
                            const annual = Boolean(annualPlans[plan.name]);
                            const Icon = plan.icon;
                            const price = annual ? plan.annual : (plan.intro ?? plan.monthly);
                            return (
                                <article key={plan.name} aria-label={`${plan.name} plan`} className="flex min-h-[540px] flex-col rounded-xl border border-black/[0.06] bg-white px-5 py-7 sm:px-6">
                                    <div className="flex flex-wrap items-center justify-between gap-3">
                                        <h3 className="flex items-center gap-2 text-[22px] font-medium tracking-[-0.04em]">{plan.name}<Icon aria-hidden="true" size={17} /></h3>
                                        {plan.monthly > 0 && (
                                            <button type="button" role="switch" aria-checked={annual} aria-label={`Annual billing for ${plan.name}`} onClick={() => setAnnualPlans((current) => ({ ...current, [plan.name]: !current[plan.name] }))} className={`flex min-h-8 cursor-pointer items-center gap-2 rounded-md text-xs font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 ${annual ? "text-blue-600" : "text-neutral-600"}`}>
                                                Annual
                                                <span aria-hidden="true" className={`flex h-[18px] w-8 items-center rounded-full p-[3px] transition-colors ${annual ? "bg-blue-600" : "bg-neutral-600"}`}>
                                                    <span className={`size-3 rounded-full bg-white transition-transform motion-reduce:transition-none ${annual ? "translate-x-[14px]" : "translate-x-0"}`} />
                                                </span>
                                            </button>
                                        )}
                                    </div>
                                    <p className="mt-1 min-h-10 text-[13px] leading-5 text-neutral-600">{plan.description}</p>
                                    <div className="mt-6 min-h-[78px]">
                                        <div className="flex flex-wrap items-center justify-between gap-2">
                                            <p><span className="text-[30px] font-semibold tracking-tight">{usd(price)}</span><span className="ml-1 text-xs text-neutral-500">/ month</span></p>
                                            {annual && plan.monthly > 0 ? (
                                                <span className="rounded-full bg-blue-50 px-2.5 py-1.5 text-[11px] font-medium text-blue-600">Save {usd((plan.monthly - plan.annual) * 12)} / year</span>
                                            ) : plan.intro !== null && (
                                                <span className="rounded-full bg-green-100 px-2.5 py-1.5 text-[11px] font-medium text-green-700">1st month offer</span>
                                            )}
                                        </div>
                                        <p className="mt-1 text-[11px] leading-4 text-neutral-500">
                                            {annual && plan.monthly > 0 ? `${usd(plan.annual * 12)} billed annually` : plan.intro !== null ? <>Then {usd(plan.monthly)} / month <s className="ml-1">{usd(plan.monthly)}</s></> : "USD"}
                                        </p>
                                    </div>
                                    <div className="pb-9">
                                        {plan.includes && <p className="mb-3 text-[13px] text-neutral-500">{plan.includes}</p>}
                                        <Features items={plan.features} />
                                    </div>
                                    <Link href="/user/plan" className={actionClass} aria-label={`Try Lestow ${plan.name}`}>Try Lestow</Link>
                                </article>
                            );
                        })}
                    </div>
                ) : (
                    <div className="mx-auto mt-5 grid max-w-[706px] gap-6 sm:grid-cols-2 sm:gap-8">
                        {enterprisePlans.map((plan) => {
                            const Icon = plan.icon;
                            return (
                                <article key={plan.name} aria-label={`${plan.name} plan`} className="flex min-h-[580px] flex-col rounded-[22px] border border-black/[0.06] bg-[#f8f8f8] px-6 py-7">
                                    <h3 className="flex items-center gap-2 text-[22px] font-medium tracking-[-0.04em]">{plan.name}<Icon aria-hidden="true" size={18} /></h3>
                                    <p className="mt-1 min-h-10 text-[13px] leading-5 text-neutral-600">{plan.description}</p>
                                    <p className="mb-8 mt-7 text-[30px] font-semibold tracking-tight">Custom</p>
                                    <p className="mb-3 text-[13px] text-neutral-500">{plan.includes}</p>
                                    <div className="pb-12"><Features items={plan.features} /></div>
                                    <button type="button" onClick={() => setDemoOpen(true)} className={`${actionClass} cursor-pointer`} aria-label={`Book a demo for ${plan.name}`}>Book a Demo</button>
                                </article>
                            );
                        })}
                    </div>
                )}
                <p className="mt-5 text-center text-xs text-neutral-500">All prices are in USD (US dollars).</p>
            </div>
            <GetQuoteEnquiryModal open={demoOpen} onClose={() => setDemoOpen(false)} />
        </section>
    );
}
