
//3190. Find Minimum Operations to Make All Elements Divisible by Three

var minimumOperations = function(nums) {
    let count=0;
    for(let num of nums){
        if(num%3!==0){
            //num+=1
            count++
        }
    }
    return count
};
