<template>
  <div>
    <div class="TopHeader">
      <b-row>
        <b-col>
          <b-navbar toggleable="lg" variant="faded" type="dark">
            <b-col cols="auto">
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
                <b-col cols="auto">
                  <b-button class="loginButton" variant="link">
                    <i class="fas fa-fingerprint"></i>
                    <b-nav-text class="loginText">
                      login
                    </b-nav-text>
                  </b-button>
                </b-col>
                <b-col cols="auto">
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
                <b-col cols="auto">
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
.subHeading {
  float: left;
}
.fa-globe {
  padding-top: 11px;
  padding-right: 0px;
}
.fa-fingerprint {
  padding-right: 10px;
  padding-top: 15px;
}
.loginButton {
  width: 110px;
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
</style>
