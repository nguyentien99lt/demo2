import logo from './logo.svg';
import './App.css';
import Header from "./components/admin/header";
import Main from "./components/admin/main";
import Nav from "./components/admin/nav";
import "./styles.css";
import { useState } from "react";


export default function App() {

  const [Products, setProducts] = useState([
    { id: 1, name: "product1", price: "2000" },
    { id: 2, name: "product2", price: "3000" },
    { id: 3, name: "product3", price: "4000" },
    { id: 4, name: "product4", price: "5000" }
  ]);

  const onHandleRemove = (x) => {
    const newProduct = Products.filter((item) => item.id != x)
    setProducts(newProduct);

  };

  return (
    <div>
      <div>
        <h1>okhahahah</h1>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <Nav />
            <Main data={Products} onRemove={onHandleRemove} />
          </div>
        </div>
      </div>
    </div>
  );
}


