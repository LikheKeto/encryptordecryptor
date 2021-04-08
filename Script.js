let process = document.getElementById('process')
let textInput = document.getElementById('textInput')
let output = document.getElementById('encrypted')

process.addEventListener('click', function(){
    var paragraph= textInput.value;
    let b= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    let c = b.map(function(x){return x.toUpperCase();});
    let encn  = [];
    let enc = [];
    for(let i = 0; i < paragraph.length ; i++){
    let boolean = b.includes(paragraph[i]);
    let boolean2= c.includes(paragraph[i]);
    //let numCheck = Number(paragraph[i]);
    // let num = paragraph.indexOf(toString(paragraph[i]))
    
    if(boolean === true){
      
        encn[i] = (b.indexOf(paragraph[i]) + 5 ) % 26;
        enc [i] = b[encn[i]] ;

        
    }
    
   else if(paragraph[i]===" " , ".","," , "?"){
     switch (paragraph[i]){
         case paragraph[i] = " ":
             enc[i] = "!";
             break;
         case paragraph[i] = ".":
             enc[i] = "@"; 
             break;
         case paragraph[i] = ",":
             enc[i] = "$";
             break;
         case paragraph[i] = "?":
                enc[i] = "#";
     }
    } 
    if (boolean2 === true){
        enc[i] = (c.indexOf(paragraph[i])*95)%26;
}
    /* if(numCheck !== NaN){
        enc[i] = Math.pow(num,2);
    } */
    }
    let final = enc.join("");
    var outgoing = document.createElement('p');
    outgoing.classList.add("styling");
    outgoing.innerText = final;
    output.appendChild(outgoing)
    textInput.value="";
    
});

//I am 5 years old.