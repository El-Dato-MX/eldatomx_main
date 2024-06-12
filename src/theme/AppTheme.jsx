import { ThemeProvider } from "@emotion/react"
import { darkTheme } from "./"

// Higher Component Order
const AppTheme = ({children}) => {
  return (
    <ThemeProvider theme={darkTheme}>
      {children}
    </ThemeProvider>
  )
}

export default AppTheme;