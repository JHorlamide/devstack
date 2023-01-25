import React from "react";
import RouteConfig from "./routes/RouteConfig";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <React.Fragment>
      <Toaster toastOptions={{ duration: 5000 }} />
      <RouteConfig />
    </React.Fragment>
  );
}

export default App;
