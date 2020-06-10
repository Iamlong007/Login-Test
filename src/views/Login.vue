<template>
  <div class="loginDiv"> 
      <transition name="fade" mode="out-in">  
    <LoginForm v-if="form"/>  
    <RegisterForm v-if="register"/>
      </transition>
    <button type="button" v-if="reg" class="regBt" @click="(form=!form), (register=!register), (reg=!reg),(sign=!sign)">New? Register Now</button>
    <button type="button" v-if="sign" class="regBt" @click="(form=!form), (register=!register), (reg=!reg),(sign=!sign)">Already registered? Sign In</button>
    </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';
import RegisterForm from '@/components/RegisterForm.vue';
export default {
    name:'Login',
    components:{LoginForm, RegisterForm},
    data(){
        return{
            form:true,
            register:false,
            sign:false,
            reg:true
        }
    }

}
</script>

<style scoped>
    .loginDiv{
    width: 27%;
    height: 470px;  
    background-color: #42b983;
    display: block;
    margin: auto;
    margin-top: 77px;
    border-radius: 10px;
    box-shadow: 1px 1px 8px #42b983;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.regBt{
    margin-top: 20px;
    font-family: cursive;
    background: inherit;
    border: 0px;
    color: #fff2ff;
    cursor: pointer;
    font-weight: 700;
}
</style>