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
        <event-card
          v-for="event in displayEvent"
          :key="event.id"
          :eventName="event.eventName"
          :startDate="event.startDate"
          :endDate="event.endDate"
          :ticketType="event.ticketType"
          :category="event.catergory"
          :subTitle="event.summary"
          :description="event.description"
          :imageURL="event.imageURL"
          :order="event.order"
          :addinfos="event.additionalInfos"
          :dateCreated="event.dateCreated"
          :version="event.version"
          :location="event.location"
          :id="event.id"
        ></event-card>
      </b-row>
      <b-row>
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          first-text="First"
          prev-text="Prev"
          next-text="Next"
          last-text="Last"
          @input="paginate(currentPage)"
        ></b-pagination>
      </b-row>
      <b-row col="1" align-h="center" align-v="center" style="height: 150px">
        <b-col cols="auto">
          <b-button variant="pink" size="lg">
            <i class="fas fa-calendar-day"></i>
            View All Events
          </b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import eventCards from "@/components/EventCards.vue";
import { mapGetters } from "vuex";
export default {
  components: { "event-card": eventCards },
  name: "upcomingEvents",
  computed: {
    ...mapGetters(["event", "displayEvent", "rows"])
  },
  data() {
    return {
      //event: [],
      // displayEvent: [],
      currentPage: 1,
      // rows: 1,
      perPage: 3
    };
  },
  mounted() {
    this.fetchData();
  },

  methods: {
    async fetchData() {
      await this.$store.dispatch("fetchEvent");
      console.log("test", this.$store.getters.event);
      // const res = await fetch("event.json");
      // const val = await res.json();
      // this.event = this.event;
      // this.displayEvent = this.event.slice(0, 3);
      // this.rows = this.event.length;
    },
    paginate(currentPage) {
     // const start = (currentPage - 1) * this.perPage;
     // this.displayEvent = this.event.slice(start, start + 3);
    this.$store.dispatch("paginate", { currentPage, perPage: this.perPage });
    }
  }
};
</script>

<style lang="scss" scoped>
.mb-2 {
  border-radius: 20px;
}
.footertext {
  float: left;
  padding-right: 50px;
}
.subtitle {
  margin-bottom: 3%;
}
</style>
