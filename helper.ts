import { message } from "./util";
import { RequestOptions } from "./types/axios.ts";
// import userStore from "@/store/user";
import { SUCCESS_CODE, UNLOGIN_CODE } from "./config/const.ts";

export const transform: any = {
  transformRequestHook: (res: any, options: RequestOptions, callback?: Function) => {
    const { isTransformResponse = null, isReturnNativeResponse = null } =
      options || {};
    // 是否返回原生响应头 比如：需要获取响应头时使用该属性
    if (isReturnNativeResponse) {
      return res;
    }
    const { data } = res;
    // 用于页面代码可能需要直接获取code，data，message这些信息时开启
    if (isTransformResponse) {
      return data;
    }

    if (!data) {
      throw new Error("网络崩溃了，请重新刷新页面");
    }
    const { code = 0, body = {}, msg = "请求出错" } = data;
    if (code === SUCCESS_CODE) {
      return body;
    } else if (code === UNLOGIN_CODE) {
      // TODO: 让调用方自动处理
      callback && callback({
        code,
      })
      // token失效，清空数据让用户重新登录
      // userStore.setToken("");
      // localStorage.removeItem(`${CHECK_AUTO_LOGIN}`);
      // userStore.setUserInfo({});
      // userStore.showLoginModal();
      // message.warning({
      //   content: "用户未登录",
      // });
    } else {
      message.error(msg);
      return;
    }
    // throw new Error(msg);
  },
  transformCatchHook: (e: string) => {
    message.error(e);
  },
};

export function isFunction(val: unknown): val is Function {
  return typeof val === "function";
}
export const getUrlParams = (search: string) => {
  const params = new URLSearchParams(search);
  const result: Record<string, string | null> = {};

  // 使用 Array.from 兼容旧环境
  Array.from(params.entries()).forEach(([key, value]) => {
    result[key] = value;
  });

  return result;
};

