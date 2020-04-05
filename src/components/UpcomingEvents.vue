<template>
  <div>
    <b-container>
      <b-row align-h="center" align-v="end" style="height: 200px">
        <b-col cols="4">
          <i class="fas fa-hourglass-half fa-2x"></i>
        </b-col>
        <b-col col="8">
          <h3>Upcoming Events</h3>
        </b-col>
      </b-row>
      <b-row align-v="center">
        <b-col col="sm">
          <b-card no-body style="max-width: 30rem;" align="left">
            <div>
              <div class="overlay">
                <small>upcoming</small>
              </div>
              <div class="overlayDays">
                <small>223 Days</small>
              </div>
              <div class="eventType">
                <small>Free</small>
              </div>
              <b-card-img
                class="eventCardimg"
                src="https://i.imgur.com/qAoPWWO.jpg"
                alt="Conference Meeting"
                top="true"
              >
              </b-card-img>
            </div>
            <b-card-body>
              <a href="#" class="card-link">Start Date</a>
              <small class="line-v">|</small> 
              <a href="#" class="card-link">End Date</a>
              <small class="line-v">|</small>
              <a href="#" class="card-link">Location</a>
            </b-card-body>
            <b-card-body
              title="Global Marketing Conference"
              class="Card-text"
              title-tag="h5"
              sub-title="Event Company"
            >
            </b-card-body>
            <b-card-footer>Business Seminars</b-card-footer>
          </b-card>
        </b-col>
        <b-col col="sm">
          <b-card no-body style="max-width: 30rem;" align="left">
            <div>
              <div class="overlay">
                <small>upcoming</small>
              </div>
              <div class="overlayDays">
                <small>223 Days</small>
              </div>
              <div class="eventType">
                <small>Free</small>
              </div>
              <b-card-img
                class="eventCardimg"
                src="https://i.imgur.com/qAoPWWO.jpg"
                alt="Conference Meeting"
                top="true"
              >
              </b-card-img>
            </div>
            <b-card-body>
              <a href="#" class="card-link">Start Date</a>
              <small class="line-v">|</small> 
              <a href="#" class="card-link">End Date</a>
              <small class="line-v">|</small>
              <a href="#" class="card-link">Location</a>
            </b-card-body>
            <b-card-body
              title="Global Marketing Conference"
              class="Card-text"
              title-tag="h5"
              sub-title="Event Company"
            >
            </b-card-body>
            <b-card-footer>Business Seminars</b-card-footer>
          </b-card>
        </b-col>
        <b-col col-sm="6">
          <b-card no-body style="max-width: 30rem;" align="left">
            <div>
              <div class="overlay">
                <small>upcoming</small>
              </div>
              <div class="overlayDays">
                <small>223 Days</small>
              </div>
              <div class="eventType">
                <small>Free</small>
              </div>
              <b-card-img
                class="eventCardimg"
                src="https://i.imgur.com/qAoPWWO.jpg"
                alt="Conference Meeting"
                top="true"
              >
              </b-card-img>
            </div>
            <b-card-body>
              <a href="#" class="card-link">Start Date</a>
              <small class="line-v">|</small> 
              <a href="#" class="card-link">End Date</a>
              <small class="line-v">|</small>
              <a href="#" class="card-link">Location</a>
            </b-card-body>
            <b-card-body
              title="Global Marketing Conference"
              class="Card-text"
              title-tag="h5"
              sub-title="Event Company"
            >
            </b-card-body>
            <b-card-footer>Business Seminars</b-card-footer>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "upcomingEvents"
  };
</script>

<style lang="scss" scoped>
.eventCardimg {
    width: 100%;
    height: 25vw;
    object-fit: cover;
}
.card-link {
    font-size: 0.8rem;
}
.line-v {
    padding-left: 10px;
    padding-right: 10px;
}
.overlay {
  position: absolute;
  right: 0px;
  top: 10px;
  background-color: rgba($color: midnightblue, $alpha: .80);
  color: white;
  width: 80px;
  text-align: center;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 0px;
  border-top-left-radius: 5px;
}
.overlayDays {
  position: absolute;
  right: 0px;
  top: 34px;
  background-color: rgba($color: purple, $alpha: .80);
  color: white;
  width: 80px;
  text-align: center;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 5px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 15px;
}
.eventType {
    position: absolute;
    left: 0px;
    bottom: 210px;
    background-color: rgb(106, 182, 207);
    color: white;
    width: 60px;
    text-align: center;
    padding-left: 5px;
    padding-right: 5px;
    padding-bottom: 5px;
    border-top-right-radius: 15px;
}
</style>