<template>
  <div id="app">
    <div class="bgImage">
      <TopHeader />
      <titlePage />
    </div>
    <div>
      <upcomingEvents />
    </div>
    <div class="catImg">
      <eventCategories />
    </div>
    <div>
      <manageEvents />
    </div>
    <div>
      <bmisFooter />
    </div>
    <!-- add section above the green inside div containers -->
  </div>
</template>

<script>
import TopHeader from "@/components/TopHeader.vue";
import titlePage from "@/components/TitlePage.vue";
import upcomingEvents from "@/components/UpcomingEvents.vue";
import eventCategories from "@/components/eventCategories.vue";
import manageEvents from "@/components/EventManagement.vue";
import bmisFooter from "@/components/BMISFooter.vue";

export default {
  components: {
    TopHeader,
    titlePage,
    upcomingEvents,
    eventCategories,
    manageEvents,
    bmisFooter
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
  object-fit: cover;
  height: 100%;
}
.catImg {
  background-image: url("./assets/iStock-1181169462.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  height: 100%;
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
