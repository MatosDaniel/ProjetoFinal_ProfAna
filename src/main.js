import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDQuzgksk4GoJjXryGCdGgFXC0S-9npTbk",
    authDomain: "projeto1-63fcc.firebaseapp.com",
    projectId: "projeto1-63fcc",
    storageBucket: "projeto1-63fcc.appspot.com",
    messagingSenderId: "508555394662",
    appId: "1:508555394662:web:d4c381290a88fbfcde37a7"
};

firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
