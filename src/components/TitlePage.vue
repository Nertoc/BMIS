<template>
  <div>
    <b-container>
      <b-row align-h="start" align-v="center">
        <b-col cols="auto">
          <h1 class="title">Book Me In Scotty</h1>
        </b-col>
        <b-col cols="2"></b-col>
      </b-row>
      <b-row aligh-h="start">
        <b-col cols="auto">
          <h2 class="text-left">
            <strong>Organize, Host and Share your Events</strong>
          </h2>
        </b-col>
        <b-col cols="1"></b-col>
      </b-row>
      <b-row class="btnRow" align-v="center" style="height: 200px" >
        <b-col cols="auto">
        <b-button variant="light" class="btnIndi">
            <i class="fas fa-users"></i>
            For Individuals
          </b-button>
        </b-col>
        <b-col cols="auto">
          <b-button variant="success" class="btnBus">
            <i class="fas fa-shopping-cart"></i>
            For Business
          </b-button>
        </b-col>
        <b-col cols="auto">
          <b-button variant="light" class="btnDoc">
            <i class="fas fa-book"></i>
            Docs
          </b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "titlePage"
}
</script>

<style lang="scss" scoped>
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
.btnIndi {
  width: 250px;
  color: rgba(1, 90, 255, 0.87);
  border-width: 10px;
  border-color: transparent;
}
.btnBus {
  width: 230px;
  color: white;
  border-width: 10px;
  border-color: transparent;
}
.btnDoc {
  width: 125px;
  color: rgba(1, 90, 255, 0.87);
  border-width: 10px;
  border-color: transparent;
}

</style>