import { ThemeProvider, Box, Typography, Button} from '@mui/material'
import { theme } from "./theme.d"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={
        {
          border: 1,
          bgcolor: "primary.main",
          borderColor: theme.backgrounds.secondary,
          borderRadius: 1,
          padding: '1rem',
          color: 'white'
        }
      }>
        <Typography variant="h3">
          Hi!
        </Typography>
      </Box>

      <Button 
        variant="contained" 
        color="primary" 
        size="small" 
        sx={{ color:'white',  marginTop: 2}}>
        magic button!
      </Button>
    </ThemeProvider>
  )
}

export default App
