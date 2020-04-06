<template>
  <div id="app">
    <div class="bgImage">
      <b-container class="body">
        <TopHeader />
        <titlePage />
      </b-container>
    </div>
    <div>
      <b-container>
        <upcomingEvents />
      </b-container>
    </div>
    <div class="catImg">
      <eventCategories />
      </div>
  </div>
</template>

<script>
import TopHeader from "@/components/TopHeader.vue";
import titlePage from "@/components/TitlePage.vue";
import upcomingEvents from "@/components/UpcomingEvents.vue";
import eventCategories from "@/components/eventCategories.vue";

export default {
  components: {
    TopHeader,
    titlePage,
    upcomingEvents,
    eventCategories,
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
}
.catImg {
  background-image: url("https://i.imgur.com/lL0gTxj.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
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
