import "./App.css";
import PokemonContextProvider from "./store/PokemonContext";
import PageHeader from "@/components/PageHeader";
import PokemonDetails from "@/pages/PokemonDetails";
import PokemonList from "@/pages/PokemonList";
import { BrowserRouter, Route, Routes } from "react-router";
import PokemonTeam from "./pages/PokemonTeam";

const App = () => {
  return (
    <PokemonContextProvider>
      <main>
        <BrowserRouter>
          <PageHeader />

          <Routes>
            <Route path="/" element={<PokemonList />} />
            <Route path="/pokemon/:name" element={<PokemonDetails />} />
            <Route path="/team" element={<PokemonTeam />} />
          </Routes>
        </BrowserRouter>
      </main>
    </PokemonContextProvider>
  );
};
export default App;
