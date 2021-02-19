import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <div className="container-fluid">
              <Route path="/" exact={true}>
                  {/*<Home/>*/}
              </Route>
              <Route path="/courses">
                  {/*<CourseManager/>*/}
              </Route>
          </div>
      </BrowserRouter>
  );
}

export default App;
