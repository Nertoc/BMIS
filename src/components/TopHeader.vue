<template>
<div class="bgImage">
  <b-container>
  <div class="TopHeader">
    <b-row>
      <b-col>
        <b-navbar toggleable="lg" variant="faded" type="dark">
          <b-col>
            <i class="fas fa-ticket-alt fa-3x"></i>
          </b-col>
          <b-col>
            <b-navbar-brand class="Title">
              <b class="h3">Book Me In Scotty</b>
              <div>
                <small class="subHeading">Host and Share Events!</small>
              </div>
            </b-navbar-brand>
          </b-col>
          <b-col>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          </b-col>
          <b-collapse class="nav-text-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <b-col>
                <b-button class="loginButton" size="sm" variant="link">
                  <i class="fas fa-fingerprint"></i>
                  <b-nav-text class="loginText">
                    login
                  </b-nav-text>
                </b-button>
              </b-col>
              <b-col>
                <b-nav-item-dropdown>
                  <template v-slot:button-content>
                    <i class="fas fa-globe fa-1x"></i>
                    English
                  </template>
                  <b-dropdown-item href="#">EN</b-dropdown-item>
                  <b-dropdown-item href="#">GR</b-dropdown-item>
                  <b-dropdown-item href="#">RU</b-dropdown-item>
                  <b-dropdown-item href="#">FA</b-dropdown-item>
                </b-nav-item-dropdown>
              </b-col>
              <b-col>
                <b-button class="browseEvents" size="sm">
                  Browse Events
                </b-button>
              </b-col>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </b-col>
    </b-row>
  </div>
  </b-container>
  <b-container>
    <b-row align-h="start" align-v="center">
      <b-col cols="10">
        <h1 class="title" >Book Me In Scotty</h1>
      </b-col>
      <b-col cols="2">
        </b-col>
    </b-row>
        <b-row aligh-h="start">
      <b-col cols="10">
        <h2 class="text-left"><strong>Organize, Host and Share your Events</strong></h2>
      </b-col>
      <b-col cols="1">
        </b-col>
    </b-row>
          <b-row class="btnRow">     
      <b-button variant="light" class="btnIndi">
        <i class="fas fa-users"></i>
        For Individuals
        </b-button>
      <b-button variant="success" class="btnBus">
        <i class="fas fa-shopping-cart"></i>
        For Business
        </b-button>
      <b-button variant="light">Docs</b-button>
    </b-row>
  </b-container>
  </div>
</template>

<script>
export default {
  name: "TopHeader"
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+HK:wght@100;300;400;500;700;900&display=swap");

.Title {
  color: white;
}
.title {
  font-family: "Noto Sans HK" "sans-serif";
  color: orange;
  font-size: 80px;
  padding-top: 80px;
  text-align: left;
  }
  .text-left {
    font-family: "Noto Sans HK" "sans-serif";
    color: white;
    font-size: 90px;
  }
.subHeading {
  float: left;
}
.fa-globe {
  padding-top: 0px;
  padding-right: 0px;
}
.fa-fingerprint {
  padding-right: 10px;
  padding-top: 15px;
}
.loginButton {
  width: 95px;
  background-color: transparent;
}
.loginText {
  float: right;
}
.browseEvents {
  width: 150px;
  padding-top: 15px;
  padding-bottom: 15px;
  float: right;
  background-color: palevioletred;
  border-color: transparent;
}
.bgImage {
  background-image: url("https://i.imgur.com/etg5hVx.jpg");
  height: 1100px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.btnRow {
  padding-top: 60px;
  padding-bottom: 60px;
}
.btnIndi {
  width: 250px;
  color: rgba(1, 90, 255, 0.87);
  border-width: 10px;
  border-color: transparent;
  margin-right: 10px;
}
.btnBus {
  width: 230px;
  color: white;
  border-width: 10px;
  border-color: transparent;
  margin-right: 10px;
}

</style>
