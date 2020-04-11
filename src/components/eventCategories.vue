<template>
  <div>
    <b-container>
      <b-row style="height: 200px" cols="1" align-h="center" align-v="end">
        <b-col class="title">
          <h2>Event Categories</h2>
        </b-col>
      </b-row>
      <b-row cols="1" cols-md="1" cols-lg="4" align-content="start">
        <b-col>
          <div class="eventOne">
            <div class="eventOverlay1">
              <h5>Business and Seminars</h5>
            </div>
            <b-img
              fluid
              src="https://picsum.photos/600/300/?images=25"
              alt="Image 1"
              class="eventCardimg"
            >
            </b-img>
          </div>
        </b-col>
        <b-col>
          <div class="eventOne">
            <div class="eventOverlay2">
              <h5>Sports and Fitness</h5>
            </div>
            <b-img
              fluid
              src="https://picsum.photos/600/300/?images=26"
              alt="Image 2"
              class="eventCardimg2"
            ></b-img>
          </div>
        </b-col>
        <b-col>
          <div class="eventOne">
            <div class="eventOverlay3">
              <h5>Music and Concerts</h5>
            </div>
            <b-img
              fluid
              src="https://picsum.photos/600/300/?images=27"
              alt="Image 3"
              class="eventCardimg3"
            ></b-img>
          </div>
        </b-col>
        <b-col>
          <div class="eventOne">
            <div class="eventOverlay4">
              <h5>Food and Drink</h5>
            </div>
            <b-img
              fluid
              src="https://picsum.photos/600/300/?images=28"
              alt="Image 4"
              class="eventCardimg4"
            ></b-img>
          </div>
        </b-col>
      </b-row>
      <b-row style="height: 100px"></b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "eventCategories"
};
</script>

<style lang="scss" scoped>
.title {
  color: white;
}
.eventCardimg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-position: center;
  border-style: solid;
  border-color: orange;
  border-width: 10px;
  border-radius: 10px;
  margin-top: 5%;
  margin-bottom: 10%;
}
.eventCardimg2 {
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-position: center;
  border-style: solid;
  border-color: rgb(230, 167, 108);
  border-width: 10px;
  border-radius: 10px;
  margin-top: 5%;
  margin-bottom: 5%;
}
.eventCardimg3 {
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-position: center;
  border-style: solid;
  border-color: rgb(242, 255, 59);
  border-width: 10px;
  border-radius: 10px;
  margin-top: 5%;
  margin-bottom: 5%;
}
.eventCardimg4 {
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-position: center;
  border-style: solid;
  border-color: rgb(75, 182, 48);
  border-width: 10px;
  border-radius: 10px;
  margin-top: 5%;
  margin-bottom: 10%;
}
.eventOne {
  position: relative;
}
.eventOverlay1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
.eventOverlay2 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
.eventOverlay3 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
.eventOverlay4 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
</style>
