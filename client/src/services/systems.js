export const getDetails = {
    /**
     * Get vehicle/housing/childcare details from appropriate database to display on Vue interface 
     * @param {Vue instance} that 
     * @param {String} type
     */
    getDetails: async function(that, type) {
        try {
            let details = await that.$http.get(type)
            that.details = details;
        } catch (err) {
            let error = err.response
            if (error.status == 409) {
                this.$swal("Error", error.data.message, "error")
            } else {
                this.$swal("Error", error.data.err.message, "error")
            }
        } 
    } 
}

export const calculate = {
    /**
     * Depending on what kind of costs/grants should be calculated for vehicle/housing/childcare, the
     * appropriate costs and grants are calculated by posting to specific axios routes
     * @param {Vue instance} that 
     * @param {String} type 
     */
    calculateCost: async function(that, type) {
        try {
            that.isCalculating = true
            that.showPreviousCost = false
            const costBreakdown = await that.$http.post(type.concat("/costBreakdown"), that.selectedOption)
            that.costBreakdown= costBreakdown
            that.selectedOption.cost_object = costBreakdown.data.cost_object 
            if (type=="childcare" || type=="housing") {
                const grantsBreakdown = await that.$http.post(type.concat("/grantsBreakdown"), that.selectedOption)
                that.grantsBreakdown = grantsBreakdown
                that.selectedOption.netCost = costBreakdown.data.cost_object.total_cost - grantsBreakdown.data.grants_object.total_grants
                that.netCost = costBreakdown.data.cost_object.total_cost - grantsBreakdown.data.grants_object.total_grants
                that.selectedOption.grants_object = grantsBreakdown.data.grants_object
            } else {
                that.netCost = costBreakdown.data.cost_object.total_cost
            }  
            that.showPreviousCost = true
            that.isCalculating = false
        } catch (err) {
            let error = err.response
            if (error.status == 409) {
                that.$swal("Error", error.data.message, "error")
            } else {
                that.$swal("Error", error.data.err.message, "error")
            }
        }
    },
}

export const addFavourites = {
    /**
     * Add user favourite depending on which plan the user is on
     * @param {Vue instance} that 
     * @param {string} type
     */
    addFavourites: async function(that, type) {
        that.selectedOption.cost = that.costBreakdown.data.cost_object
        console.log(that.selectedOption)
        if (that.selectedPlan == 1){
            that.$set(that.user, type.concat('1'), that.selectedOption)
            that.user.type = type.concat('1')
            console.log(that.user.type)
            that.$http.put('user/update', that.user)
            that.$notify({
                group: 'foo',
                title: 'Added to plan 1!',
                });
            console.log("put done")
        }
        if (that.selectedPlan == 2) {
            that.$set(that.user, type.concat('2'), that.selectedOption)
            that.user.type = type.concat('2')
            console.log(that.user.type)
            that.$http.put('user/update', that.user)
            that.$notify({
                group: 'foo',
                title: 'Added to plan 2!',
                });
            console.log("put done")
        }
        if (that.selectedPlan == 3) {
            that.$set(that.user, type.concat('3'), that.selectedOption)
            that.user.type = type.concat('3')
            console.log(that.user.type)
            that.$http.put('user/update', that.user)
            that.$notify({
                group: 'foo',
                title: 'Added to plan 3!',
                });
            console.log("put done")
        }
    }
}