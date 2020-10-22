import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { Navbar, Nav, Button } from 'react-bootstrap'

import i18n from "./i18next"
import { useTranslation } from "react-i18next"


// import { Header } from "./components/header/Header"
import { Body } from "./components/bodypart/Body"



const changelanguage = (ln) => {
  return () => {
    i18n.changeLanguage(ln);

    console.log("I am change language", ln)
  }
}



function App() {



  const { t, i18n } = useTranslation()
  return (
    <div className="App">
      <div>
        <div className="centerDiv header">
          <Navbar className="w70">
            <Navbar.Brand href="#home" className="logo" >Voicemate</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home" className="headerLink">{t('head1')}</Nav.Link>
              <Nav.Link href="#features" className="headerLink">{t('head2')}</Nav.Link>
              <Nav.Link href="#benifit" className="headerLink">{t('head3')}</Nav.Link>
              <Nav.Link href="#pricing" className="headerLink">{t('head4')}</Nav.Link>
              <Nav.Link href="#pricing" className="headerLink">{t('head5')}</Nav.Link>
            </Nav>
            <div className="mr-2">
              <Button onClick={changelanguage("en")} variant="primary" size="sm" className="mr-1">
                <i class="fas fa-globe"></i> En
                            </Button>
              <Button onClick={changelanguage("vi")} variant="primary" size="sm" >
                <i className="fas fa-globe"></i> Vi
                            </Button>
            </div>
            <div inline>
              {/* <Button variant="danger" >Sign Up</Button> */}
              <button className="button" >{t('headbtn')}</button>
            </div>
          </Navbar>
        </div>
        <Navbar className="mobileHeader">
          <div>
            <p className="logo">Voicemate</p>
          </div>
          <div>
            <p><i className="far fa-grip-lines"></i></p>
          </div>
        </Navbar>


      </div>
      <Body />

    </div>
  );
}

export default App;
