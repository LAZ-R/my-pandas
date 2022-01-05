import "./App.css";
import PandasListView from "./views/PandaListView";
import { QueryClient, QueryClientProvider } from "react-query";
import Logo from "./Logo";
import PandaDetailsView from "./views/PandaDetailsView";
import Router from "./components/Router";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <div className="logoCircle">
          <Logo />
        </div>
        <Router />
      </div>
    </QueryClientProvider>
  );
}

export default App;
