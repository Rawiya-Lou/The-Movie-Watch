import { MovieDetails } from "./component/MovieDetails"
import { SearchInput } from "./component/SearchInput"
import { Routes, Route } from "react-router-dom"
import Home from "./component/Home"

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
