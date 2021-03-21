import Api from '@/services/Api'

export default{
    displayVehicleListing(vehicle_data){
        return Api().post('vehicleListing', vehicle_data)
    }
}