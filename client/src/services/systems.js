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
            if (type=="childcare" || type=="housing") {
                const grantsBreakdown = await that.$http.post(type.concat("/grantsBreakdown"), that.selectedOption)
                that.grantsBreakdown = grantsBreakdown
                that.netCost = costBreakdown.data.cost_object.total_cost - grantsBreakdown.data.grants_object.total_grants
            }
            // } else if (type=="housing") {
            //     const grantsBreakdown = await that.$http.post(type.concat("/grantsBreakdown"), that.selectedIncome)
            //     that.grantsBreakdown = grantsBreakdown
            //     that.netCost = costBreakdown.data.cost_object.total_cost - grantsBreakdown.data.grants_object.total_grants
            // }
            that.showPreviousCost = true
            that.isCalculating = false
            console.log(that.costBreakdown)
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