<template>
 <div class="vue-template" >
        <div class="row"> </div>
            <!-- <div class="col-lg-3 mb-4">
                <h1 class="mt-4">Filters</h1>

                <h3 class="mt-2">Price</h3> -->
                <!-- <div class="form-check" v-for="(price, index) in prices">
                    <input class="form-check-input" type="checkbox" :value="index" :id="'price'+index" v-model="selected.prices">
                    <label class="form-check-label" :for="'price' + index">
                        {{ price.name }} ({{ price.products_count }})
                    </label>
                </div> -->

</template>

<script>
    export default {
        data: function() {
            return {
                price: [],
                // flat_type: [],
                // town: [],
                // remaining_lease: [],
                // floor_area: [],
                // storey_range: [],
                loading: true,
                selected: {
                    price: [],
                    // flat_type: [],
                    // town: [],
                    // remaining_lease: [],
                    // floor_area: [],
                    // storey_range: [],
                }
            }
        },

        mounted() {
            this.loadPrices();
        },

        watch: {
            selected: {
                handler: function() {
                    this.loadPrices();

                },
                deep: true
            }
        },
        methods: {
            loadPrices: function() {
               axios.get('/api/products', {
                        params: this.selected
                    })
                    .then((response) => {
                        this.products = response.data.data;
                        this.loading = false;
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        }
    }
</script>


