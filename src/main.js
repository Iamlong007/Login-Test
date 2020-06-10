import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
import * as firebase from "firebase";




const firebaseConfig = {
  apiKey: "AIzaSyAxwseoN0KdE_8VhZxE9FcrdJL1h8JzZB0",
  authDomain: "login-app-7739b.firebaseapp.com",
  databaseURL: "https://login-app-7739b.firebaseio.com",
  projectId: "login-app-7739b",
  storageBucket: "login-app-7739b.appspot.com",
  messagingSenderId: "848065122734",
  appId: "1:848065122734:web:35823f30eb06338833f83f",
  measurementId: "G-LHGCENV57S"
};


firebase.initializeApp(firebaseConfig);
firebase.analytics();
Vue.config.productionTip = false

const requireComponent = require.context(
  "./components",
  false,
  /Base[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, "$1"))
  );

  Vue.component(componentName, componentConfig.default || componentConfig);
});



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
