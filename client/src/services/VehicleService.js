import Api from '../services/Api'

class VehicleService {
    //Get Vehicles
    static getVehicleListing(){
        return new Promise((resolve, reject) => {
            try {
                const res = Api().get('vehicleListing');
                const data = res.data
                resolve(
                    //Loop through data to return another array
                    data.map(vehicle => ({
                        ...vehicle,
                        createdAt: new Date(vehicle.createdAt)
                    }))
                )
            } catch (err) {
                reject(err)
            }
        })
    }

    //Adding Admin to edit data?
    // static addVehicle(data){
    //     return Api().post('addVehicle',{
    //         //data
    //     })
    // }

    // // static removeVehicle(id){
    // //     return Api().delete(`${url}${id}`)
    // // }
}

export default VehicleService;

/* export default{
    displayVehicleListing(vehicle_data){
        return Api().post('vehicleListing', vehicle_data)
    }
} */