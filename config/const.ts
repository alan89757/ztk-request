export const PROJECT_PREFIX = "aidianzan-h5-market"; // 项目统一前缀

export const CHECK_AUTO_LOGIN = PROJECT_PREFIX + 'CHECK_AUTO_LOGIN'; // 是否自动登录

export const TOKEN_NAME = PROJECT_PREFIX + 'TOKEN'; // 用户token

export const LOGIN_USER_INFO = PROJECT_PREFIX + 'LOGIN_USER_INFO'; // 登录用户信息

export const TARGET_TENANT_ID = 'target-tenant-id'; // 供应商id

// 1000 * 60 * 60 * 24 * 7
export const TOKEN_EXPIRE = 604800000;  // TOKEN-有效期7天

// 1000 * 60 * 60 * 24
export const TOKEN_TEMP_EXPIRE = 86400000;  // TOKEN-有效期24小时

export const ENV_DEV = "dev"; // dev环境
export const ENV_TEST = "test"; // test环境
export const ENV_PROD = "prod"; // prod环境

export const SUCCESS_CODE = 1000; // 成功
export const UNLOGIN_CODE = 1010; // token失效
