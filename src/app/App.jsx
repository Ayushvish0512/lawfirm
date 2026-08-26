import { AppProviders } from "./providers/AppProviders";
import { PublicRoutes } from "./routes/PublicRoutes";
import "../design-system/index.css";
import "./App.css";

export function App() {
  return (
    <AppProviders>
      <PublicRoutes />
    </AppProviders>
  );
}

export default App;
