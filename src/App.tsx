import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import React, { Suspense } from "react";
import { AddUserPage } from "./component/Userform";
import Producttable from "./Pages/Producttable";
import Dashboard from "./Pages/Dashboard";
import Selectedinput from "./component/Selectedinput";
import Login from "./Pages/Login";
import Userlisttable from "./Pages/Userlisttable";

const Main = React.lazy(() => import("./Pages/Main"));
const Produtform = React.lazy(() => import("./component/Productform"));
const Table = React.lazy(() => import("./component/Table"));

function App() {
  return (
    <>
      {/* <Reactquery /> */}
      <BrowserRouter>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/" element={<Main />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="produtform" element={<Produtform />} />
              <Route path="producttable" element={<Producttable />} />
              <Route path="userlisttable" element={<Userlisttable />} />
              <Route path="addUserPage" element={<AddUserPage />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
