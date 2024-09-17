const a1 = "xyaabbbccccdefww";
const a2 = "abcdefghijklmnopqrstuvwxyz";
const b1 = "xxxxyyyyabklmopq";

function longestAI(s1: string, s2: string) {
    const combinedSet = new Set(s1 + s2); //Set (множина) використовується для того, щоб зберегти лише унікальні символи з двох рядків.
    console.log(combinedSet)
    return Array.from(combinedSet).sort().join(''); //Array.from() перетворює множину в масив.
}

// Example usage
console.log(longestAI(a1, b1));  // Output: "abcdefklmopqwxy"

console.log(longestAI(a2, a2));  // Output: "abcdefghijklmnopqrstuvwxyz"

// --------------------------------------------------------------------

const longests = (arg1: string, arg2: string) => {

    const combindString = arg1 + arg2

    const result = combindString.split('').reduce((acc, elem) => {
        if (!acc.includes(elem)) {
            acc.push(elem)
        }
        return acc
    }, [] as Array<string>)
    return result.sort().join('')
}
longests(a1, b1)
longests(a2, a1)

// --------------------------------------------------------------------

const longest = (s1: string, s2: string) => s1.concat(s2)
.split('')
.sort()
.filter((item, pos, self) => self.indexOf(item) == pos)
.join('');

console.log(longest(a1, b1))
console.log(longest(a2, a2))