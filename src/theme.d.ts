import { ThemeOptions } from '@mui/material/styles'
declare module '@mui/material/styles' {
  interface Theme {
    backgrounds: {
      primary: string,
      secondary: string,
    }
  }

  interface ThemeOptions {
    backgrounds: {
      primary: React.CSSProperties['color'],
      secondary: React.CSSProperties['color'],
    }
  }
}