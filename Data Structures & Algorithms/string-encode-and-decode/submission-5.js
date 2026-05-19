class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const encoded = strs.map((str)=>{
            return `${str.length}#${str}`;
        }).join("");
        console.log('encoded',encoded)
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        //5#Hello5#World
    const result=[];
    let i=0;
    while(i<str.length){
        let j=i;
        while(str[j] !=="#") j++;
      const length = parseInt(str.slice(i));
        const start=j+1;
        result.push(str.slice(start, start+length))
        i=start+length;
    }
    return result;
    }
}
