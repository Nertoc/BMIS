<template>
  <div>
    <b-container class="text-left footercont" fluid="true">
      <b-container>
        <b-row class="footerlist">
          <b-col sm="2">
            <h5 class="title">Book Me In Scotty</h5>
          </b-col>
          <b-col sm="3">
            <h5 class="title">Useful Links</h5>
            <ul>
              <li class="list-unstyled"><a href="#!">Link 1</a></li>
              <li class="list-unstyled"><a href="#!">Link 2</a></li>
              <li class="list-unstyled"><a href="#!">Link 3</a></li>
              <li class="list-unstyled"><a href="#!">Link 4</a></li>
            </ul>
          </b-col>
          <b-col sm="3">
            <h5 class="title">Contact Us</h5>
            <ul>
              <li class="list-unstyled"><a href="#!">Send us a Message</a></li>
              <li class="list-unstyled">
                85 Golden Street, Darlinghurst ERP 2019, AUSGRE
              </li>
              <li class="list-unstyled">
                <i class="fas fa-envelope"></i>info@bmis.com
              </li>
              <li class="list-unstyled">
                <i class="fas fa-mobile-alt"></i>1800 808 258
              </li>
            </ul>
          </b-col>
          <b-col sm="3">
            <h5 class="title">Our Socials</h5>
            <h6 class="subtitle">find us on our socials</h6>
            <ul class="list-group list-group-horizontal">
              <li class="list-unstyled">
                <a href="#!"><i class="fab fa-facebook-square fa-2x"></i></a>
              </li>
              <li class="list-unstyled">
                <a href="#!"><i class="fab fa-linkedin fa-2x"></i></a>
              </li>
              <li class="list-unstyled">
                <a href="#!"><i class="fab fa-instagram-square fa-2x"></i></a>
              </li>
              <li class="list-unstyled">
                <a href="#!"><i class="fab fa-twitter-square fa-2x"></i></a>
              </li>
            </ul>
          </b-col>
        </b-row>
      </b-container>
      <hr class="horZ" />
      <div>
        <b-container fluid class="footercont">
          <b-row>
            <b-col class="copyright">
              <p class="copytext">
                &copy; 2020 Copyright:
                <a href="https://www.bookmeinscotty.com">
                  bookmeinscotty.com
                </a>
              </p>
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
.fab {
  padding: 10px;
}
.fas {
  padding: 10px;
  padding-left: 0px;
}
.horZ {
  background-color: blanchedalmond;
}
</style>
 <!-- you can  create a seperate SCSS for both within your App.vue file and incorporate all your styling attributes inside there.-->

