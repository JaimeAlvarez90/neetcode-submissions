class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */

    hasDuplicate(nums) {
    let num1=[];
        for (const num of nums) {
            console.log(num);
            if(num1.includes(num)) return true;        
            num1.push(num);
        }
        console.log(num1);
        return false;
    }
}
