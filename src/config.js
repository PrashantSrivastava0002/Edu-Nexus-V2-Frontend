// Central API base URL - reads from Vite env variable
// In development (with proxy), this is empty. In production (Vercel), this points to Render.
const API_BASE = import.meta.env.VITE_API_URL || '';

export default API_BASE;
