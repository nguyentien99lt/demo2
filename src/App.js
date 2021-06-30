import logo from './logo.svg';
import './App.css';
import Header from "./components/admin/header";
import Main from "./components/admin/main";
import Nav from "./components/admin/nav";
import "./styles.css";


export default function App() {
  return (
    <div>
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <Nav />
            <Main />
          </div>
        </div>
      </div>
    </div>
  );
}


