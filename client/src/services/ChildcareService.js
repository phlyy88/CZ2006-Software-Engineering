//handle all requests

import api from './Api'

const url ='http://localhost:8080/childcareListings';

class ChildcareService{
    //Get childcares
    //static -- even with class in method, dn to substantiate childcare object to use
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

    // static getFilter(){
    //     return
    // }
}

export default ChildcareService;