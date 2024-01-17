// Your tests here
import { pointsForWord } from "../utils"

describe("pointsForWord", () => {
    test("calculates the total points for a word (1 point per vowel, 2 per consonant)", () => {
        const word = "test"
        const points = pointsForWord(word)
        expect(points).toBe(7)
    })

    test("handles uppercase input as well", () => {
        const word = "GdtweGwer"
        const points = pointsForWord(word)
        expect(points).toBe(16)
    })
})