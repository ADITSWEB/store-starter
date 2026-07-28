/// <reference types="astro/client" />
/// <reference types="alpinejs" />

declare global {
  interface Window {
    Alpine: import('alpinejs').Alpine;
  }
}

export {};
