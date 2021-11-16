function addCommas(numbers) {
    //Convert to string
    let strNum = numbers.toString()

    //Split into array
    let strArr = strNum.split('')

    //Create final output string and counter
    let number = "";
    let counter = 0

    //return strNum if less than or equal to 3 numbers
    if (strNum.length <= 3) {return strNum}

    //Loop through number array in reverse, store values in number string, add to counter
    for(let i= strArr.length - 1; i>=0; i--)
    {
        number += strArr[i];
        counter++

        //If counter divisible by 3  and index is not zero, add comma to number string
        if(counter % 3 == 0  && i!= 0) {number += ','}

    }
    //Split number back into array, reverse, join back into string return
     let arrStr = number.split('')
     let reverseArr = arrStr.reverse()

     let joinedArr = reverseArr.join('')

     return joinedArr
}

console.log(addCommas(1000))








module.exports = addCommas