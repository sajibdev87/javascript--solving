let numbers =[34,54,65,6,]
function smallestNumber(arrayData){
    let min =arrayData[0];
    for(i=0; i < arrayData.length; i++){
        const element =arrayData[i];
        if(element < min) {
            min = element;
        }


    }
    return min
}
const result = smallestNumber(numbers)
console.log(result);


const player =['shakib','shomo','sabbir','shakib','miraz','taskin','sabbir'];
function remobeDoblicate( names) {
    const unique =[];

    for(i=0; i < names.length;i++){
        const element =names[i];
        if(unique.indexOf(element) == -1){
            unique.push(element)
        }
    }

    return unique
}

const result1 = remobeDoblicate(player)
console.log(result);


    const player1 =['shakib','shomo','sabbir','shakib','miraz','taskin','sabbir'];
function remobeDoblicate( names) {
    let unique =[];

    for(const item of names){
        console.log(item);
        if(unique.indexOf(item) == -1){
            unique.push(item)
        }
    }
    return unique

}
let result2 = remobeDoblicate(player)
console.log(result2);


const letters = "are you crazy";
function reverseLetter(text) {
    let reverse ='';
    for(const letters of text){
        // console.log(letters);
        reverse = letters+reverse

    }
    return reverse

}
let outpot = reverseLetter(letters)
console.log(outpot);


function addToNumber(one,tow){
    let total = one+tow;
    return total

}
let result3 =addToNumber(33 + 34,76)
console.log(result);




for (i = 1; i <= 50; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('foobar');
    } 
    else if(i % 3 == 0){
        console.log('foo');
    }
    else if(i % 5 == 0){
        console.log('bar');
    }

    else{
        console.log(i);
    }
}


function calcultion(int1,int2){
    let initial = 100;
    const multiply = int1*int2;
    if(initial>multiply){
        console.log(true);
    }
    else if (initial<=multiply){
        console.log(false);
    }
    else{
        console.log('somting error');
    }
  
    }
    calcultion(10,9)
