export const getDetails = {
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
            // } else if (type=="housing") {
            //     const grantsBreakdown = await that.$http.post(type.concat("/grantsBreakdown"), that.selectedIncome)
            //     that.grantsBreakdown = grantsBreakdown
            //     that.netCost = costBreakdown.data.cost_object.total_cost - grantsBreakdown.data.grants_object.total_grants
            // }
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
    addFavourites: async function(that) {
        that.selectedOption.cost = that.costBreakdown.data.cost_object
        console.log(that.selectedOption)
        if (that.selectedPlan == 1){
            that.$set(that.user, 'v1', that.selectedOption)
            that.user.type = 'v1'
            console.log(that.user.type)
            that.$http.put('user/update', that.user)
            that.$notify({
                group: 'foo',
                title: 'Added to plan 1!',
                text: that.user.v1.name
                });
            console.log("put done")
        }
        if (that.selectedPlan == 2) {
            that.$set(that.user, 'v2', that.selectedOption)
            that.user.type = 'v2'
            console.log(that.user.type)
            that.$http.put('user/update', that.user)
            that.$notify({
                group: 'foo',
                title: 'Added to plan 2!',
                text: that.user.v2.name
                });
            console.log("put done")
        }
        if (that.selectedPlan == 3) {
            that.$set(that.user, 'v3', that.selectedOption)
            that.user.type = 'v3'
            console.log(that.user.type)
            that.$http.put('user/update', that.user)
            that.$notify({
                group: 'foo',
                title: 'Added to plan 3!',
                text: that.user.v3.name
                });
            console.log("put done")
        }
    }
}