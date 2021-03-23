<template>
    <div class="plan">
        <h3>{{ plan.item }}
            <button @click="onDelete(plan.id)">
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
    color: red;}
.plan {
    background: lightblue;
    margin:5px;
    padding: 10px;

}
</style>