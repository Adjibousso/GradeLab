// let n = 6
// let i =2


// for (i; i<n; i++) 
// {
//     if(n%i ===0 )
//         break;
// }
// if (n==i ) console.log('its a prime number')
//     else  console.log("it's not a prime")


 
//  function isPrime(n){
// if(n<2 ) 

// return `${n} "not a prime number"`;
// for (let i=2 ; i<n; i++) {

//     if(n%i === 0 ) { return `${n} not a prime number`
     
// }
    
    
// };

//    return ` ${n}  is a prime number ` ;
  
// }


// function isPrime(num) 
// {
//     if(num<= 1 ) return false;
//     for (let i=2; i<num; i++){
//         if(num%i ===0){
//             return  `${num} is not a prime number`;
//         }
//     }

//     return `${num} is a prime number`;
//     }
//     isPrime(15)


// 
// let movies = [ "Lupin", "tirailleurs" , "spiderman"] ;
// let movie1 =  movies[0];
// let moviess = ["tom and jerry", "madagascar", "Lion king"]
// let allmovies =[ movies.concat(moviess)];
// console.log(allmovies);
//console.log(movie1); 
//console.log(movies.length);

// let movies = ['Shrek', 'Caddyshack', 'Batman', 'Interstellar', 'Scarface', 'Spaceballs', 'Alien', 'The Count of Monte Cristo'];

// movies.forEach((movie, i) => {
// 	console.log(i + ') ' + movie);
//});


// function computerArea ( wigth, height){
  
//     //let wigth = 5;
//     //let height = 10;

//     return wigth * height;
//     //console.log (computerArea)

// }
//    computerArea(5,5)
//    console.log (computerArea) 

// function users(){
//     ID=[42,57,63,98];
//     Name= ["Bruce","Bob,Blaine", "Bill"];
//     Occupation=["Knight","Fry cook","QUizz Master","Doctor'sassistant"];
//     Age =[41,19,58,26];
// }

const csv = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor`s Assistant,26';
 

//function csvFile( ){
    
    //let csvFileCell = csv.split(",");
    const arObj = [];
    let csvRows = csv.split(`\n`);
    let csvHeaders =csvRows[0].split(",");

    for (var i=1; i< csvRows.length;i++){

        var rowInput =[csvRows[i].split(",")]
        arObj[i] ={};
       
    
    
      
    for (var y =0 ; y<rowInput.length; y++){   

        arObj[i][csvHeaders[y]] = rowInput[y];

        
        console.table (arObj)
        

}
    }
console.log(arObj)



 


    


 