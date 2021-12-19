function twoSum(nums: number[], target: number): number[] {
    const resultMap = new Map<number,number>();
    for(let i=0; i<nums.length; i++) {
        let remain = target - nums[i];
        if(resultMap.has(remain)) {
            return [resultMap.get(remain), i];
        }
        resultMap.set(nums[i], i);
    }
};