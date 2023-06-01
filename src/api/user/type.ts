//  登录接口需要携带参数 ts 类型
export interface LoginForm {
  username: string;
  password: string;
}

interface dataType {
  token: string;
}

// 登录接口返回数据类型
export interface loginResponseData {
  code: number;
  data: {
    token: dataType;
  };
}

interface userInfo {
  userId: number;
  avatar: string;
  desc: string;
  roles: string[];
  token: string[];
}

interface user {
  checkUser: userInfo;
}

// 定义服务器返回用户信息相关的数据类型
export interface userResponseDate {
  code: number;
  data: user;
}
