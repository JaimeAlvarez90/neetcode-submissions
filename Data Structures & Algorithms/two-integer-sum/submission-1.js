class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let i=0;
        let j=0;
        let sum=0;
        let result=[];
        nums.forEach((num, index1) => {
            i=num;
            nums.forEach((num2, index2) => {
                if (index1 < index2) {
                    j=num2;
                    sum=i+j;
                    if(sum === target && result.length === 0){
                        result.push(index1, index2);
                    } 
                }
            })
        })
        return result;

}
    }