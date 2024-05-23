import axios from "axios";
import { signOut } from "next-auth/react";
import { createContext, useContext, useEffect, useState } from "react";

const MainCtx = createContext({});

export default function AuthProvider({ children }) {
  const [mainData, setMainData] = useState({ isAuth: false });

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (mainData.isAuth) {
      getUserInfo();
      getUserBalance();
    }
  }, [mainData.isAuth]);

  function onChangeMainData() {
    setMainData({ ...mainData });
  }

  async function checkAuth() {
    try {
      const result = await axios.delete("/api").then((res) => res.data);
      if (result.isAuth) {
        mainData.isAuth = true;
        onChangeMainData();
      }
    } catch (error) {
      console.log(error, "error --- checkAuth --- AuthProvider");
    }
  }

  async function getUserInfo() {
    try {
      const result = await axios
        .get("/api", {
          params: {
            name: "/profile/getinfo",
          },
        })
        .then((res) => res.data);
      if (result.status === 200) {
        mainData.userInfo = result.data;
        onChangeMainData();
      } else {
        mainData.isAuth = false;
        onChangeMainData();
      }
    } catch (error) {
      console.log(error, "error --- getUserInfo --- AuthProvider");
    }
  }

  async function getUserBalance() {
    try {
      const result = await axios
        .get("/api", {
          params: {
            name: "/profile/getbalance",
          },
        })
        .then((res) => res.data);
      if (result.status === 200) {
        mainData.userBalance = result.balance;
        onChangeMainData();
      } else {
        mainData.isAuth = false;
        onChangeMainData();
      }
    } catch (error) {
      console.log(error, "error --- getUserBalance --- AuthProvider");
    }
  }

  async function logout() {
    try {
      const result = await axios.get("/api/logout").then((res) => res.data);
      if (result.success) {
        signOut({ callbackUrl: "/" });
        mainData.isAuth = false;
        onChangeMainData();
      }
    } catch (error) {
      console.log(error, "error --- logout --- AuthProvider");
    }
  }

  return (
    <MainCtx.Provider value={{ mainData, onChangeMainData, logout }}>
      {children}
    </MainCtx.Provider>
  );
}

export const useMainCtx = () => useContext(MainCtx);
