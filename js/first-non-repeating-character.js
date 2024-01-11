// Write a function that takes in a string of lowercase English-alphabet letters and returns the index of the string's first non-repeating character. The first non-repeating character is the first character in a string that occurs only once. If the input string doesn't have any non-repeating characters, your function should return -1

string = "abcdcaf";
// output = 1 // b is the first character that only appears once in the string

function firstNonRepeatingCharacter(string) {
    // Write your code here.
    let hash = {};
    for (let index = 0; index < string.length; index++) {
        if (string[index] in hash) {
            hash[string[index]] += 1;
        } else {
            hash[string[index]] = 1;
        }
    }
    for (let index = 0; index < string.length; index++) {
        if (hash[string[index]] === 1) {
            return index;
        }
    }
    return -1;
}
