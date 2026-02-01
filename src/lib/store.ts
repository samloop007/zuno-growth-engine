export interface Brand {
  id: string;
  name: string;
  industry: string;
  logo: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}

export interface SiteData {
  revenue: string;
  brands: Brand[];
  projects: Project[];
}

const DEFAULT_DATA: SiteData = {
  revenue: "50M PKR",
  brands: [
    { id: "1", name: "Brand One", industry: "Partner", logo: "" },
    { id: "2", name: "Brand Two", industry: "Partner", logo: "" },
  ],
  projects: [
    {
      id: "1",
      title: "Powerful marketing automation solutions",
      description: "We build marketing-automation solutions that help businesses scale efficiently.",
      image: "/assets/products-image.jpg",
      features: [
        "Automated lead nurturing workflows",
        "Multi-channel campaign management",
        "Real-time analytics dashboard",
        "Custom integration support",
      ],
    },
  ],
};

const STORAGE_KEY = "zuno_site_data_v2";

export const getSiteData = (): SiteData => {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) return DEFAULT_DATA;
  try {
    return JSON.parse(data);
  } catch (e) {
    return DEFAULT_DATA;
  }
};

export const saveSiteData = (data: SiteData) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  // Dispatch a custom event so other components can listen for changes
  window.dispatchEvent(new Event("siteDataUpdated"));
};
