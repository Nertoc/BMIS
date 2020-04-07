<template>
  <div>
    <b-container>
      <b-row align-h="center" style="height: 200px" align-v="end">
        <b-col cols="auto">
          <h4 class="subtitle">How To Host Your Event</h4>
        </b-col>
      </b-row>
      <b-row align-h="center" align-v="start">
        <b-col cols="auto">
          <h2 class="title"><b>Event Management Life-cycle</b></h2>
        </b-col>
      </b-row>
      <b-row cols="1" cols-md="2" cols-lg="4" align-h="center" align-v="center">
        <b-col class="icons" cols="auto">
          <i class="fas fa-calendar-alt fa-4x"></i>
          <H3>1. plan the event event</H3>
          <h6>From idea to action plan</h6>
        </b-col>
        <b-col class="icons" cols="auto">
          <i class="fas fa-ticket-alt fa-4x"></i>
          <h3>2. Organise the event</h3>
          <h6>From action plan to execution</h6>
        </b-col>
        <b-col class="icons" cols="auto">
          <i class="fas fa-walking fa-4x"></i>
          <h3>3. Promote the event</h3>
          <h6>Spreading the word and selling tickets</h6>
        </b-col>
        <b-col class="icons" cols="auto">
          <i class="fas fa-hotel fa-4x"></i>
          <h3>4. Host the event event</h3>
          <h6>Host your event and collect feedback</h6>
        </b-col>
      </b-row>
            <b-row style="height: 100px">
        </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "manageEvents"
};
</script>

<style lang="scss" scoped>
.title {
  color: rgb(17, 17, 71);
  padding-bottom: 20px;
}
.icons {
  padding-top: 20px;
  padding-bottom: 10px;
}
</style>
