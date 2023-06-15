//example for props

/*import Employee from "./Employee";
import Empskil from './Empskil';
import Fulldetail from './Fulldetail';


function App() {
  return (
    <div>
      <h1> Employee</h1>
      <Employee name='sri' empid={123} />
      <Empskil empskill="React Developer"></Empskil>
      <Fulldetail location="Marthandam"></Fulldetail>

    </div>

  );
}
export default App;
*/

// example for functional rendering

/*import Greeting from "./Greeting";
function App() {
  return (
    <div>
    <Greeting /> 
    </div>
  );
 
}

export default App;
*/


//Example for react router

/*import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (

    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
*/

//Example for UseState

import Counter from "./Counter";

function App() {
  return (
    <div>
      <p>Hello</p>
      <Counter />
    </div>
  )
}
export default App;




