/** This boundary @class implements the 
delete button to remove items from a plan
@author hao zhi  */

<style lang="scss" scoped>

</style>

<template>
    <div>
        <div id="planItems" :key="plan.id" v-for="plan in plans">
            <Plan @delete-plan="$emit('delete-plan', plan.id)" :plan="plan"/> 
        </div>
    </div>
</template>

<script>
import Plan from './Plan'

export default {
    name: 'Plans',
    props: {
        plans: Array,
    },
    components : {
        Plan
    }
}
</script>

<style>

</style>