import { EditPage } from "./pages/EditPage/EditPage"
import { ThemeProvider } from "./styles/ThemeProvider/ThemeProvider"

function App() {
  return (
    <ThemeProvider>
    <>Hello, world</>
        <EditPage />
    </ThemeProvider>
  )
}

export default App
