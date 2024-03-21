

function makesandwich (item: string[]) {
    console.log('\nMaking your sandwich with:');

    item.forEach(element => console.log("- " + element));

    console.log('Enjoy you sandwich !\n');
}


makesandwich(['Ham','cheese','lettuce']);


makesandwich(['Turkey','Bacon']);


makesandwich(['peanut','butter','jelly']);


