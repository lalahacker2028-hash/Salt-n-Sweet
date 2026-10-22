export interface RestaurantConfig {
  brandName: string;
  tagline: string;
  supportingText: string;
  location: string;
  locationShort: string;
  primaryPhone: string;
  secondaryPhone: string;
  primaryWhatsApp: string; // e.g. "923002696166"
  secondaryWhatsApp: string; // e.g. "923366541666"
  facebookUrl: string;
  instagramUrl: string;
  googleMapsUrl: string;
  currency: string;
  hoursNote: string;
}

export const RESTAURANT_CONFIG: RestaurantConfig = {
  brandName: "Salt'n Sweet",
  tagline: "Good Food. Sweet Moments.",
  supportingText: "Fast-food restaurant, artisan bakery and cafe serving Mirpur Mathelo with savoury favourites, oven-fresh pizzas, gourmet burgers, exquisite cakes and traditional sweets.",
  location: "Data-3 Petroleum, Near Bus Stand, Mirpur Mathelo, Sindh, Pakistan",
  locationShort: "Mirpur Mathelo, Near Bus Stand",
  primaryPhone: "0300-2696166",
  secondaryPhone: "0336-6541666",
  primaryWhatsApp: "923002696166",
  secondaryWhatsApp: "923366541666",
  facebookUrl: "https://www.facebook.com/saltnsweetofficial/",
  instagramUrl: "https://www.instagram.com/saltnsweetofficial/",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Salt%27n+Sweet+Data-3+Petroleum+Near+Bus+Stand+Mirpur+Mathelo+Sindh+Pakistan",
  currency: "Rs.",
  hoursNote: "Contact us for today's opening hours"
};
