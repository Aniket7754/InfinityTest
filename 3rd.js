function recursion(n){
    if (n === 0 || n === 1) {
    return 1; // base case
  }
  console.log("run")
    return n *recursion(n-1)
}
console.log(recursion(50))