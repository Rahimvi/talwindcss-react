import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import DropDown from './components/DropDown';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Menu from './pages/Menu';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  useEffect(() => {
    const hideMenu = () => {
      if(window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', hideMenu)

    return () => {
      window.removeEventListener('resize', hideMenu)
    }
  })
  return (
    <>
        <Navbar toggle={toggle} />
        <DropDown isOpen={isOpen} toggle={toggle} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/menu" component={Menu} />
          </Switch>
        <Footer />
    </>
  );
}

export default App;
