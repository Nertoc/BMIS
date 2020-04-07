<template>
  <div>
    <b-container>
      <b-row style="width: 110%" align-h="centre">
        <b-col>
          <b-navbar toggleable="xl" variant="faded" type="dark">
            <i class="fas fa-ticket-alt fa-3x"></i>
            <b-navbar-brand class="Title">
              <b class="h3">BMIS</b>
              <div>
                <small class="subHeading"></small>
              </div>
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav class="ml-auto">
                <b-button class="loginButton" variant="link">
                  <i class="fas fa-fingerprint"></i>
                  <b-nav-text class="loginText">
                    login
                  </b-nav-text>
                </b-button>
                <b-nav-item-dropdown class="langBut">
                  <template v-slot:button-content>
                    <i class="fas fa-globe fa-1x"></i>
                    English
                  </template>
                  <b-dropdown-item href="#">EN</b-dropdown-item>
                  <b-dropdown-item href="#">GR</b-dropdown-item>
                  <b-dropdown-item href="#">RU</b-dropdown-item>
                  <b-dropdown-item href="#">FA</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-button class="browseEvents" size="sm">
                  Browse Events
                </b-button>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </b-col>
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
  padding: 20px;
}
.fa-ticket {
  float: left;
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
  margin-right: 20px;
}
.langBut {
  margin-right: 20px;
}
.loginText {
  float: right;
  

}
.browseEvents {
  width: 175px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
  text-align: center;
  background-color: palevioletred;
  border-color: transparent;
  margin-top: 5px;
}
</style>
