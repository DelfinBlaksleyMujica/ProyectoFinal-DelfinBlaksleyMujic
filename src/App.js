import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Routes , Route } from "react-router-dom";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemList from './components/ItemList';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { useCart , CartContextProvider} from "./context/CartContext";



function App() {
  return (
      <CartContextProvider>
        <BrowserRouter>
        <NavBar nombreDeEmpresa="Activá Studio"/>
      <Routes>
      <Route path="/" element={<ItemListContainer/>} />
      <Route path="/category/:category" element={<ItemListContainer/>} />
      <Route path="/item/:id" element={<ItemDetailContainer/>} />
      <Route path="/Cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
      </CartContextProvider>
      
    
    
  );
}

export default App;
