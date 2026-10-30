import { MetadataRoute } from "next";
import { siteConfig, studioServices, studioProjects } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/services",
    "/work",
    "/capabilities",
    "/about",
    "/contact",
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const serviceRoutes = studioServices.map((service) => ({
    url: `${siteConfig.url}/services/${service.slug}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const projectRoutes = studioProjects.map((project) => ({
    url: `${siteConfig.url}/work/${project.id}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...routes, ...serviceRoutes, ...projectRoutes];
}
