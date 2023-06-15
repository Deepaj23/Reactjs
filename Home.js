import { Link } from "react-router-dom";

function Home() {
    return (
      <div>
        <main>
        <h1>This is the home page</h1>
        </main>
        <nav>
            <Link to="/about">About</Link>
            </nav>
      </div>
    );
  }
  
  export default Home;