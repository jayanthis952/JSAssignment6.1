function find_largest(arr, n) {
    
    arr.sort(function(a, b) {
      return b - a;
    });
  
    return arr[n - 1];
  }
  function find_largest(arr, n) {
  // Sort the array in descending order
  arr.sort(function(a, b) {
    return b - a;
  });

  return arr[n - 1];
}
const arr = [3, 45, 6, 7, 23, 5, 7, 8];
console.log(find_largest(arr, 3)); 

  