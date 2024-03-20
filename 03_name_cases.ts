let personName :string = '';

personName = prompt('what is your name?') || '';

let lowercase   :string = personName.toLowerCase();
let UpperCase :string = personName.toUpperCase();
let titlecase   :string = personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).
toLowerCase()).join(' ')

if(personName !== null && personName !== ''){
   alert(`Hello ${personName}, Here are your name in :
   LowerCase: ${lowercase}
   UpperCase: ${UpperCase}
   TitleCase: ${titlecase}`)
   }
   else{
    alert('please fill your name !')
   }