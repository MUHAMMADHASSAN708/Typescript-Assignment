
let magician : string[] = ['Harry Porter', 'Hermione Granger', 'Ron Measley','Albus Dumbledore'];

function show_magicians(magicians: string[]){

    magicians.forEach(element => {
        console.log(element);
    });
}


show_magicians(magician);