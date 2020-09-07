describe("FREECODECAMP", () => {
    it("SHOULD RETURN THE LENGTH OF THE LONGEST WORD IN A STRING", ()=>{
        expect(findLongestWordLengthWordLength("The quick brown fox jumped over the lazy dog")).toBe(6);
        expect(findLongestWordLengthWordLength("May the force be with you")).toBe(5);
        expect(findLongestWordLengthWordLength("Google do a barrel roll")).toBe(6);
        expect(findLongestWordLengthWordLength("What is the average airspeed velocity of an unladen swallow")).toBe(8);
        expect(findLongestWordLengthWordLength("What if we try a super-long word such as otorhinolaryngology")).toBe(19);
    })
})