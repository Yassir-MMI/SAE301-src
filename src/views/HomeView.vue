<template>
  <div class="home-container">
    <!-- Image de fond -->
    <div class="background-image"></div>

    <!-- Contenu du texte -->
    <div class="text-content">
      <h2 class="title">
        <span class="title-regular">Révélez votre</span><br/>
        <span class="title-thin-italic">Regard</span>
      </h2>
      <p class="description">Laissez-vous guider par nos montres de juriste à la pointe de la technologie, offrant un design unique et singulier, tout à votre image.</p>
    </div>

    <!-- Image SVG à droite -->
    <div class="svg-content">
      <img src="../assets/lunettes_svg.svg" alt="Lunette SVG" />
    </div>
  </div>

  
</template>

<style scoped lang="scss">
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
      }
      .title-thin-italic {
        font-weight: light;
        font-style: italic;
      }
    }

    .description {
      font-family: 'Nunito', sans-serif;
      text-align: left;
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

    .svg-background {
      position: absolute;
      top: -10px; // Ajuster selon la décalage désiré
      left: -10px;
      right: -10px;
      bottom: -10px;
      background-color: white;
      z-index: -1;
    }
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

  .flex-images {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .white-bg {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: white;
      z-index: -1;
    }

    img {
      max-width: 25%; // Ajuster selon le besoin
      height: auto;
      margin: 0 5px;
    }
  }

</style>

<template>
  <div class="home-container">
    <!-- Image de fond -->
    <div class="background-image"></div>

    <!-- Contenu du texte -->
    <div class="text-content">
      <h2 class="title">
        <span class="title-regular">Révélez votre</span><br/>
        <span class="title-thin-italic">Regard</span>
      </h2>
      <p class="description">Laissez-vous guider par nos montres de juriste à la pointe de la technologie, offrant un design unique et singulier, tout à votre image.</p>

      <!-- Texte additionnel -->
      <p>Découvrez l'expérience de personnalisation ultime avec TaVue, la première marque qui vous offre le luxe de créer des lunettes véritablement uniques, fabriquées en France.</p>
    </div>
      <!-- Image SVG centrée avec rectangle en arrière-plan -->
      <div class="svg-with-bg">
        <div class="svg-background"></div>
        <img src="src/assets/lunette_svg.svg" alt="Lunette SVG" />
      </div>

      <!-- Bouton -->
      <button class="customize-button">Personnaliser ses lunettes</button>

      <!-- Autre texte -->
      <p>Nous croyons que chaque visage mérite une paire de lunettes qui reflète son individualité, son style et ses préférences. Avec notre configurateur de produit adapté, vous avez le pouvoir de participer à chaque étape de la création, assurant que chaque détail est à votre goût.</p>
      
      <!-- Bande avec 4 images SVG -->
      <div class="flex-images">
        <div class="white-bg"></div>
        <img src="src/assets/lunette_svg_r.svg" alt="Lunette rouge" />
        <img src="src/assets/lunette_svg_v.svg" alt="Lunette verte" />
        <img src="src/assets/lunette_svg_vio.svg" alt="Lunette violette" />
        <img src="src/assets/lunette_svg_j.svg" alt="Lunette jaune" />
      </div>
    
  </div>
</template>

