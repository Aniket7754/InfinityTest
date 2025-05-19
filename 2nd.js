function thirdLargest(arr) {
    if (arr.length < 3) {
        return null; // Not enough elements
    }

    // Remove duplicates and sort in descending order
    const uniqueSorted = [...new Set(arr)].sort((a, b) => b - a);

    return uniqueSorted[2]; // 3rd largest element
}

// Example
const arr = [5, 1, 9, 3, 7, 9, 5];
console.log(thirdLargest(arr)); // Output: 5
