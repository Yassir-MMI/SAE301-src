<script setup>
  import MapOSM from '../components/MapOSM.vue'
</script>
<template>
  <main>
  <div class="home-container">
    <!-- Image de fond -->
    <div class="background-image"></div>

    <!-- Contenu du texte -->
    <div class="text-content">
      <h2 class="title" style="padding-top: 50px;">
        <span class="title-regular">Révélez votre</span><br/>
        <span class="title-thin-italic" style="font-weight: lighter;">Regard</span>
      </h2>
      <p class="description" style="padding-bottom: 80px;">Laissez-vous guider par nos montres de juriste <br> à la pointe de la technologie, offrant un design <br> unique et singulier, tout à votre image.</p>
    </div>

    <!-- Image SVG à droite -->
    <div class="svg-content">
      <img src="../assets/lunettes_svg.svg" alt="Lunette SVG" />
    </div>
  </div>

  <div class="text-content centered-text">
    <p class="nunito-font" style="padding-bottom: 40px;">
      Découvrez l'expérience de personnalisation ultime avec TaVue, la première marque qui vous offre le luxe de créer des lunettes véritablement uniques, <br>fabriquées en France.
    </p>
  </div>

  <div class="svg-with-bg" style="padding-bottom: 40px;">
    <div class="svg-background"></div>
    <img src="../assets/lunettes_svg.svg" alt="Lunette SVG" class="centered-img" />
  </div>
  

  <button class="customize-button centered-button" style="margin-bottom: 40px;">Personnaliser ses lunettes</button>

  <div class="text-content centered-text" >
    <p class="nunito-font" style="margin-bottom: 40px;">
      Nous croyons que chaque visage mérite une paire de lunettes qui reflète son individualité, son style et ses préférences. Avec notre configurateur de produit adapté, <br> vous avez le pouvoir de participer à chaque étape de la création, assurant que chaque détail est à votre goût.
    </p>
  </div>

  <div class="flex-images">
    <div class="white-bg"></div>
    <img src="../assets/lunettes_svg_r.svg" alt="Lunette rouge" style="margin-bottom: 40px; z-index: 3;" />
    <img src="../assets/lunettes_svg_v.svg" alt="Lunette verte" style="margin-bottom: 40px; z-index: 3;"/>
    <img src="../assets/lunettes_svg_vio.svg" alt="Lunette violette" style="margin-bottom: 40px; z-index: 3;"/>
    <img src="../assets/lunettes_svg_j.svg" alt="Lunette jaune" style="margin-bottom: 40px; z-index: 3;"/>
  </div>

  <MapOSM />

  </main>
</template>

<style scoped lang="scss">

main {
  background-color: #F0FBFF;
}
.home-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #F0FBFF;
  position: relative;

  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('../assets/background-accueil.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    z-index: 0;
  }

  .text-content, .svg-content {
    z-index: 1;  
  }
  

  .text-content {
    flex: 1;
    padding-left: 60px; // Ajustez selon vos besoins
    .title {
      font-family: 'Raleway', sans-serif;
      text-align: left;
      .title-regular {
        font-weight: regular;
        font-size: 250%;
      }
      .title-thin-italic {
        font-weight: light;
        font-style: italic;
        font-size: 250%;
      }
    }

    .description {
      font-family: 'Nunito', sans-serif;
      text-align: left;
      font-size: 130%;
    }
  }

  .svg-content {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 20px; // Ajustez selon vos besoins
    img {
      width: auto;
      max-width: 100%;
      height: auto;
    }
  }
}

.svg-with-bg {
  position: relative;
  padding-bottom: 40px;
}

.svg-background {
  position: absolute;
  top: 0%;   /* Ajustez selon vos préférences */
  right: 34%;  /* Ajustez selon vos préférences */
  width: 32%; /* Pour qu'il prenne la même largeur que l'image */
  height: 80px;  /* Ajustez selon vos préférences */
  background-color: white;  /* Pour un fond semi-transparent */
  z-index: 1;
}

.centered-img {
  display: block;
  margin: auto;
}

  .customize-button {
    background-color: #014673;
    border: none;
    padding: 10px 20px;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: darken(#014673, 10%);
    }
  }

  .white-bg {
  position: absolute;
  top: -5%;  /* Ajustez pour décaler légèrement au-dessus des images */
  left: 0;
  width: 100%;
  height: 80px;  /* Hauteur de la bande blanche */
  background-color: white;
  z-index: 2;
}

.flex-images {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px; 
   /* Espace entre les images */
}



    img {
      max-width: 25%; // Ajuster selon le besoin
      height: auto;
      margin: 0 5px;
    }
  

.centered-text {
  text-align: center;
}

.nunito-font {
  font-family: 'Nunito', sans-serif;
}

.centered-img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.centered-button {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px; // Ajustez selon vos besoins
}

.svg-with-bg img {
  position: relative;
  z-index: 1;
}



</style>