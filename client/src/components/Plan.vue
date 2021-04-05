/** This boundary @class implements the 
showing of the different items for each 
of the three plans.

@author hao zhi  */
<template>
    <div class="plan">
        <h3>{{ plan.item }}
            <!-- @slot "Click to delete" button -->
            <button @click="onDelete(plan.id)" style="background:transparent; border:transparent;">
                <i class="fas fa-times"></i>
            </button>
        </h3>
    </div>            
</template>

<script>
export default {
    name: 'Plan',
    props : {
        plan: Object
    },
    methods: {
        onDelete(id) {
            this.$emit('delete-plan', id)
        }
    }
}
</script>

<style>
.fas {
    color: red;
    font-size: 70%;
}
.plan {
    background: rgb(63, 207, 255);
    margin:5px;
    padding: 10px;
    border: 4px solid darkblue;
    border-radius: 25px;
}
</style>