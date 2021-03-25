/**
 * @class ChildcareService to process requests from ChildcareService.vue 
 * and send to backend
 */
//handle all requests

import api from './Api'

const url ='http://localhost:8080/childcareListings';

class ChildcareService{
    /**Get childcares
    static -- even with class in method, dn to substantiate childcare object to use
    */
   /**
    * 
    * @returns success of action
    */
    static getChildcare(){
        return new Promise((resolve, reject) => {
            try {
                const res = api.get(url);
                const data = res.data;
                resolve(
                    data.map(childcare => ({
                        ...childcare,
                        createdAt: new Date(childcare.createdAt)
                        //map -- high order function to loop through data
                    }))
                );  
            }catch(err){
                reject(err);
            }
        })
    }
}

export default ChildcareService;