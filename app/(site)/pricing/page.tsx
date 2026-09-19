import type { Metadata } from "next";
import PricingPage from "@/components/sections/PricingPage";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Compare Lestow plans for individuals, teams, and enterprises.",
};

export default function PricingRoute() {
  return <PricingPage />;
}
