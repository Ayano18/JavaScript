// MATCH
let ha = "the okay is okaying with okayed";

let hahas = ha.match(/okayed/);

console.log(hahas);

const txt = "one two three one four.";
const reg = /(one)/g; // Capturing group

const res = txt.match(reg);
console.log(res);

console.log("");
console.log("");

// SEARCH
const text = "The quick brown fox jumps over the lazy dog.";
const regex1 = /fox/;
const regex2 = /cat/;
const regex3 = /o/g; // Note the /g flag

// Match found: returns the starting index
const index1 = text.search(regex1);
console.log(index1); // Output: 16 (index of 'f' in 'fox')

// No match found: returns -1
const index2 = text.search(regex2);
console.log(index2); // Output: -1

// /g flag is ignored: returns the index of the *first* 'o'
const index3 = text.search(regex3);
console.log(index3); // Output: 10 (index of 'o' in 'brown')

console.log("");
console.log("");

// REPLACE
const textstr = "Apples and Oranges are tasty.";

// Replace the first match
const pinalit = textstr.replace(/and/, "&");
console.log(pinalit); // Output: "Apples & Oranges are tasty."

// Replace ALL matches (requires the 'g' flag)
const messytext = "ONE two THREE four.";
const replacedAll = messytext.replace(/[A-Z]/g, (argue) => argue.toLowerCase());
console.log(replacedAll); // Output: "one two three four."


let ack = "him hate her";
let print = ack.replace(/hate/, "love").replace(/him/, "me");
console.log(print);


// flags g, i