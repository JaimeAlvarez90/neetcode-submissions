class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const lengthT= t.length;
        const lengthS= s.length;
        const newS= s.split('');
        const newT=t.split('');

        console.log(newS);
        console.log(newT);
        console.log(lengthT);
        console.log(lengthS);
        if(lengthT !== lengthS) return false
        const sortedWordS= newS.sort();
        console.log(sortedWordS);
        const sortedWordT= newT.sort();
        console.log(sortedWordT);
        const unirWordS= sortedWordS.join('');
        console.log(unirWordS);

        const unirWordT=sortedWordT.join('');
        console.log(unirWordT);
        if(unirWordS == unirWordT)return true
        return false

    }
}
