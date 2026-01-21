import { Link } from "react-router";

function Home() {
  return (
    <>  
    <h1>Welcome to Shopping Mall</h1>
    <p><Link to="/pages/items">View Items</Link></p>
    </>
  )
}

export default Home;