// Centralized basePath configuration
// Reads from environment or uses empty string for local development
export const BASE_PATH = process.env.NODE_ENV === 'production' ? '/portfolio1' : '';

// Helper function to prepend basePath to asset URLs
export function assetUrl(path: string): string {
  if (!BASE_PATH) return path;

  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${BASE_PATH}/${cleanPath}`;
}
