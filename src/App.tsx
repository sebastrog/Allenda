import { useState } from 'react'
import './App.css'
import { createTheme, colors, ThemeProvider, Box, Typography, Button } from '@mui/material'

const theme = createTheme({
  status: {
    danger: '#000000'
  },
  palette: {
    primary: {
      main: "#f59e0b"
    }
  }
})

function App() {
  const [user, setUser] = useState('')

  const sendRequest = async () => {
    try {
      const data = await fetch("https://back-allenda-production.up.railway.app/api/user")
      const {user} = await data.json();
      setUser(user)
      console.log('data', user)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={
        {
          border:1,
          borderColor: 'primary.main',
          borderRadius: 1,
          padding: '1rem'
        }
      }>
        <Typography variant="h3">
          Hi {user}!
        </Typography>
      </Box>

      <Button 
        variant="contained" 
        color="primary" 
        size="small" 
        onClick={sendRequest}
        sx={{ color:'white',   marginTop: 4}}>
        make a request!
      </Button>
    </ThemeProvider>
  )
}

export default App
