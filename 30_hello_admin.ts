const userName: string[] = ['admin','Bugs Bunny','Daffy Duck','Sylvester','Tweety'];


userName.forEach(userName => {
    if(userName == 'admin'){
        console.log('Hello admin,would you like to see a status report?')
    }

    else
    {
        console.log(`Hello ${userName}, thank you for logging in again`);
    }
})