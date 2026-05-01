import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import { MovieDetails } from "./pages/MovieDetails"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="movie/:id" element={<MovieDetails/>}/>
      {/* <SearchInput /> */}

    </Routes>

  )
}

export default App
