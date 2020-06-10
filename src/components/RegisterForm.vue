<template>
  <div>
    <div class="formCont">
      <h2>Create Account</h2>
      <form @submit.prevent>
        <span class="user">
          <Icon name="user" :width="18" :height="18" class="userIcon" />
          <input
            type="text"
            placeholder="Enter Name"
            v-model="name"
            class="userInput"
          />
        </span>
        <span class="age">
          <Icon name="info" :width="18" :height="18" class="userIcon" />
          <input
            type="number"
            placeholder="Enter Age"
            v-model="age"
            maxlength="2"
            max="60"
            min="18"
            class="userInput"
          />
        </span>
        <span class="address">
          <Icon name="home" :width="18" :height="18" class="userIcon" />
          <input
            type="text"
            placeholder="Enter Address"
            v-model="address"
            class="userInput"
          />
        </span>

        <span class="userId">
          <Icon name="user-plus" :width="18" :height="18" class="userIcon" />
          <input
            type="text"
            v-model="userId"
            placeholder="Generate User ID"
            class="passInput"
          />
          <button @click="rndStr(4)" type="button" class="button">
            <Icon name="rotate-cw" :width="18" :height="18" class="userIcon" />
          </button>
        </span>
        <span class="password">
          <Icon name="lock" :width="18" :height="18" class="userIcon" />
          <input
            :type="showpassword ? 'text' : 'password'"
            placeholder="Enter Password"
            v-model="password"
            class="passInput"
          />
          <button
            @click="showpassword = !showpassword"
            type="button"
            class="button"
          >
            <Icon
              :name="showpassword ? 'eye' : 'eye-off'"
              :width="18"
              :height="18"
              class="userIcon"
            />
          </button>
        </span>
        <button class="loginBt" @click="signup">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon.vue";

export default {
  name: "RegisterForm",
  components: { Icon },
  data() {
    return {
      name: "",
      address: "",
      age: "",
      password: "",
      userId: "",
      showpassword: false,
    };
  },
  
  methods: {
    rndStr(len) {
      let num = "";
      let chars = "0123456789";

      for (let i = 0; i < len; i++) {
        num += chars.charAt(Math.floor(Math.random() * chars.length));
        this.userId = "J" + num;
      }
      return num;
    },
    signup() {
     
    
    }
  }
};
</script>

<style scoped>
form {
  margin-top: 80px;
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
.age,
.address,
.userId,
.password {
  width: 100%;
  border-bottom: 1px solid #fff2ff;
  display: flex;
  margin-top: 20px;
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

/* .password{
     width: 100%;
     margin-top: 40px;
    border-bottom: 1px solid #fff2ff;
    display: flex;
} */
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
.regBt {
  margin-top: 20px;
  font-family: cursive;
  background: inherit;
  border: 0px;
  color: #fff2ff;
  cursor: pointer;
  font-weight: 700;
}
</style>
