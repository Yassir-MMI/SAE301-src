<script setup>
// Import éléments de vue
import { ref, onMounted } from 'vue';
// Import éléments de routage
import { useRouter } from 'vue-router';
const router = useRouter()

// Import pocketbase
import PocketBase from 'pocketbase'
// Objet pocketBase
var pocketbase_ip = "";
/*
if (import.meta.env.MODE === "production")
    pocketbase_ip = "http://tavue.yassirodh.fr:80"; 
else pocketbase_ip = "http://127.0.0.1:8090";
const pb = new PocketBase(pocketbase_ip); */
const pb = new PocketBase(import.meta.env.VITE_URL_POCKETBASE);

// user connecté ? au départ faux
let isConnected = ref(false)

// Element de connexion
let user = ref('')
let psw = ref('')

// User connecté
let currentUser = ref(null)
let avatar = ref(null)

// Au montage du composant
onMounted(async () => {
  // Vérifier que le user est déjà connecté
  refresh()

})

const refresh = () => {
  if (pb.authStore.isValid) {
    currentUser.value = pb.authStore.model
    isConnected.value = true

    avatar.value =
      "http://127.0.0.1:8090/api/files/"  // Adresse serveur et repertoire des fichiers image
      + currentUser.value.collectionId     // Id ou name de la collection concernée
      + "/"
      + currentUser.value.id               // Id de l'utilisateur connecté
      + "/"
      + currentUser.value.avatar           // Nom fichier image pocketbase
      + "?thumb=100x100"                   // Taille par défaut     

    //      console.log("image avatar utilisateur", avatar)
  }
}

const connect = async () => {
  try {
    const authData = await pb.collection('users')
      .authWithPassword(user.value, psw.value)
    //    console.log("connecté : ",authData)
    refresh()
  } catch (error) {
    //    console.log("erreur de connexion : ",error.message)
    alert("Erreur d'identification : mauvais login et/ou mot de passe")
    user.value = ""
    psw.value = ""
  }
}

const deconnect = () => {
  // Suppression utilisateur connecté
  pb.authStore.clear()
  isConnected.value = false
  avatar.value = null
  // Retour à la page d'accueil -> Redirection
  router.push({ name: "HomeView" })
}
</script>
<template>
  <header style="background: #F0FBFF; border: 1px solid #000; display: flex; justify-content: space-between; align-items: center; padding: 10px; height: 70px; padding-right: 70px;">
    <!-- Logo -->
    <RouterLink to="/">
      <img src="@/assets/Logo_tavue.svg" alt="Logo TAVUE" style="width: 250px; height: auto; transform: rotate(24.787deg);"/>
    </RouterLink>
    <!-- Navigation -->
    <nav>
      <RouterLink to="/" class="nav-item">Lunettes</RouterLink>
      <RouterLink to="/Personnalisation" class="nav-item">Configuration</RouterLink>
      <RouterLink to="/Connexion" class="nav-item" style="padding-right: 15px;">Connexion</RouterLink>
    </nav>
    <div class="ml-auto" style="padding-left: 5px;">
      <span v-if="isConnected" style="justify-content: flex-end;">
        <button class="login-btn">
          <i>{{ currentUser.username }}</i>
        </button>
        <button class="login-btn" type="button" @click="deconnect" style="margin-left: 10px;">
          <i class="fa fa-sign-out">Déconnecter</i>
        </button>
      </span>

      <form v-else class="login-form">
        <input placeholder="Login" v-model="user" class="login-input">
        <input placeholder="Password" type="password" v-model="psw" class="login-input">
        <button type="button" class="login-btn" @click.prevent="connect">
          <i class="fa fa-power-off"></i> Connexion
        </button>
      </form>
    </div>
  </header>
</template>


<script>
import { RouterLink } from 'vue-router';

export default {
    name: 'HeaderComponent',
    components: { RouterLink }
};
</script>

<style scoped>
.nav-item {
  margin-right: 80px;
  font-family: 'Jost', sans-serif;
  color: black;
  text-decoration: none;
  padding-bottom: 2px;
  border-bottom: 2px solid transparent;
  transition: border-bottom 0.3s;
}

.nav-item:last-child {
  margin-right: 0;
}

.nav-item:hover {
  border-bottom: 2px solid black;
}

.login-form {
  display: flex;
  align-items: center;
}

.login-input {
  font-family: 'Jost', sans-serif;
  margin-right: 5px;
  padding: 3px 5px;
  border: 1px solid #000;
  border-radius: 3px;
  outline: none;
  width: 90px;
  transition: border 0.3s;
}

.login-input:hover,
.login-input:focus {
  border: 1px solid white;
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

.avatar {
  max-width: 40px;
  margin-right: 5px;
}

.connected-btn {
  font-family: 'Jost', sans-serif;
  padding: 3px 8px;
  margin: 0 3px;
  font-size: 14px;
  transition: background 0.3s;
}

.btn-dark.connected-btn:hover {
  background: #333;
}

</style>

```
