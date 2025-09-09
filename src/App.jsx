import React, { useEffect } from "react";
import Routes from "./Routes";

function App() {
  useEffect(() => {
    // Increment visit counter on app load
    fetch('/api/visits/increment', { method: 'POST' }).catch(() => {});
  }, []);
  return (
    <Routes />
  );
}

export default App;
