// String Handling

// 1. Write a js program to find length of a string

let str1 = "Muhammad Hmaza";
let findLength = str1.length;
console.log(findLength);

// 2. Write a js program to copy one string to another string.

// 3. Write a js program to concatenate two strings.

let str2 = "Hello";

console.log(str2 + " " + str1);

// 4. Write a js program to compare two strings.

if(str1 === str2) {
    console.log("Both are equal");
    
}else{
    console.log("Both are not equal");
}

// 5. Write a js program to convert lowercase string to uppercase.

let uperCase = str1.toUpperCase();
console.log(uperCase);

// 6. Write a js program to convert uppercase string to lowercase.

let str3 = "WELCOME TO " + str1;
let lowerCase = str3.toLowerCase();
console.log(lowerCase);


// 7. Write a js program to toggle case of each character of a string.

let myString = "HeLLo, wORlD!";
let toggledString = "";

for (let i = 0; i < myString.length; i++) {
  if (myString[i] === myString[i].toLowerCase()) {
    toggledString += myString[i].toUpperCase();
  } else {
    toggledString += myString[i].toLowerCase();
  }
}

console.log(toggledString); 

// 8. Write a js program to find total number of alphabets, digits or special character in a string.
function countChars(str) {
    let alphaCount = 0;
    let digitCount = 0;
    let specialCount = 0;
  
    for (let i = 0; i < str.length; i++) {
      const char = str.charAt(i);
      if (/[a-zA-Z]/.test(char)) {
        alphaCount++;
      } else if (/\d/.test(char)) {
        digitCount++;
      } else {
        specialCount++;
      }
    }
    console.log(`Alphabets: ${alphaCount}`);
    console.log(`Digits: ${digitCount}`);
    console.log(`Special characters: ${specialCount}`);
  }
  const str = "Hello! 123";
  countChars(str); 
  
  // 10. Write a js program to count total number of words in a string.


let string= "Hello world"

count= string.length
console.log(count);

// 11. Write a js program to find reverse of a string.

const str11 = "Hello World";
const reversedStr = str11.split("").reverse().join("");

console.log(`Reversed string: ${reversedStr}`);

// 12. Write a js program to check whether a string is palindrome or not.

const str12 = "racecar";
const reversedStr1 = str12.split("").reverse().join("");

if (str12 === reversedStr1) {
  console.log(`${str12} is a palindrome`);
} else {
  console.log(`${str12} is not a palindrome`);
}

// 13. Write a js program to reverse order of words in a given string

let string1="Desktop"

 let reversedStr2= string1.split("").reverse().join("")

console.log(reversedStr2);

// 14. Write a js program to find first occurrence of a character in a given string.
const str14 = "Hello World";
const char = "o";

const index = str14.indexOf(char);

if (index !== -1) {
  console.log(`The first occurrence of ${char} is at index ${index}`);
} else {
  console.log(`The character ${char} is not found in the string`);
}

// 15. Write a js program to find last occurrence of a character in a given string.
const str15 = "Hello World";
const char2 = "o";

const index2 = str15.lastIndexOf(char2);

if (index2 !== -1) {
  console.log(`The last occurrence of ${char2} is at index ${index2}`);
} else {
  console.log(`The character ${char2} is not found in the string`);
}

// 16. Write a js program to search all occurrences of a character in given string. 
const str16 = "Hello World";
const char3 = "l";

const indexes = [];
for (let i = 0; i < str16.length; i++) {
  if (str16.charAt(i) === char3) {
    indexes.push(i);
  }
}
if (indexes.length > 0) {
  console.log(`The character ${char} is found at indexes ${indexes}`);
} else {
  console.log(`The character ${char} is not found in the string`);
}

// 17. Write a js program to count occurrences of a character in given string.
const str17 = "Hello World";
const char4 = "l";

const indexes1 = [];
for (let i = 0; i < str17.length; i++) {
  if (str17.charAt(i) === char4) {
    indexes1.push(i);
  }
}
if (indexes1.length > 0) {
  console.log(`The character ${char4} is found at indexes ${indexes1}`);
} else {
  console.log(`The character ${char4} is not found in the string`);
}

// 18. Write a js program to find highest frequency character in a string.
function highestFrequencyChar(str) {
    let charMap = {};
    let maxChar = '';
    let maxCount = 0;
  
    for (let char of str) {
      if (charMap.hasOwnProperty(char)) {
        charMap[char]++;
      } else {
        charMap[char] = 1;
      }
    }
  
    for (let char in charMap) {
      if (charMap[char] > maxCount) {
        maxChar = char;
        maxCount = charMap[char];
      }
    }
  
    return maxChar;
  }
  

  const myString1 = "hello world";
  const result = highestFrequencyChar(myString1);
  console.log(result); 

  // 19. Write a js program to find lowest frequency character in a string.
