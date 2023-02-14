import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Login from "./components/pages/Login/Login";
import Sidebar from "./components/Sidebar/Sidebar";
import styles from "./App.module.css";
import Distributor from "./components/pages/Distributors";
import { Container } from "./components/common.styled";
import DistributorDetails from "./components/pages/Distributors/DistributorDetails/DistributorDetails";
import AppMangeMent from "./components/pages/AppManagement";
import ProfileSetting from "./components/pages/ProfileSettings";
import User from "./components/pages/User";
import { useEffect, useState } from "react";
import UserDetails from "./components/pages/User/UserDetails/UserDetails";

function App() {
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    login && navigate("/");
    !login && navigate("/login");
  }, [login]);
  return (
    <>
      <Header setLogin={setLogin} />
      {login ? (
        <>
          <Container className={styles.pageWrapper}>
            <Sidebar />
            <div className={styles.rightSideContainer}>
              {" "}
              <Routes>
                {" "}
                <Route path="/" element={<Distributor />}></Route>
                <Route
                  path="/distributorDetails"
                  element={<DistributorDetails />}
                ></Route>
                <Route path="/user" element={<User />}></Route>
                <Route path="/userDetails" element={<UserDetails />}></Route>
                <Route path="/appmanagement" element={<AppMangeMent />}></Route>
                <Route
                  path="/profileSettings"
                  element={<ProfileSetting />}
                ></Route>
              </Routes>
            </div>
          </Container>
          <div className={styles.overlay}> </div>
        </>
      ) : (
        <Routes>
          {" "}
          <Route
            path="/login"
            element={<Login setLogin={setLogin} login={login} />}
          ></Route>
        </Routes>
      )}
    </>
  );
}

export default App;
