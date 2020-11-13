<template lang="pug">
ion-page
  ion-header(:translucent="true")
    ion-toolbar 
      ion-title Blank
  
  ion-content(:fullscreen="true")
    ion-header(collapse="condense")
      ion-toolbar 
        ion-title(size="large") Blank

    #container
      strong Ready to create an app?
      p Start with Ionic 
        a(target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components") UI 
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
  },
});
</script>

<style scoped lang="scss">
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  strong {
    font-size: 20px;
    line-height: 26px;
  }

  p {
    font-size: 16px;
    line-height: 22px;

    color: #8c8c8c;

    margin: 0;
  }

  a {
    text-decoration: none;
  }
}
</style>
