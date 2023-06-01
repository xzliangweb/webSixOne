<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form :model="formInline" class="login_form">
          <h1>hello</h1>
          <h2>欢迎学习</h2>
          <el-form-item label="用户名">
            <el-input
              :prefix-icon="User"
              v-model="formInline.username"
              placeholder="用户名"
            />
          </el-form-item>
          <el-form-item label="密码">
            <el-input
              :prefix-icon="Lock"
              v-model="formInline.password"
              placeholder="密码"
              show-password
            />
          </el-form-item>
          <el-form-item>
            <el-button class="log_btn" type="primary" @click="onSubmit"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import { User, Lock } from "@element-plus/icons-vue";
import useUserStore from "@/store/modules/user";
import { useRouter } from "vue-router";
import { ElNotification } from "element-plus";

const useStore = useUserStore();
const $router = useRouter();
const formInline = reactive({
  username: "admin",
  password: "123456",
});

const onSubmit = async () => {
  try {
    await useStore.userLogin(formInline);
    $router.push("/");
    ElNotification({
      type: "success",
      message: "登录成功",
    });
  } catch {
    ElNotification({
      type: "error",
      message: "登录失败",
    });
  }
};
</script>
<style lang="scss" scoped>
.login_container {
  width: 100%;
  height: 100vh;
  background: url("@/assets/images/background.jpg") no-repeat;
  background-size: cover;
  .login_form {
    width: 80%;
    top: 30vh;
    background: url("@/assets/images/login_form.png") no-repeat;
    background-size: cover;
    h1 {
      color: #fff;
      font-size: 40px;
    }
    h2 {
      color: #fff;
      font-size: 30px;
      margin: 20px 20px;
    }
    .log_btn {
      width: 100%;
    }
  }
}
</style>
