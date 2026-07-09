export default function sitemap() {
  const baseUrl = "https://thakursagar.com.np";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}