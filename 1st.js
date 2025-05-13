// second largest element
//New

function findSecondLargest(arr) {
    if (arr.length < 2) return null;
  
    let largest = -Infinity;
    let secondLargest = -Infinity;
  
    for (let num of arr) {
      if (num > largest) {
        secondLargest = largest;
        largest = num;
      } else if (num > secondLargest && num < largest) {
        secondLargest = num;
      }
    }
  
    return secondLargest === -Infinity ? null : secondLargest;
  }
  
  // Example usage:
  const arr = [10, 20, 4, 45, 99, 99];
  const result = findSecondLargest(arr);
  console.log("Second largest element is:", result);
  