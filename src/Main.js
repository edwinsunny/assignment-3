import { Route, Routes, useLocation } from "react-router";
import Sidebar from "./Sidebar";
import Home from "./Pages/Home";
import Weather from "./Pages/Weather";
import Currency from "./Pages/Currency";
import CalculatorDoc from "./Pages/CalculatorDoc";
import CalendarDoc from "./Pages/CalendarDoc";
import styled from "styled-components";
import LoginComponent from "./Pages/Login";
import { AnimatePresence } from "framer-motion";

const Pages = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: calc(2rem + 2vw);
    background: linear-gradient(to right, #803bec 30%, #1b1b1b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

function Main() {
  const location = useLocation();
  return (
    <>
      <Sidebar />
      <Pages>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<Home/>} />
            <Route path="/Weather" element={<Weather/>} />
            <Route path="/Currency" element={<Currency/>} />
            <Route path="/CalculatorDoc" element={<CalculatorDoc/>} />
            <Route path="/CalendarDoc" element={<CalendarDoc/>} />
          </Routes>
        </AnimatePresence>
      </Pages>
    </>
  );
}

export default Main;
