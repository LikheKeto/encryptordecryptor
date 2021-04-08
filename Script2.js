let processp = document.getElementById('processp')
let textInputp = document.getElementById('textInputp')
let outputp = document.getElementById('encryptedp')

processp.addEventListener('click', function(){
    var paragraph= textInputp.value;
    let b= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    let c = b.map(function(x){return x.toUpperCase();});
    let encn  = [];
    let enc = [];
    let bigValues = [];
    let a= 95;
for(let j = 0; j < 26 ; j++ ){
    bigValues[j] = (a* j)% 26;
    console.log(bigValues[j]);
}
    for(let i = 0; i < paragraph.length ; i++){
        let temp = paragraph[i];
            let temp2 = paragraph[i+1];
            let num = Number(parseInt(temp));
            let num2 = Number(parseInt(temp2));
            if(num !== NaN && num2 !== NaN){
            enc[i]= c[bigValues.indexOf((num*10)+num2)];
            }
            if(num!== NaN){
                enc[i] = c[bigValues.indexOf(num)];
            }
    let boolean = b.includes(paragraph[i]);


    if(boolean === true){
        if (b.indexOf(paragraph[i])<5){
        encn[i] = (b.indexOf(paragraph[i]) + 21 );
        enc [i] = b[encn[i]] ;
        }
        else{
            encn[i] = (b.indexOf(paragraph[i]) - 5 ) % 26;
            enc [i] = b[encn[i]] ; 
        }
    }
    if(paragraph[i]==="!","@","#","$"){
        switch (paragraph[i]){
            case paragraph[i]="!":
                enc[i]=" ";
                break;
            case paragraph[i]="@":
                enc[i]=".";
                break;
            case paragraph[i]="$":
                enc[i]=",";
                break;
            case paragraph[i] = "#":
                enc[i] = "?";

        }
    } 

}

    
    let final = enc.join("");
    var outgoing = document.createElement('p');
    outgoing.classList.add("styling");
    outgoing.innerText = final;
    outputp.appendChild(outgoing)
    textInputp.value="";
    
});
