import Pricing from "./Pricing";
import SitePageShell from "./SitePageShell";

export default function PricingPage() {
  return (
    <SitePageShell
      title={
        <>
          Simple <span className="text-blue-600">pricing</span>
        </>
      }
      subtitle="Choose the plan that fits your building ambitions — from a first site to enterprise workspaces."
      cta={{ label: "Start building", href: "/auth" }}
      bandTitle="Transparent plans for individuals, teams, and organizations."
    >
      <Pricing hideHeader />
    </SitePageShell>
  );
}
