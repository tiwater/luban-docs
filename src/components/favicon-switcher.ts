import React from 'react';

const changeFavicon = (theme: string) => {
  const link: HTMLLinkElement = document.querySelector('link[rel*=\'icon\']')
    || document.createElement('link');
  link.type = 'image/png';
  link.rel = 'shortcut icon';
  link.href = theme === 'dark' ? '/img/logo-white.png' : '/img/logo.png';
  document.getElementsByTagName('head')[0].appendChild(link);
};

type ThemeChangeEventDetail = {
  theme: string;
};

type ThemeChangeEvent = Event & {
  detail: ThemeChangeEventDetail;
};

export default function FaviconSwitcher() {
  try {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')
      .matches;

    // On initial load
    changeFavicon(storedTheme ?? (prefersDark ? 'dark' : 'light'));

    // On theme change
    window.addEventListener(
      'docusaurus/theme-change',
      (event: ThemeChangeEvent) => {
        changeFavicon(event.detail.theme);
      },
    );
  } catch (e) {
    console.error(e);
  }
}
