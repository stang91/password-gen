var symbol=["\u0021","\u0022","\u0023","\u0024","\u0025","\u0026","\u0027","\u0028","\u0029","\u002A","\u002B","\u002C","\u002D","\u002E","\u002F","\u003A","\u003B","\u003C","\u003D","\u003E","\u003F","\u0040","\u005B","\u005C","\u005D","\u005E","\u005F","\u0060","\u007B","\u007C","\u007D","\u007E",];
var alpha="abcdefghijklmnopqrstuvwxyz".split("");
var alphaCap=alpha.join("").toUpperCase().split("");
var number="1234567890".split("");

function randomCharGen(array){
    var randomIndex=Math.floor(Math.random()*array.length);
    var randomChar=array[randomIndex];
    return randomChar;
};
var lengthP=parseInt(prompt("Enter the length of password:",""));
if(!lengthP||lengthP<8||lengthP>128){
    var lengthP=parseInt(prompt("Password length must be 8-128 characters.  Please input an new length:",""));
} 
 if (lengthP>=8&&lengthP<=128) {
    var lower=confirm("Would you like to use lowercase alphabets in your password?");
    var upper=confirm("Would you like to use uppercase alphabets in your password?");
    var symbolP=confirm("Would you like to use symbols in your password?");
    var numberP=confirm("Would you like to use numbers in your password?");
}
 if(!lower&&!upper&&!symbolP&&!numberP){
    alert("You must confirm at least one of the options");
    var lower=confirm("Would you like to use lowercase alphabets in your password?");
    var upper=confirm("Would you like to use uppercase alphabets in your password?");
    var symbolP=confirm("Would you like to use symbols in your password?");
    var numberP=confirm("Would you like to use numbers in your password?");
}

password=[];
while (password.length<lengthP){
    if(lower&&password.length<lengthP){
        var randomLowCas=randomCharGen(alpha);
        password.push(randomLowCas);
    }
    if(upper&&password.length<lengthP){
        var randomUpCas=randomCharGen(alphaCap);
        password.push(randomUpCas);
    }
    if(symbolP&&password.length<lengthP){
        var randomSym=randomCharGen(symbol);
        password.push(randomSym);
    }
    if(numberP&&password.length<lengthP){
        var randomNumb=randomCharGen(number);
        password.push(randomNumb);
    }
}
var pw= password.join("");
console.log(pw);
document.querySelector("#pwgen").value=pw;