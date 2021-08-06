var arr = [0,1]

    for (var i =2;i<10;i++){
        arr[i]= arr[i-1] + arr[i-2]
    }
    console.log(arr)


function myFcuntion(number){
    const myArray=[0,1]
        for (var i =2;i<number;i++){
            myArray[i] = myArray[i -1]+ myArray[i -2]
        }
    return myArray
}
var result= myFcuntion(100)
console.log(result)


function myFcuntion(number){
    if (typeof number !='number'){
        return('plz gime me ar number')
    }
    if (number < 2){
        return('plz enter a possitive number and shude be start 2 or < 2')
    }
    const myArray=[0,1]
        for (var i =2;i<number;i++){
            myArray[i] = myArray[i -1]+ myArray[i -2]
        }
    return myArray
}
var result= myFcuntion(4)
console.log(result)