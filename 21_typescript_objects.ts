let person_Name :string = 'Hassan';

const person_Name_Array :string[] = ['person','car','cold Drinks'];

interface person{
    age : number,
    name : string,
    nationality : string,
    student : boolean
}


let person : person = {
    age : 21 ,
    name : 'Hassan' ,
    nationality : 'pakistan' ,
    student : true
}

console.log(person);

interface car {
    maker : string,
    color : string,
    automatic : boolean
}
let car = {
    maker : 'Tesla',
    color : 'Black',
    automactic : true
}

console.log(car);
