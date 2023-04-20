import { React } from "react";

import { MainHeader, MainContent } from "./layouts";

import './assets/scss/main.scss'

const App = () => {
  const location = window.location.pathname;
  return (
    <>
      {
        location === '/' && <MainHeader  />
      }
      <MainContent />
    </>
  );
}

export {App};
