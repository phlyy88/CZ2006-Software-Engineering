<template>
  <div class="vertical-center">
    <div class="inner-block">
      <h2>Email : {{ childcareArray }}</h2>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        childcareArray: {}
      }
    },
    methods: {
       async getChildcareDetails() {
            try {
                this.childcareArray = await this.$http.get('childcare')
            } catch (err) {
                let error = err.response
                if (error.status == 409) {
                    this.$swal("Error", error.data.message, "error")
                } else {
                    this.$swal("Error", error.data.err.message, "error")
                }
            }
        } 
    },
    mounted() {
      this.getChildcareDetails();
    }
  }
</script>