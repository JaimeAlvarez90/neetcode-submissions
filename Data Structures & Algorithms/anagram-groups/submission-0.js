class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        let arraySameLength= {};
        
        //Check amount of letters
        //Check if has same type of letter
        //join into a new array the strings that contain same letters

      strs.forEach((str)=>{
        const word=str.split("").sort().join("");
        const word2=str.split("").join("");
        console.log("Word",word)
        if(!arraySameLength[word]) return arraySameLength[word]=[word2];
        arraySameLength[word].push(str);
      })
            console.log("arraySameLength",arraySameLength);
            const result= Object.values(arraySameLength);
            console.log("resultado",result);
            return result;

        }
    }

