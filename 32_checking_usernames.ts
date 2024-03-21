let current_users:string [] = ['AhMed','HaMza','NaZim','AyaAn','ShuJaat'];

let new_users: string[] = ['Bilal','Hamza','Sahil','Tanzel','Zamzam'];

new_users.forEach(newUsername => {
    let lowercase: string = newUsername.toLowerCase();
    if(current_users.map(c_user => c_user.toLowerCase()).includes(lowercase)){
        console.log(`The username ${newUsername} is not available. please write a diffrent username`);
    }
    else{
        console.log(`the username ${newUsername} is available.`)
    }

})