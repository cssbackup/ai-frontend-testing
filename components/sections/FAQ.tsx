const faqs = [
    {
        question: "What is Lestow and how does it work?",
        answer: "Lestow is an AI-powered website builder that helps you create a complete website in minutes using your business information and preferences.",
    },
    {
        question: "What can I build with Lestow?",
        answer: "You can create business websites, portfolios, service websites, real estate sites, eCommerce websites, landing pages, and more.",
    },
    {
        question: "Do I need coding experience to use Lestow?",
        answer: "No. Lestow is built for everyone, so you can create and customize your website without writing code.",
    },
    {
        question: "How does AI help build my website?",
        answer: "Lestow uses the details you provide to automatically generate relevant layouts, sections, content, and design suggestions.",
    },
    {
        question: "Can I customize my website after it is generated?",
        answer: "Yes. You can edit text, images, colors, fonts, sections, navigation, buttons, and other website content.",
    },
    {
        question: "Can I connect my own domain to Lestow?",
        answer: "Yes. You can connect your own domain to your published Lestow website.",
    },
    {
        question: "Are Lestow websites mobile responsive?",
        answer: "Yes. Websites created with Lestow are designed to work across desktop, tablet, and mobile devices.",
    },
    {
        question: "Can I preview my website before publishing?",
        answer: "Yes. You can preview your website and review your changes before making it live.",
    },
];

const pattern = Array.from({ length: 15 }, (_, row) =>
    Array.from({ length: 15 }, (_, column) =>
        "01LSTW829X4"[(row * 7 + column * 3) % 11]
    ).join("  ")
).join("\n");

export default function FAQ() {
    return (
        <section aria-labelledby="faq-heading" className="relative isolate overflow-hidden bg-white px-6 py-16 text-neutral-950 sm:px-10 sm:py-20 lg:px-20">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 select-none overflow-hidden">
                {["-left-24 -top-32", "left-1/3 top-40", "-right-16 bottom-0"].map((position) => (
                    <pre key={position} className={`absolute ${position} text-[11px] leading-5 tracking-[0.3em] text-neutral-950/[0.035] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]`}>
                        {pattern}
                    </pre>
                ))}
            </div>

            <div className="mx-auto max-w-[1000px]">
                <h2 id="faq-heading" className="text-center text-3xl font-medium leading-[1.35] tracking-tight sm:text-3xl">
                    Curious about Lestow?
                    <br />
                    We got you covered
                </h2>

                <div className="mt-12 divide-y divide-neutral-200 sm:mt-16">
                    {faqs.map(({ question, answer }) => (
                        <details key={question} name="homepage-faq" className="group">
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-sm py-6 text-base font-medium leading-relaxed transition-colors hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-500 sm:py-6 sm:text-lg [&::-webkit-details-marker]:hidden">
                                <span>{question}</span>
                                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0 text-neutral-400 transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none">
                                    <path d="m6 9 6 6 6-6" />
                                </svg>
                            </summary>
                            <p className="max-w-[880px] pb-6 pr-8 text-base leading-7 text-neutral-600 sm:pb-7 sm:pr-12">
                                {answer}
                            </p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
