<template>
    <footer style="background: #000; height: 210px;" >
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <!-- Section Lunettes -->
      <div class="footer-section">
        <h3 class="title jost-font" style="text-align: center;">Lunettes</h3>
        <ul class="nav nunito-font">
          <li><router-link to="/personalisation-lunette">Personnalisation de lunette</router-link></li>
          <li><router-link to="/collections">Nos collections</router-link></li>
          <li><router-link to="/boutique">Trouvez une boutique</router-link></li>
        </ul>
      </div>
  
      <!-- Section Notre Histoire -->
      <div class="footer-section">
        <h3 class="title jost-font" style="text-align: center;">Notre Histoire</h3>
        <ul class="nav nunito-font">
          <li><router-link to="/carriere">Carrière</router-link></li>
          <li><router-link to="/presse">Espace presse</router-link></li>
          <li><router-link to="/fondation">Fondation</router-link></li>
        </ul>
      </div>
  
      <!-- Section Service -->
      <div class="footer-section">
        <h3 class="title jost-font" style="text-align: center;">Services</h3>
        <ul class="nav nunito-font">
          <li><router-link to="/maintenance">Service de maintenance</router-link></li>
          <li><router-link to="/contact">Nous contacter</router-link></li>
          <li><router-link to="/faq">FAQ</router-link></li>
        </ul>
      </div>
  
      <!-- Social Media Icons -->
        <div class="social-icons" style="height: auto; width: 20px; margin-right: 20px;">
            <a href="#" target="_blank"><img src="#" alt="Facebook" style="height: auto; width: 30px;"></a>
            <a href="#" target="_blank"><img src="#" alt="Twitter" style="height: auto; width: 30px;"></a>
            <a href="#" target="_blank"><img src="#" alt="YouTube" style="height: auto; width: 30px;"></a>
            <a href="#" target="_blank"><img src="#" alt="LinkedIn" style="height: auto; width: 30px;"></a>
        </div> <!-- src/assets/LinkedIn.svg -->
    </div>
        <div style="display: flex; justify-content: space-between; align-items: center; ">
            <!-- Bottom Navigation -->
            <ul class="bottom-nav raleway-font" style="justify-content: center; text-decoration: none;">
                    <li><router-link to="/conditions">Conditions d’utilisation</router-link></li>
                    <li><router-link to="/mentions">Mentions légales</router-link></li>
                    <li><router-link to="/cookies">Politique des cookies</router-link></li>
                    <li><router-link to="/accessibilite">Accessibilité</router-link></li>
                </ul>

            <!-- Logo -->
            <div class="logo" style=" justify-content: flex-end; margin-right: 90px;">
                <img src="#" alt="TAVUE Logo" style="width: 100px; height: auto; transform: rotate(24.787deg)">
            </div><!-- src/assets/Logo_tavue_2.svg -->
          
        </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "FooterComponent"
  }
  </script>
  
  <style scoped>
  .footer-section {
    display: inline-block;
    vertical-align: top;
    margin-right: 50px;
  }
  .title.jost-font {
    font-family: 'Jost', sans-serif;
    font-weight: 10;
  }
  .nav.nunito-font {
    font-family: 'Nunito', sans-serif;
  }
  
  .logo {
    bottom: 10px;
    right: 10px;
    justify-content: flex-end;
  }
  .bottom-nav.raleway-font {

    bottom: 10px;
    left: 10px;
    font-family: 'Raleway', sans-serif;
    display: flex;
    gap: 20px;
    color: black;
    font-size: 12px;
  }


footer {
    background: #000;
}

footer a {
    text-decoration: none;
    color: white;
}

footer h3, footer h2, footer h3 {
    font-family: 'Jost', sans-serif;
    color: white;
}

footer nav li {
    font-family: 'Nunito', sans-serif;
    color: white;
}

footer .bottom-nav li {
    font-family: 'Raleway', sans-serif;
    color: white;
}

  </style>
  