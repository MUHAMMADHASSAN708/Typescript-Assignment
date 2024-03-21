import { features } from "process";

function storeCarInfo(manufacturer: string, modelName: string, ...extraoption: { [key : string]: any } [] ):
object { 

    const carInfo ={
        manufacturer,
        modelName,
        ...Object.assign({}, ...extraoption)
    }

    return carInfo;

};

let answare = storeCarInfo('Honda','Civic', {color:'Black'},{features: ['Navigation', 'power window']})

console.log(answare);