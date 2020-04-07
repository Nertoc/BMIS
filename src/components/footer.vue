<template>
  <div>
    <b-container class="text-left footercont" fluid="true">
        <b-container>
      <b-row class="footerlist">
        <b-col sm="2">
          <h5 class="title">Book Me In Scotty</h5>
        </b-col>
        <b-col sm="3">
          <h5 class="title">Links</h5>
          <ul>
            <li class="list-unstyled"><a href="#!">Link 1</a></li>
            <li class="list-unstyled"><a href="#!">Link 2</a></li>
            <li class="list-unstyled"><a href="#!">Link 3</a></li>
            <li class="list-unstyled"><a href="#!">Link 4</a></li>
          </ul>
        </b-col>
        <b-col sm="3">
          <h5 class="title">Links</h5>
          <ul>
            <li class="list-unstyled"><a href="#!">Link 1</a></li>
            <li class="list-unstyled"><a href="#!">Link 2</a></li>
            <li class="list-unstyled"><a href="#!">Link 3</a></li>
            <li class="list-unstyled"><a href="#!">Link 4</a></li>
          </ul>
        </b-col>
                <b-col sm="3">
          <h5 class="title">Links</h5>
          <ul>
            <li class="list-unstyled"><a href="#!">Link 1</a></li>
            <li class="list-unstyled"><a href="#!">Link 2</a></li>
            <li class="list-unstyled"><a href="#!">Link 3</a></li>
            <li class="list-unstyled"><a href="#!">Link 4</a></li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
    <div>
      <b-container fluid class="footercont">
          
        <b-row>
          <b-col class="copyright">
            <p class="copytext">&copy; 2020 Copyright:
            <a href="https://www.bookmeinscotty.com"> bookmeinscotty.com </a></p>
          </b-col>
        </b-row>
      </b-container>
    </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "footer"
};
</script>

<style lang="scss" scoped>
.title {
  margin-top: 50px;
}
.footercont {
  color: white;
  background-color: rgb(19, 19, 61);
  
}
.copytext {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.copyright {
    height: 70px;
}
 .footerlist {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

</style>
