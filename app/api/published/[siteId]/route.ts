import { readFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";
import { getBackendUrl } from "@/lib/backend";
import { normalizeSiteSeoConfig } from "@/lib/siteSeo";

const publishedSitesDir = path.join(
  /*turbopackIgnore: true*/ process.cwd(),
  "data",
  "published-sites",
);

function enrichSeo(payload: Record<string, unknown>) {
  const seoConfig = normalizeSiteSeoConfig(payload.seo);
  const home = seoConfig.pages?.home;
  return {
    ...payload,
    // Surface Home page SEO at the top level so older resolvers still work.
    seo: {
      ...seoConfig,
      metaTitle: home?.metaTitle || seoConfig.metaTitle || "",
      metaDescription:
        home?.metaDescription || seoConfig.metaDescription || "",
      metaKeywords: home?.metaKeywords || seoConfig.metaKeywords || "",
      ogTitle: home?.ogTitle || seoConfig.ogTitle || "",
      ogDescription: home?.ogDescription || seoConfig.ogDescription || "",
      ogImage: home?.ogImage || seoConfig.ogImage || "",
    },
  };
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ siteId: string }> },
) {
  const { siteId } = await params;

  if (!/^[a-z0-9-]+$/i.test(siteId)) {
    return NextResponse.json(
      { error: "Invalid published site URL." },
      { status: 400 },
    );
  }

  let payload: Record<string, unknown> | null = null;

  try {
    const dbRes = await fetch(`${getBackendUrl()}/sites/public/${siteId}`, {
      cache: "no-store",
    });
    if (dbRes.ok) {
      payload = (await dbRes.json()) as Record<string, unknown>;
    }
  } catch {
    /* fallback below */
  }

  if (!payload) {
    try {
      const filePayload = await readFile(
        path.join(publishedSitesDir, `${siteId}.json`),
        "utf8",
      );
      payload = JSON.parse(filePayload) as Record<string, unknown>;
    } catch {
      payload = null;
    }
  }

  if (!payload) {
    return NextResponse.json(
      { error: "Published site not found." },
      { status: 404 },
    );
  }

  return NextResponse.json(enrichSeo(payload));
}
