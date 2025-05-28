function ispalindrom(num){
   let original = num
   let reverse = 0

   while(num>0){
    digit = num%10
    reverse = reverse * 10 +digit
    num = Math.floor(num /10)
   }
    return original === reverse
    
}
console.log(ispalindrom(11311))