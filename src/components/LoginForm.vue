<template>
  <div>
    <div class="formCont">
      <h2>Welcome</h2>
      <form action="">
        <span class="user"
          ><Icon name="user" :width="18" :height="18" class="userIcon" />
          <input
            type="text"
            placeholder="Enter User ID"
            v-model="userId"
            class="userInput"
        /></span>
        <span class="password"
          ><Icon name="lock" :width="18" :height="18" class="userIcon" />
          <input
            :type="showpassword ? 'text' : 'password'"
            placeholder="Enter Password"
            v-model="password"
            class="passInput" /><button
            @click="showpassword = !showpassword"
            type="button"
            class="button"
          >
            <Icon
              :name="showpassword ? 'eye' : 'eye-off'"
              :width="18"
              :height="18"
              class="userIcon"
            /></button
        ></span>
        <button class="loginBt">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon.vue";
export default {
  name: "LoginForm",
  components: { Icon },
  data() {
    return {
      showpassword: false,
      userId: "",
      password: "",
    };
  },
};
</script>

<style scoped>
form {
  margin-top: 140px;
}
.formCont {
  width: 80%;
  margin: auto;
}

h2 {
  font-family: cursive;
  color: #fff2ff;
  text-align: center;
  padding-top: 22px;
}
.user {
  width: 100%;
  border-bottom: 1px solid #fff2ff;
  display: flex;
}
.userIcon {
  color: #fff2ff;
}
.userInput {
  width: 90%;
  border: 0px;
  background-color: inherit;
  height: 19px;
  color: #fff2ff;
}
input::placeholder {
  color: #dbd4db;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;
  font-weight: 500;
}
.userInput:focus {
  border: 1px solid white;
  background-color: inherit;
  color: #fff2ff;
}
.password {
  width: 100%;
  margin-top: 40px;
  border-bottom: 1px solid #fff2ff;
  display: flex;
}
.passInput {
  width: 99%;
  border: 0px;
  background-color: inherit;
  height: 19px;
  color: #fff2ff;
}
.button {
  background-color: inherit;
  border: 0px;
  cursor: pointer;
}

.loginBt {
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 0px;
  color: #42b983;
  font-weight: bold;
  margin-top: 28px;
  cursor: pointer;
  font-size: 14px;
}
.loginBt:hover {
  transform: scale(1.02);
  transition: 0.2s;
}
</style>
