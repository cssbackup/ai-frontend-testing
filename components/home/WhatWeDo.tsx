import { MessageCircle, Sparkles, SlidersHorizontal, Rocket } from "lucide-react";

const steps = [
    [MessageCircle, "Tell Us About You", "Share your business details, goals, and preferences."],
    [Sparkles, "Generate with AI", "Our AI creates a complete website with relevant content and design."],
    [SlidersHorizontal, "Customize Easily", "Edit text, images, colors, and sections."],
    [Rocket, "Publish & Grow", "Go live in minutes and start reaching your audience."],
] as const;

export default function WhatWeDo() {
    return (
        <section id="how-it-works" className="scroll-mt-20 bg-white px-6 py-14 text-[#080e42] sm:px-10 sm:py-28 lg:pb-30 lg:pt-20" aria-labelledby="what-we-do-title">
            <div className="mx-auto max-w-[1540px] text-center">
                {/* <p className="text-sm font-medium uppercase tracking-[0.1em] text-[#1680ff] sm:text-lg">How it works</p> */}
                <h2 id="what-we-do-title" className="text-2xl mx-auto mt-6 sm:text-3xl font-semimedium leading-[1.12] tracking-[-0.04em]">
                    How It <span className="text-blue-500">Works?</span>
                </h2>
                <p className="mx-auto mt-1 text-base leading-relaxed text-[#747d9e] sm:text-xl lg:text-sm">Four steps. A beautiful website. No hassle.</p>
                <ol className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:mt-18 lg:grid-cols-4 lg:gap-x-0">
                    {steps.map(([Icon, title, description], index) => (
                        <li key={title} className="relative flex flex-col items-center px-3">
                            {index < steps.length - 1 && (
                                <svg aria-hidden="true" viewBox="0 0 400 100" preserveAspectRatio="none" className="pointer-events-none absolute left-1/2 top-2 hidden h-20 w-full overflow-visible lg:block">
                                    <path d="M 0 50 C 70 5, 130 5, 200 50 S 330 95, 400 50" fill="none" stroke="#b4d5ff" strokeWidth="2.5" strokeDasharray="7 9" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                                    <circle cx="200" cy="50" r="6" fill="#2586ff" />
                                </svg>
                            )}
                            <div className="relative z-10 grid size-24 place-items-center rounded-full bg-[#e7f1ff] text-[#1680ff] lg:size-18">
                                <Icon aria-hidden="true" className="size-10 lg:size-6" strokeWidth={1.8} />
                            </div>
                            <span aria-hidden="true" className="mt-4 text-lg font-semibold text-[#747d9e] lg:text-sm">0{index + 1}</span>
                            <h3 className="mt-3 text-xl font-semibold leading-tight tracking-[-0.03em] xl:text-xl">{title}</h3>
                            <p className="mt-3 max-w-[330px] text-base leading-relaxed text-[#747d9e] xl:text-sm">{description}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
