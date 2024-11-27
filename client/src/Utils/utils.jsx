// utils.js or utils.ts (you can name this file whatever you want)
export function cn(...args) {
  // Filter out any falsy values (false, null, undefined, empty string, etc.)
  return args.filter(Boolean).join(" ");
}
