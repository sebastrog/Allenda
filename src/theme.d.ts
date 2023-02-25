import { ThemeOptions } from '@mui/material/styles'
import { createTheme } from '@mui/material'
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

export const theme = createTheme({
  backgrounds: {
    primary: '#212528',
    secondary: '#2b2f33'
  },
  palette: {
    primary: {
      main: "#f59e0b"
    }
  }
})