function rangeOfNumbers(startNum, endNum) {
    if (endNum == startNum) {
      return [startNum];
    } else {
      var nums = rangeOfNumbers(startNum, endNum - 1);
      nums.push(endNum);
      return nums;
    }
  }
  console.log(rangeOfNumbers(6, 9));