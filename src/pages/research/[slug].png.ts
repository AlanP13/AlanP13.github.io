import type { APIRoute } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";
import { renderOgCard } from "../../lib/og-image";

export async function getStaticPaths() {
  const items = await getCollection("research");
  return items.map((item) => ({
    params: { slug: item.slug },
    props: { item },
  }));
}

export const GET: APIRoute = async ({ props }) => {
  const item = props.item as CollectionEntry<"research">;
  const d = item.data;

  const png = await renderOgCard({
    title: d.title,
    subtitle: d.venue ?? "Engineering-to-Research Monograph Series",
    footerLeft: "alanp13.github.io",
    footerRight: d.doi ? `DOI: ${d.doi}` : "",
  });

  return new Response(png, {
    headers: { "Content-Type": "image/png" },
  });
};
