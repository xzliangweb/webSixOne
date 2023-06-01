import { defineStore } from "pinia";

// 引入接口
import { reqLogin } from "@/api/user";

// 引入数据类型
import type { LoginForm } from "@/api/user/type";

// 引入操作本地存储的工作方法
import { SET_TOKEN, GET_TOKEN } from "@/utils/token";

let useUserStore = defineStore("User", {
  // 小仓库村塾数据地方
  state: () => {
    return {
      // token: localStorage.getItem("TOKEN"),
      token: GET_TOKEN(),
    };
  },
  actions: {
    async userLogin(data: LoginForm) {
      //   let result = await reqLogin(data);
      //   console.log("123", result);
      if (data.password === "123456") {
        this.token = "tokenqwertyu";
        // localStorage.setItem("TOKEN", this.token);
        SET_TOKEN(this.token);
        return "ok";
      } else {
        return Promise.reject(new Error("error"));
      }
      console.log(this.token);
    },
  },
  getters: {},
});

export default useUserStore;
