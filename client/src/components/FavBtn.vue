<template>
	<div class="button-div"> 
		<button class="fav-button"> 
			<i class="fa fa-star"></i> 
			<span>Favorites</span> 
		</button> 
	</div>
</template>

<script>
import Childcare from '../../../server/src/models/Childcare.js'
import Vehicle from '../../../server/src/models/Vehicle.js'
import Housing from '../../../server/src/models/Housing.js'
import User from '../../../server/src/models/User.js'

import getUserDetails from './MainPage'
import onRowSelected from './Vehicle'
export default {
    name: 'favBtn',
    props: {
        text: String,
        color: String,
		type: String
    },
	data() {
		return {
			user: User,
			childcare: Childcare,
			vehicle: Vehicle,
			housing: Housing
		}
	},
    methods: {
        onClick() {
            try {
				getUserDetails();
                onRowSelected();
			// if (this.object== user.plan) {
			// 	getHousingDetails;
			// }

            
			} catch (err) {
				let error = err.response
				if (error.status == 409) {
                    this.$swal("Error", error.data.message, "error")
                } else {
                    this.$swal("Error", error.data.err.message, "error")
                }
			}
        },
        colorChange() {
            
        }
    }
}
</script>

<style>
body {
    background-color: #eee
}

* {
    padding: 0;
    margin: 0
}

/* .button-div {
    padding: 60px;
    position: relative
} */

.fav-button {
    border: none;
    height: 40px;
    width: 120px; 
    font-size: 15px;
    background-color: #000;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center
}

.fav-button i {
    /* position: relative;
    left: 0px */
}

.fav-button:active i {
    animation: item 1s ease-in forwards
}

@keyframes item {
    0% {
        top: 20%;
        color: #000
    }

    25% {
        top: 60%;
        color: #000
    }

    50% {
        top: 100%
    }

    75% {
        top: 60%
    }

    0% {
        top: 0%
    }
}
</style>