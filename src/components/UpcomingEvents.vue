<template>
  <div>
    <b-container>
      <b-row
        align-h="center"
        align-v="end"
        style="height: 200px"
        class="subtitle"
      >
        <b-col cols="auto" align-self="end">
          <i class="fas fa-hourglass-half fa-2x"></i>
        </b-col>
        <b-col cols="auto">
          <h3>Upcoming Events</h3>
        </b-col>
      </b-row>
      <b-row cols="1" cols-md="2" cols-lg="3" align-h="center">
        <b-col>
          <b-card
            no-body="true"
            tag="article"
            style="max-width: 25rem; min-width: 15rem;"
            class="carding"
            align="left"
          >
            <div>
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
              </div>
              <b-card-img
                class="eventCardimg"
                src="https://i.imgur.com/qAoPWWO.jpg"
                alt="Conference Meeting"
                top="true"
                style="min-height: 15rem; min-width: 15rem;"
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
            <b-card-footer class="footerTag">Business Seminars</b-card-footer>
          </b-card>
        </b-col>
        <b-col>
          <b-card
            no-body="true"
            tag="article"
            style="max-width: 25rem; min-width: 15rem;"
            class="carding"
            align="left"
          >
            <div>
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
              </div>
              <b-card-img
                class="eventCardimg"
                src="https://i.imgur.com/qAoPWWO.jpg"
                alt="Conference Meeting"
                top="true"
                style="min-height: 15rem; min-width: 15rem;"
                mx-auto
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
            <b-card-footer class="footerTag">Business Seminars</b-card-footer>
          </b-card>
        </b-col>
        <b-col>
          <b-card
            no-body="true"
            tag="article"
            style="max-width: 25rem; min-width: 15rem;"
            class="carding"
            align="left"
          >
            <div>
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
              </div>
              <b-card-img
                class="eventCardimg"
                src="https://i.imgur.com/qAoPWWO.jpg"
                alt="Conference Meeting"
                top="true"
                style="min-height: 15rem; min-width: 15rem;"
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
            <b-card-footer class="footerTag">Business Seminars</b-card-footer>
          </b-card>
        </b-col>
      </b-row>
      <b-row col="1" align-h="center" align-v="center" style="height: 150px">
        <b-col cols="auto">
          <b-button class="viewEvents">
            <i class="fas fa-calendar-day"></i>
            View All Events
          </b-button>
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
  height: 15vw;
  object-fit: cover;
  background-position: center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
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
  top: 20px;
  background-color: rgba($color: midnightblue, $alpha: 0.8);
  color: white;
  font-size: 17px;
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
  top: 44px;
  background-color: rgba($color: purple, $alpha: 0.8);
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
  top: 211px;
  background-color: rgb(106, 182, 207);
  color: white;
  width: 60px;
  text-align: center;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 5px;
  border-top-right-radius: 15px;
}
.footerTag {
  text-align: center;
}
.mb-2 {
  border-radius: 20px;
}
.carding {
  box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.2), 0 6px 15px 0 rgba(0, 0, 0, 0.19);
  border-radius: 20px;
  margin-bottom: 10%;
}
.viewEvents {
  font-size: 15px;
  padding: 20px;
  padding-left: 30px;
  padding-right: 30px;
  background-color: blueviolet;
}
.fas {
  align-content: center;
}
.subtitle {
  margin-bottom: 30px;
}
</style>
