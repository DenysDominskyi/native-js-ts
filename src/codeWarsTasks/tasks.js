// task #1

function getCount(str) {
  const vowels = "aeiou";
  return str.split("").reduce((acc, item) => {
    vowels.includes(item) ? acc++ : acc;
    return acc;
  }, 0);
}

// console.log(getCount('asdasdasdgarewrteargbvnbvbmouip'))

// task #2

function squareDigits(num) {
  const arr = String(num)
    .split("")
    .map((n) => n * n)
    .join("");
  return Number(arr);
}

// console.log(squareDigits(9119))

// task #3

function highAndLow(numbers) {
  const arr = numbers.split(" ").map(Number);
  return `${Math.max(...arr)} ${Math.min(...arr)}`;
}

// console.log(highAndLow("1 9 3 4 -5"))

// task #4

function descendingOrder(n) {
  return parseInt(
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join(""),
    10
  );
}
// console.log(descendingOrder(145263))

// task 5

// function likes(names) {
//     let numberOfNames = names.length
//     if(numberOfNames == 0) {
//         return 'no one likes this'
//     } else if(numberOfNames == 1) {
//         return `${names[0]} likes this`
//     } else if (numberOfNames == 2) {
//         return `${names[0]} and ${names[1]} like this`
//     } else if (numberOfNames === 3) {
//         return `${names[0]}, ${names[1]} and ${names[2]} like this`
//     } else if(numberOfNames > 3) {
//         return `${names[0]}, ${names[1]} and ${numberOfNames - 2} others like this`
//     }
// }
function likes(names) {
  const numberOfNames = names.length;
  const templates = [
    "no one likes this",
    `${names[0]} likes this`,
    `${names[0]} and ${names[1]} like this`,
    `${names[0]}, ${names[1]} and ${names[2]} like this`,
    `${names[0]}, ${names[1]} and ${numberOfNames - 2} others like this`,
  ];
  return templates[Math.min(numberOfNames, 4)];
}

// console.log(likes(["Alex", "Jacob", "Mark", "Max"]))

// task 6
// Get the Middle Character

function getMiddle(s) {
  const mid = Math.floor(s.length / 2);
  return s.length % 2 === 0 ? s.slice(mid - 1, mid + 1) : s.slice(mid, mid + 1);
}

// console.log(getMiddle("middle"))

// task 7
// Multiples of 3 or 5

function solution(number) {
  let result = 0;
  for (let i = 1; i < number; i++) {
    if (!(i % 3 && i % 5)) {
      result += i;
    }
  }
  return result;
}

// task 8
// Create Phone Number

function createPhoneNumber(numbers) {
  return `(${numbers.slice(0, 3).join("")}) ${numbers.slice(3, 6).join("")}-${numbers.slice(6).join("")}`;
}

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) // => returns "(123) 456-7890"

// task 9
// You're a square!

function isSquare(n) {
  if (n < 0) {
    return false;
  }
  const root = Math.sqrt(n);
  return Number.isInteger(root);
}

// task 10
// Sum of Digits / Digital Root

function digitalRoot(n) {
  while(n >= 10) {
    n = n.toString().split('').reduce((sum, n) => sum + Number(n), 0)
  }
  return n
}
// console.log(digitalRoot(493193));


// task 11
// Mumbling
function accum(s) {
  if (typeof s !== 'string' || !/^[a-zA-Z]+$/.test(s)) {
    throw new Error("Input must be a string containing only letters from a..z or A..Z");
  }

  return s
    .split('')
    .map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index))
    .join('-');
}
// console.log(accum("RqaEzty"));

// task 12


function duplicateCount(text) {
  // Convert the text to lowercase to ensure case-insensitivity
  text = text.toLowerCase();
  
  // Create an object to store character counts
  const charCount = {};

  // Count occurrences of each character
  for (let char of text) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Count distinct characters that appear more than once
  let duplicates = 0;
  for (let count of Object.values(charCount)) {
    if (count > 1) {
      duplicates++;
    }
  }

  return duplicates;
}

// console.log(duplicateCount("indivisibility"))