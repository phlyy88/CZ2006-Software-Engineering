<template>
  <div>
    <h1>View your plans</h1>
    <div id="plans">
      <b-container>
        <b-card-group deck>
          <div id="Plan_1">
            <b-card
              title="Plan 1"
              tag="article"
              style="width: 20rem"
              class="mb-2"
              image-top
            >
              <b-list-group flush>
                <b-list-group-item>Housing Choice</b-list-group-item>
                <b-list-group-item>VehicleChoice</b-list-group-item>
                <b-list-group-item>ChildcareChoice</b-list-group-item>
              </b-list-group>

              <b-button href="/plan/1" variant="outline-primary"
                >View Plan</b-button
              >
            </b-card>
          </div>

          <div id="Plan_2">
            <b-card
              title="Plan 2"
              tag="article"
              style="width: 20rem"
              class="mb-2"
              image-top
            >
              <b-list-group flush>
                <b-list-group-item>
                    Housing Choice
                    <br>
                    Display info
                </b-list-group-item>
                <b-list-group-item>VehicleChoice</b-list-group-item>
                <b-list-group-item>ChildcareChoice</b-list-group-item>
              </b-list-group>

              <b-button href="/plan/2" variant="outline-primary"
                >View Plan</b-button
              >
            </b-card>
          </div>

          <div id="Plan_3">
            <b-card title="Plan 3" style="width: 20rem" class="mb-2" image-top>
              <b-list-group flush>
                <b-list-group-item>Housing Choice</b-list-group-item>
                <b-list-group-item>VehicleChoice</b-list-group-item>
                <b-list-group-item>ChildcareChoice</b-list-group-item>
              </b-list-group>

              <b-button href="/plan/3" variant="outline-primary"
                >View Plan</b-button
              >
            </b-card>
          </div>
        </b-card-group>
      </b-container>
    </div>
  </div>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";
export default {
    data(){
        return{
            user: null,
            housing:null,
            vehicle: null,
            childcare: null
        }
    },
    methods: {
        etPlansDetails() {
      let token = localStorage.getItem("jwt");
      let decoded = VueJwtDecode.decode(token);
      this.user = decoded;
    }
    },
    mounted(){

    }
};
</script>