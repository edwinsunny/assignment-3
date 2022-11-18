import { Route, Routes, useLocation } from "react-router";
import Registration from "./Pages/Registration";
import LoginComponent from "./Pages/Login";
import { AnimatePresence } from "framer-motion";
import Main from "./Main";


function App() {
  const location = useLocation();
  return (
    <>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route exact path="/Login" element={<LoginComponent />} />
            <Route exact path="/Registration" element={<Registration />} />
            <Route path="*" element={<Main />} />
          </Routes>
        </AnimatePresence>
    </>
  );
}

export default App;
