import React, { useEffect, useContext } from "react";
import { Context as AuthContext } from "../context/AuthContext";

export default () => {
  const { sate, tryLocalSignin } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, []);
  return null;
};
