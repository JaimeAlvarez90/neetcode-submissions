class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
     const conteo= nums.reduce((acc,val)=>{
            acc[val]=(acc[val]|| 0)+1;
            return acc;
        },{})
        console.log("conteo",conteo);
    const conteo2={};
    for(let num of nums){
        conteo2[num]= (conteo2[num]|| 0)+1;
    }
    console.log("conteo2",conteo2);
    const keys= Object.entries(conteo);
    console.log("keys",keys);
    const ordenado= keys.sort((a,b)=>b[1]-a[1]);
    console.log('ordenado',ordenado);
    const slice= ordenado.slice(0,k);
    console.log("slices",slice);
    const finalResult=slice.map(([num])=>Number(num));
    console.log(finalResult);
    return finalResult

    }
}
