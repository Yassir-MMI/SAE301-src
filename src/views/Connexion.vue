<script setup>
import SignIn from "../components/SignIn.vue";
import PocketBase from "pocketbase";
/*var pocketbase_ip = "";
if (import.meta.env.MODE === "production")
    pocketbase_ip = "http://tavue.yassirodh.fr:80"; 
else pocketbase_ip = "http://127.0.0.1:8090";
const pb = new PocketBase(pocketbase_ip);

*/
const pb = new PocketBase(import.meta.env.VITE_URL_POCKETBASE);
var connected = false;
</script>

<template>
    <div class="background-image"></div>
    <div class="login container" id="signOut" style="text-align: center;">
      <div class="card">
        <h1 class="Title">Inscription</h1>

        <label class="label-1">Nom d'utilisateur : </label><br />
        <input 
          style="margin-bottom: 2vh;"
          type="text" 
          required 
          id="username"
          placeholder="nom d'utilisateur"
          class="login-input" />
          <br />

        <label class="label-1">Adresse mail : </label><br />
        <input
          style="margin-bottom: 2vh;"
          type="email"
          required
          id="email"
          placeholder="email"
          class="login-input"
        /><br />

        <label class="label-1">Mot de passe : </label><br />
        <input 
          style="margin-bottom: 2vh;"
          type="password" 
          required 
          id="passwd"
          placeholder="Mot de passe"
          class="login-input" />
          <br />

        <button class="login-btn round-button" style="margin-left: 1vh;" v-on:click="register()">S'inscrire</button>

        <button class="login-btn round-button" style="margin-left: 1vh;" v-on:click="loginGithub()">Se connecter avec Github</button>
        <p><label id="status"> Vous n'etes pas connecté </label><br /></p>

        <span id="user-name"></span>
        <span id="user-nom" style="margin-left: 1vh;"></span>
      </div>
    </div>
  </template>


<script>
var connected = false;
var pocketbase_ip = "";
if (import.meta.env.MODE === "production")
pocketbase_ip = "https://tavue.yassirodh.fr";
else pocketbase_ip = "http://127.0.0.1:8090";
const pb = new PocketBase(pocketbase_ip);
var currentUser;
export default {
  methods: {
    //this method allows a new user to sign up the system. Once done, the user receives an email
    //asking for account validation. Once the validation made the user is added to the system
    //this method allows the already registred user to log in the system.
    async register() {
      currentUser = await pb.collection("users").create({
        email: document.getElementById("email").value,
        password: document.getElementById("passwd").value,
        passwordConfirm: document.getElementById("passwd").value,
        username: document.getElementById("username").value,
        name: "John Di",
      });
      if (currentUser) {
        document.getElementById("status").innerHTML =
          "Nous vous avons envoyer un mail de vérifictaion..";
        await pb
          .collection("users")
          .requestVerification(document.getElementById("email").value);
      }
    },
    async googlelogin() {
      await pb.collection("users").authWithOAuth2({ provider: "google" });
      if (pb.authStore.isValid) {
        document.getElementById("status").innerHTML = "You are now logged in";
        connected = true;
        currentUser = pb.authStore.model;
        document.getElementById("signOut").style.visibility = "hidden";
        document.getElementById("addPoem").style.visibility = "visible";
      }
    },
    async loginGithub() {
      await pb.collection("users").authWithOAuth2({ provider: "github" });
      if (pb.authStore.isValid) {
        document.getElementById("status").innerHTML = "You are now logged in Github";
        connected = true;
        currentUser=pb.authStore.model;
      }
    },
    async createPoem() {
      const record = await pb.collection("poems").create({
        title: document.getElementById("title").value,
        content: document.getElementById("content").value,
        private: document.getElementById("notpublic").value,
        email: currentUser.email,
        illustration: document.getElementById("file").files[0],
      });
    },
},
};
</script>

<style scoped>
.Title{
  font-family: 'jost', serif;
  font-weight: lighter;
  margin-bottom: 10%;
}

.login-input {
font-family: 'Jost', sans-serif;
  margin-right: 5px;
  padding: 3px 5px;
  border: 1px solid #000;
  border-radius: 3px;
  outline: none;
  width: 150px;
  transition: border 0.3s;
}

.login-input:hover,
.login-input:focus {
  border: 2px solid rgb(0, 0, 0);
}

.login-btn {
  font-family: 'Jost', sans-serif;
  padding: 3px 5px;
  background: black;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background 0.3s;
}
.login-btn:hover {
  background: #333;
}

.login-container {
        background-color: #f4f4f4;
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
.card {
        background-color: #ffffff;
        padding: 20px;
        border-radius: 12px;
        width: 320px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        margin: 0 auto;
        margin-top: 90px;
        margin-bottom: 140px;
  }

  .label-1 {
    font-family: 'Jost', sans-serif;
    font-size: 15px;
    font-weight: bold;
  }

  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('../assets/eiffel.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    z-index: -1;
    height: 100%;
    margin-top: 100px;
  }
</style>