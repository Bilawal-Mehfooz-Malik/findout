export function hardcoded(str: string): string {
  if (process.env.NODE_ENV === "development") {
    // Optionally log it in console for dev awareness
    console.log(`[HARD_CODED] ${str}`);
  }
  // Return the original string for display
  return str;
}
