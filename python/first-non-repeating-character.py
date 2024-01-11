#  Write a function that takes in a string of lowercase English-alphabet letters and returns the index of the string's first non-repeating character. The first non-repeating character is the first character in a string that occurs only once. If the input string doesn't have any non-repeating characters, your function should return -1

string = "abcdcaf"
# output = 1 b is the first character that only appears once in the string


def firstNonRepeatingCharacter(string):
    hash = {}
    for char in string:
        if char in hash:
            hash[char] += 1
        else:
            hash[char] = 1
    for key, value in hash.items():
        if value == 1:
            return string.index(key)
    return -1


print(firstNonRepeatingCharacter(string))
