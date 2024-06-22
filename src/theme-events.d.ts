declare global {
  interface WindowEventMap {
    'docusaurus/theme-change': CustomEvent<{ theme: string }>;
  }
}

export {};
