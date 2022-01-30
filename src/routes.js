import {
    BrowserRouter,
    Routes,
    Route} from "react-router-dom";
import Home from '../src/views/Home/index'
import Work from '../src/views/Work/Index'
import About from '../src/views/About/index'
    function Router () {
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="work" element={<Work />} />
              <Route path="about" element={<About />} />
            </Routes>
          </BrowserRouter>

        )

    }



export default Router;