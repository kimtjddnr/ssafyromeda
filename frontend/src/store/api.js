// Axios
import axios from "axios";
import { customAxios } from "./customAxios";
import { BASE_URL } from "store";
import { setToken } from "store";

// 회원가입 (닉네임 중복체크 및 등록)
export const createNicknameApi = async (user) =>
  await customAxios.post("users/signup", user);

// 로그인 시 회원정보 get
export const getUserInfoApi = async (userno) =>
  await customAxios.get(`users/${userno}`);

// 로그아웃 요청
export const logoutRequestApi = async (userno) =>
  await customAxios.put(`users/signout/${userno}`);

// headers
// headers: {
//   "Content-Type": "application/json;charset=UTF-8",
//   Authorization: `Bearer ${token}`,
// },

// 회원정보 put
// export const updateUserApi = async (user) =>
//   await customAxios.put(`api/user/${userid}`, user, {
//     headers: {
//       'Content-Type': 'application/json;charset=UTF-8',
//       Authorization: `Bearer ${localStorage.getItem('token')}`,
//     },
//   });

export const updateUserApi = ({ userid, nickname }) =>
  axios({
    method: "put",
    url: `${BASE_URL}/user/${userid}`,
    data: {
      nickname,
    },
    headers: {
      ...setToken(),
    },
  });

// 탈출일지 불러오기
export const getHistoryApi = ({ userid, boarding, win, lose }) =>
  axios({
    method: "get",
    url: `${BASE_URL}/user/history/${userid}`,
    data: {
      boarding,
      win,
      lose,
    },
  });

// 사진 불러오기
export const getPhotoApi = ({
  userid,
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
}) =>
  axios({
    method: "get",
    url: `${BASE_URL}/user/photo/${userid}`,
    data: {
      photo1,
      photo2,
      photo3,
      photo4,
      photo5,
    },
  });
