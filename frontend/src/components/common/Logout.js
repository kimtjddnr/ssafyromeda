import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { persistor } from "../../store/index";
import MyButton from "./Button";
import PixelModal from "./PixelModal";

import { logoutApi } from "../../store/api";

const Logout = () => {
  const navigate = useNavigate();

  const logoutRequest = () => {
    logoutApi
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 로그아웃 되었다는 알림창 필요
  const purge = async () => {
    await persistor.purge();
    await navigate("/");
  };

  return (
    <div>
      <MyButton
        lang={"Korean"}
        text={"로그아웃"}
        type={"is-warning"}
        onClick={() => async () => {
          await logoutRequest;
          await purge;
        }}
      />
    </div>
  );
};

export default Logout;
