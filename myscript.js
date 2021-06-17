function oddOrEven(num){
    let ans = num % 2;

    if(ans === 0){
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(oddOrEven(11));