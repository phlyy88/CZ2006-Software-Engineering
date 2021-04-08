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
            that.costBreakdown= await that.$http.post(type.concat("/costBreakdown"), that.selectedOption)
            if (type=="childcare") {
                that.grantsBreakdown = await that.$http.post(type.concat("/grantsBreakdown"), that.selectedChild)
            } else if (type=="housing") {
                that.grantsBreakdown = await that.$http.post(type.concat("/grantsBreakdown"), that.selectedIncome)
            }
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