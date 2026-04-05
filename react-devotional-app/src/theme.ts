export const getDevotionalTheme = (mode: 'light' | 'dark') => ({
  palette: {
    mode,
    primary: {
      // Light stays Maroon | Dark becomes Stone Black
      main: mode === 'light' ? '#5D0E11' : '#121212', 
    },
    secondary: {
      // Gold stays consistent, slightly brighter in Dark for visibility
      main: mode === 'light' ? '#D4AF37' : '#FFD700', 
    },
    background: {
      // Light stays Cream | Dark becomes Deep Granite
      default: mode === 'light' ? '#FDFCF8' : '#1C1C1C', 
      paper: mode === 'light' ? '#FFFFFF' : '#252525',
    },
    text: {
      primary: mode === 'light' ? '#2C3E50' : '#E0E0E0',
      secondary: mode === 'light' ? '#5D0E11' : '#D4AF37',
    },
  },
});