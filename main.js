// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

const reverseString = (str) => {
//   return str.split('').reverse().join('') part 1

//    let revString = ''; decreasing array
//    for(let i = str.length -1; i >= 0; i-- ) => {
//        revString = revString + str[i]
//    } 
//    return revString

//    let revString = ''; //increasing array
//    for(let i = 0; i <= revString.length -1;  i++ ) => {
//        revString = str[i] + revString 
//    } 
//    return revString

// let revString = ''; for of loop
// for(let char of str){
//     revString = char + revString
// }
// return revString

// let revString = ''; using forEach / high order array method
// str.split('').forEach((char) =>{
//     revString = char + revString
// })
// return revString

// return str.split('').reduce((revString, char)=>{ reduce method
//     return char + revString
// }, '')
}
  
  
  
  // CHALLENGE 2: VALIDATE A PALINDROME
  // Return true if palindrome and false if not
  // ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false
  
  const isPalindrome = (str) => {
    const revString = str.split('').reverse().join('')
    return revString === str 
  }
  
  
  
  // CHALLENGE 3: REVERSE AN INTEGER
  // Return an integer in reverse
  // ex. reverseInt(521) === 125
  
  const reverseInt = (int) => {
      const revString = int.toString().split('').reverse().join('')
      return parseInt(revString) * Math.sign(int)
  }
  
  
  
  // CHALLENGE 4: CAPITALIZE LETTERS
  // Return a string with the first letter of every word capitalized
  // ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
  const capitalizeLetters = (str) => {
    //   const strArr = str.toLowerCase().split(' ');
    //   for(let i = 0; i < strArr.length; i++){
    //       strArr[i] = strArr[i].substring(0,1).toUpperCase() + strArr[i].substring(1)
    //   }
    //   return strArr.join(' ')

    //map high order array method
    // return str.toLowerCase().split(' ').map((word) => {
    //     return word[0].toUpperCase() + word.substring(1)
    // }) .join(' ')

    // return str.replace(/\b[a-z]/gi, (char) => { regex
    //     return char.toUpperCase()
    // })

  }
  
  
  
  // CHALLENGE 5: MAX CHARACTER
  // Return the character that is most common in a string
  // ex. maxCharacter('javascript') == 'a'
  const maxCharacter = (str) => {
      const charMap = {};
      let maxNum = 0; //will be that number 
      let  maxChar = ''; //actual number that has the most occurences 
      str.split('').forEach((char) => { //loop through the string as an array
        // we want to look at each key/value pair in charMap
          if(charMap[char]){ // we want to grab the character 
            //if the character exist add 1 to it 
              charMap[char]++
          } else {
              //if the character doesnt exist add the starting value to 1
              charMap[char] = 1;
          }
      })
      //for in loop allows you to loop in the object
      for(let char in charMap) {
        // debugger;
        if(charMap[char] > maxNum){
            maxNum = charMap[char]
            maxChar = char
        }
      }

      return maxChar
  }
  
  
  
  // CHALLENGE 6: FIZZBUZZ
  // Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
  const fizzBuzz = () => {
      for(let i = 1; i <= 100; i++ ){
       if (i % 3 === 0 && i % 5 === 0 ) {
            console.log('fizzbuzz');
        } else if(i % 3 === 0){
            console.log('fizz');
        } else if (i % 5 === 0) {
                console.log('buzz');
            } else {
            console.log(i);
        }
      }
  }
  
  
  
  // Call const
  const output = fizzBuzz();
  
  console.log(output);

