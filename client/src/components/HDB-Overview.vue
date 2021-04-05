<template>
    <div class="vue-template">
        <div class="vertical-center">
            <div class="block1">

                <form>
                    <h1>HDB overview</h1>

                    <div class="form-group">
                        <label>HDB demographics in Singapore</label>
                      <div class="gallery">


                        <img src="https://t3.ftcdn.net/jpg/02/75/65/12/360_F_275651273_pA8pV3zkxxFYJhoJik9a9rB9FDTigKIM.jpg" alt="Forest" width="600" height="400">

                    </div>
                    </div>

                    <router-link to="/hdb-filter"> <button type="submit" class="btn btn-dark btn-lg btn-block">Find your ideal HDB</button></router-link>

                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>

