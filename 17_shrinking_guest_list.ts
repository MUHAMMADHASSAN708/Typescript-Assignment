



let Guest_List :string[] = ['AHMED RAZA','SHUJAAT ALI','SHARIM ABBASI' ] ;

// for(let i=0; i<Guest_List.length; i++){

//     console.log('Dear Mr. ' + Guest_List[i] +',\n\nIt is our pleasure to invite you in our party.\n\nThank You!' )


// }
 let absent_Guest :string = 'AHMED RAZA' ;

 let new_Guest :string = 'Hasham Meo' ;

 Guest_List[0] = new_Guest ;
 
//  for(let i=0; i<Guest_List.length; i++){

//     console.log('Dear Mr. ' + Guest_List[i] +',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')

//  }

 console.log(`Mr. ${absent_Guest} is not coming to the party.`);

 console.log('Good News! Me find Big Table so we are inviting 3 more guests.')

 Guest_List.unshift('AYAAN ABBASI');
 Guest_List.splice(2, 0 , 'SAHIL ANSARI');
 Guest_List.push('TANZEL ABBASI');

 for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr. ' + Guest_List[i] +',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
 }

 console.log('\nsorry we can not arrange big table, only Two peoples will be invited.');

 while(Guest_List.length > 2){
   let remove_Guest = Guest_List.pop();
   console.log(`Sorry Mr. ${remove_Guest}, You are not invited for Dinner.`); 
 }

 for(let i=0; i<Guest_List.length; i++){

   console.log('Dear Mr. ' + Guest_List[i] +',\n\nYou are still invited.\n\nThank You!\n\n')
}
Guest_List.splice(0, 2);

console.log(Guest_List);
