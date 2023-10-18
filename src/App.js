import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import * as React from "react";
import Home from "./pages/Home";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </ChakraProvider>
  );
}

export default App;
