<template>
  <div id="app">
    <b-container class="body" fluid="100%">
    <TopHeader />
    <titlePage />
    </b-container>
  <div>
    
    </div>
  </div>
</template>

<script>
import TopHeader from "@/components/TopHeader.vue";
import titlePage from "@/components/TitlePage.vue";

export default {
  components: {
    TopHeader,
    titlePage
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+HK:wght@100;300;400;500;700;900&display=swap");
#app {
  font-family: "Noto Sans HK", "sans-serif";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 50px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>