function lowestFrequencyChar(str) {
    let charMap = {};
    let minChar = str[0];
    let minCount = Infinity;
  
    
    for (let char of str) {
      charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
    }
  
   
    for (let char in charMap) {
      if (charMap[char] < minCount) {
        minChar = char;
        minCount = charMap[char];
      }
    }
  
    return minChar;
  }
  
  
  console.log(lowestFrequencyChar("hello world")); 
  console.log(lowestFrequencyChar("mississippi")); 
  
  // 20. Write a js program to count frequency of each character in a string.
function countCharFrequency(str) {
    let charMap = {};
  
    for (let char of str) {
      charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
    }
  
    return charMap;
  }
  
  console.log(countCharFrequency("hello world")); 
  console.log(countCharFrequency("mississippi")); 
  
  // 21. Write a js program to remove first occurrence of a character from string.
function removeFirstChar(str, char) {
    const index = str.indexOf(char);
  
    if (index !== -1) {
      return str.slice(0, index) + str.slice(index + 1);
    }
  
    return str;
  }
  console.log(removeFirstChar("hello world", "l")); 
  console.log(removeFirstChar("hello world", "x")); 
  
  // 22. Write a js program to remove last occurrence of a character from string.
function removeFirstChar(str, char) {
    const index = str.lastIndexOf(char);
  
    if (index !== -1) {
      return str.slice(0, index) + str.slice(index + 1);
    }
  
    return str;
  }
  console.log(removeFirstChar("hello world", "l")); 
  console.log(removeFirstChar("hello world", "x")); 

  // 23. Write a js program to remove all occurrences of a character from string.
let str23="Aslamu-Alaikum"
let chartoremove="l"
let newstr=""

for (let i =0 ;i < str.length;i++) {
   if(str23[i] !== chartoremove){
    newstr+=str[i]
   }
    
}
console.log(newstr);
  
// 24. Write a js program to remove all repeated characters from a given string.
let str24="hello world"
let chartoremove1="l"
let newstr1=""

for (let i =0 ;i < str24.length;i++) {
   if(str24[i] !== chartoremove1){
    newstr1+=str24[i]
   }
    
}
console.log(newstr1);

// 26. Write a js program to replace last occurrence of a character with another in a string.
let inputStr = 'Hello World';
const charToReplace = 'l';
const charToReplaceWith = 'x';

const index4 = inputStr.lastIndexOf(charToReplace);
if (index4 !== -1) {
  inputStr = inputStr.slice(0, index4) + charToReplaceWith + inputStr.slice(index4 + 1);
}

console.log(inputStr); // Output: 'Hello Worxd'


/////////////// Array Handling ///////////////


// 1. Write a js program to read and print elements of array.
let array=[1,3,5,7,9];

for(let i=0; i<array.length ;i++){
    console.log(array[i]);
}


// 2. Write a js program to print all negative elements in an array.
let array2=[1,-3,4,-5,6,-7]

for(let i=0; i<array2.length;i++){
  if (array2[i]<0) {
    console.log(array2[i]);
  }
}

// 3. Write a js program to find sum of all array elements. 
let array3=[1,2,3,4,5,6,7,8,9]
let sum=0;

for (let i = 0; i< array3.length; i++) {
   
    sum+=array3[i]
}
console.log("sum of arrays are", sum);

// 4. Write a js program to find maximum and minimum element in an array.
let array44=[5,2,8,6,6,1]
let max=array4[0];
let min=array4[0];

for (let i = 0; i < array.length; i++) {
    if (array4[i]>max) {
        max=array4[i]
    }
    else if(array4[i]<min){
        min=array4[i]
    }
}
console.log("maximum is",max ,"and","minimum is",min);

// 5. Write a js program to find second largest element in an array

let arr = [5, 10, 15, 20, 25];
let largest = arr[0];
let secondLargest = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    secondLargest = largest;
    largest = arr[i];
  } else if (arr[i] > secondLargest && arr[i] !== largest) {
    secondLargest = arr[i];
  }
}
console.log(secondLargest); 

// 6. Write a js program to count total number of even and odd elements in an array.
let arr1=[1,2,3,4,5,6,7,8,9]
let even=arr1[0];
let odd=arr1[0];

for (let i = 0; i < arr1.length; i++) {
    
    if(arr1[i]%2==0){
        even++
    }
    else if(arr1[i]%2!==0){
    odd++
    }
}
console.log("number is even",even);
console.log("number is odd",odd);

// 7. Write a js program to count total number of negative elements in an array.
let arr2=[1,-3,5,-9,6,-8,-9,-2,5,7]
let negcount=0;

for (let i = 0; i < arr2.length; i++) {
  if(arr2[i]<0){
    negcount++
  }
    
}
console.log(negcount);

