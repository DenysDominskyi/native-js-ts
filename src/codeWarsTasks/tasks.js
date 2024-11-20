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

// task 6 Get the Middle Character

function getMiddle(s) {
    const mid = Math.floor(s.length / 2)
    return s.length % 2 === 0 ? s.slice(mid - 1, mid + 1) : s.slice(mid, mid + 1)
}

console.log(getMiddle("middle"));

// task 7
// ...