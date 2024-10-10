function every(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
      if (!fn(arr[i], i, arr)) {
        return false;
      }
    }
    return true;
  }
  
  function some(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
      if (fn(arr[i], i, arr)) {
        return true;
      }
    }
    return false;
  }
  
  function none(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
      if (fn(arr[i], i, arr)) {
        return false;
      }
    }
    return true;
  }
  
  // Example context and test
  const ctx = { small: [5, 8, 12] }; // Example array
  
  const greaterEq10 = (num) => num >= 10;
  
  // Test case: Check if none of the elements in ctx.small are >= 10
  const testResult = some(ctx.small, greaterEq10);
  console.log(testResult); // false
  