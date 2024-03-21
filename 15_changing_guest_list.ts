



let Guest_List :string[] = ['AHMED RAZA','SHUJAAT ALI','SHARIM ABBASI' ] ;

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr. ' + Guest_List[i] +',\n\nIt is our pleasure to invite you in our party.\n\nThank You!' )


}
 let absent_Guest :string = 'AHMED RAZA' ;

 let new_Guest :string = 'Hasham Meo' ;

 Guest_List[0] = new_Guest ;
 
 for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr. ' + Guest_List[i] +',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')

 }

 console.log(`Mr. ${absent_Guest} is not coming to the party.`)