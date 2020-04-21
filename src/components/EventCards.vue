<template>
  <div>
    <b-col>
      <b-card
        no-body
        tag="article"
        style="max-width: 20rem; min-width: 15rem;"
        class="carding"
        align="left"
      >
        <div>
          <div>
            <div class="overlay">
              <small v-text="startDate"></small>
            </div>
            <div class="overlayDays">
              <small v-text="endDate"></small>
            </div>
            <div class="eventType">
              <small v-text="ticketType"></small>
            </div>
          </div>
          <b-card-img
            class="eventCardimg"
            :src="imageURL"
            alt="Conference Meeting"
            top
            style="min-height: 15rem; min-width: 15rem; max-height: 15rem"
          >
          </b-card-img>
        </div>
        <b-card-body>
          <a href="#" class="card-link" v-text="startDate"></a>
          <small class="line-v">|</small>
          <a href="#" class="card-link" v-text="endDate"></a>
          <small class="line-v">|</small>
          <a href="#" class="card-link" v-text="location"></a>
          <b-button
            variant="link"
            class="cardTitle text-left"
            v-b-modal="eventModalId"
          >
            <b-card-title :title="eventName"></b-card-title>
          </b-button>

          <b-card-sub-title v-text="dateCreated"></b-card-sub-title>
        </b-card-body>
        <b-card-footer class="footerTag" v-text="category"></b-card-footer>
        <b-modal :id="eventModalId" centered>
          <template v-slot:modal-header="{ close }">
            <!-- Emulate built in modal header close button action -->
            <h5 v-text="eventName"></h5>
            <b-button size="sm" variant="outline-variant" @click="close()">
              <i class="fas fa-window-close"></i>
            </b-button>
          </template>
          <div>
            <div class="overlay">
              <small v-text="startDate"></small>
            </div>
            <div class="overlayDays">
              <small v-text="endDate"></small>
            </div>
            <div class="eventType">
              <small v-text="ticketType"></small>
            </div>
            <b-img
              class="eventCardimg"
              :src="imageURL"
            ></b-img>
          </div>
          <br />
          <h6 v-text="subTitle"></h6>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
           <template v-slot:modal-footer="{ register }">
            <b class="footertext" v-text="category"></b>
          <!--   Emulate built in modal footer ok and cancel button actions -->
            <b-button size="sm" variant="success" @click="register()">
              register
            </b-button>
          </template>
        </b-modal>
      </b-card>
    </b-col>
  </div>
</template>

<script>
export default {
  props: [
    "eventName",
    "startDate",
    "endDate",
    "location",
    "ticketType",
    "dateCreated",
    "category",
    "imageURL",
    "id",
    "subTitle"
  ],
  computed: {
    eventModalId() {
      return `eventModal-${this.id}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.eventCardimg {
  width: 100%;
  height: 300pxpx;
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
  text-align: center;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 0px;
  border-top-left-radius: 5px;
      width: 30%;
  text-align: right;
}
.overlayDays {
  position: absolute;
  right: 0px;
  top: 44px;
  background-color: rgba($color: purple, $alpha: 0.8);
  color: white;
  text-align: center;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 5px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 15px;
    width: 30%;
  text-align: right;
}
.eventType {
  position: absolute;
  left: 0px;
  top: 25%;
  background-color: rgb(106, 182, 207);
  color: white;
  width: 20%;
  text-align: left;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 5px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
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
.cardTitle {
  margin-left: -15px;
  color: #2c3e50;
}
</style>
