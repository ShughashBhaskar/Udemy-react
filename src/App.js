
import Navbar from "./Components/navbar.js"
import Category from './Components/category.js';
import Sale from './Components/sale.js';
import Recommend from './Components/recommend.js';
import Topic from './Components/topics.js';
import Popular from './Components/popular.js';
import Footer from './Components/footer.js';

function App(){
    return(
        <>
        <Navbar></Navbar>
  <Category></Category>
  <Sale></Sale>
  <Recommend></Recommend>
  <Topic></Topic>
  <Popular></Popular>
  <Footer></Footer>
        </>
    )
}

export default App;