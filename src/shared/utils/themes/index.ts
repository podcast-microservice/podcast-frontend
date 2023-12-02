export const themes = {
  light: 'light',
  dark: 'dark'
};

export const getTheme = (): string => {
  const theme = localStorage.getItem('theme');
  if (theme) {
    return theme;
  }
  return themes.light;
};

export const updateTheme = (theme: string) => {
  localStorage.setItem('theme', theme);
  if (theme === themes.dark) {
    document.documentElement.classList.add(themes.dark);
  } else {
    document.documentElement.classList.remove(themes.dark);
  }
};
