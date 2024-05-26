import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { EditPage } from "./pages/EditPage"
import { ThemeProvider } from "./styles/ThemeProvider"

const queryClient = new QueryClient()

function App() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <EditPage />
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
