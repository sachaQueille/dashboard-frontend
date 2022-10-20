import {
  DefaultOptions,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "./App.css";
import Home from "./pages/Home";

const App = () => {
  const queryConfig: DefaultOptions = {
    queries: {
      useErrorBoundary: true,
      refetchOnWindowFocus: false,
      retry: false,
    },
  };

  const queryClient = new QueryClient({ defaultOptions: queryConfig });

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <Home />
      </QueryClientProvider>
    </div>
  );
};

export default App;
