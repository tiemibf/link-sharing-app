import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TabProvider } from "./contexts/TabContext";
import { EditPage } from "./pages/EditPage";
import { ThemeProvider } from "./styles/ThemeProvider";

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <TabProvider>
          <EditPage />
        </TabProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
