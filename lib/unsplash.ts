export const buildUnsplashUrl = (imageId: string, width = 1200) =>
  `https://images.unsplash.com/${imageId}?auto=format&fit=crop&w=${width}&q=80`;
