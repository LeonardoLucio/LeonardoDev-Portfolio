import {
    BrowserRouter,
    Routes,
    Route} from "react-router-dom";
import Home from '../src/views/Home/index'
import Work from '../src/views/Work/Index'
import About from '../src/views/About/index'
import Repository from "./views/Repository";
    function Router () {
        return (
            <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="work" element={<Work />} />
              <Route path="about" element={<About />} />
              <Route path="repository" element={<Repository />} />
            </Routes>
          </BrowserRouter>

        )

    }



export default Router;