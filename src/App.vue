<template>
  <div id="app">
    <div class="bgImage">
      <b-container class="body" fluid="100%">
        <TopHeader />
        <titlePage />
      </b-container>
    </div>
    <div>
      <upcomingEvents />
    </div>
  </div>
</template>

<script>
import TopHeader from "@/components/TopHeader.vue";
import titlePage from "@/components/TitlePage.vue";
import upcomingEvents from "@/components/UpcomingEvents.vue";

export default {
  components: {
    TopHeader,
    titlePage,
    upcomingEvents
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+HK:wght@100;300;400;500;700;900&display=swap");
#app {
  font-family: "Noto Sans HK", "sans-serif";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.bgImage {
  background-image: url("https://i.imgur.com/etg5hVx.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: calc(110vh - 60px);
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
