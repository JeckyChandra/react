import './App.css';
import { Outlet} from "react-router-dom";

//import file sendiri
import Header from './component/header/header';
import Footer from './component/footer/footer';




function App() {
  return (
    <div>
      <Header/>
      
      <Footer/>
    </div>
  );
}

export default App;