// 8. Write a js program to copy all elements from an array to another array.
let array8=[1,3,5,7,9,10]
let newarray=[]

for (let i = 0; i < array8.length; i++) {
   newarray.push(array8[i])
    
}
console.log(newarray);

// 9. Write a js program to insert an element in an array.
let array9=[5,2,8,6,6,1]
let insertinarray=10;
let index1=4;

array9.splice(index1,0,insertinarray);
console.log(array9);

// 10. Write a js program to delete an element from an array at specified position.
let array10=[1,3,5,7,9,10,13,15]
let indextodelete=7;

array10.splice(indextodelete,1);
console.log(array10);

// 11. Write a js program to count frequency of each element in an array.
let arr11 = [1, 2, 1, 3, 4, 2, 5, 1]; 
let freq = {};

for (let i = 0; i < arr11.length; i++) {
  let element = arr11[i];
  if (freq[element]) {
    freq[element]++;
  } else {
    freq[element] = 1;
  }
}
console.log("Frequency of each element:");
for (let key in freq) {
  console.log(key + " : " + freq[key]);
}

// 12. Write a js program to print all unique elements in the array.
let array12= [1, 2, 1, 3, 4, 2, 5, 1];
let unique=[]

for (let i = 0; i < array12.length; i++) {
    if (unique.indexOf(array12[i])==-1) {
        unique.push(array12[i]);
    }
}
console.log(unique);

// 13. Write a js program to count total number of duplicate elements in an array.
let arr13 = [1, 2, 1, 3, 4, 2, 5, 1]; 
let duplicates = [];
let count = 0;

for (let i = 0; i < arr13.length; i++) {
  if (duplicates.indexOf(arr13[i]) === -1) {
    for (let j = i + 1; j < arr13.length; j++) {
      if (arr13[i] === arr13[j]) {
        duplicates.push(arr13[i]);
        count++;
        break;
      }
    }
  }
}

console.log("Total number of duplicate elements in the array: " , count);

// 14. Write a js program to delete all duplicate elements from an array.
let array14=[1, 2, 1, 3, 4, 2, 5, 1];
let delduplicates=[];

for (let i = 0; i < array14.length; i++) {
    
    if (delduplicates.indexOf(array14[i])==-1) {
        delduplicates.push(array14[i])
    }
}
console.log(delduplicates);

// 15. Write a js program to merge two array to third array.
let arr14=[1,2,4]
let arr15=[3,5,6]
let merge=[];

merge = arr14.concat(arr15);

console.log(merge);

// 16. Write a js program to find reverse of an array.

let array16=[1,2,3,4,5,6,7,8,9];

let reverse=array16.reverse();
console.log(reverse );

// 17. Write a js program to put even and odd elements of array in two separate array.
let array17= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even1=array[0]
let odd1=array[0]
let evenarray=[]
let oddarray=[]

for (let i = 0; i < array17.length; i++) {
   if(array17[i]%2==0){
  
    evenarray.push(array17[i])
   }
   else if(array17[i]%2 !==0){
     
     oddarray.push(array17[i])
 } 
 
}
console.log("the number is even ",evenarray,"the number is odd",oddarray);

// 18. Write a js program to search an element in an array

let array18=[1,2,3,4,5,6]
let elemenettofind=4;

let index5=array18.indexOf(elemenettofind)

if (index5!==-1) {
    console.log("Element found at index ",index5);
} else {
    console.log("element not find");
}

// 19. Write a js program to sort array elements in ascending or descending order.
let array19=[2,1,9,5,6,3,8]

array19.sort(function(a,b){
    return a-b
})
console.log(array19);
array19.sort(function(a,b){
    return b-a
})
console.log(array19);

// 20. Write a js program to sort even and odd elements of array separately.
let array20= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even2=array[0]
let odd2=array[0]
let evenarray1=[]
let oddarray1=[]

for (let i = 0; i < array20.length; i++) {
   if(array20[i]%2==0){
  
    evenarray1.push(array20[i])
   }
   else if(array20[i]%2 !==0){
     
     oddarray1.push(array20[i])
 } 
 
}
evenarray1.sort(function(a,b){
    return a-b
})
console.log(evenarray1);
oddarray1.sort(function(a,b){
    return a-b;
})
console.log(oddarray1)

// 21. Write a js program to left rotate an array.
let array21=[1,2,3,4,5]
let n=3

for (let i = 0; i < n; i++) {
   let temp=array21.shift();
   array21.push(temp);
    
}
console.log(array21);

// 22. Write a js program to right rotate an array.
let arr22 = [1, 2, 3, 4, 5]; 
let n1 = 3; 

for (let i = 0; i < n1; i++) {
  let temp = arr22.pop();
  arr22.unshift(temp);
}

console.log(arr22);
