// Your code here
export function pointsForWord(word){
    const vowels = ["a", "e", "i", "o", "u"]
    return word.split('').reduce( (acc, letter) => vowels.includes(letter.toLowerCase()) ? acc + 1 : acc + 2, 0)
}