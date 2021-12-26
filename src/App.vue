<template>
  <div>
    <navigation @change-page="goToPage"/>
     <!-- Homepagina -->
    <Homepage
      v-if="page == 'home'"

      @change-page="goToPage"
    />

    <!-- Game -->
    <Gamepage
      v-if="page == 'game'"

      @change-page="goToPage"
    />

    <!-- Ranking -->
    <!-- TAAK AAAH -->
    <Rankingpage
      v-if="page == 'ranking'"

      @change-page="goToPage"
    />

  </div>
</template>

<script>
  // Pages
  import Homepage from "./pages/Homepage.vue";
  import Gamepage from "./pages/Gamepage.vue";
  import Rankingpage from "./pages/Rankingpage.vue";
  import navigation from "./components/navigation.vue";
  
  // App component
  export default {
    name: 'App',
    components: {
      Homepage,
      Gamepage,
      Rankingpage,
      navigation
    },
    data() {
      return {
        page: "home"
      }
    },
    methods: {
      goToPage(page) {
        this.page = page;
      }
    }
  }
</script>

<style lang="scss">
  @import "./scss/style.scss";
</style>