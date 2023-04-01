function computeDash(number) {

    const digits = number.toString().split('');
  
    for (let i = 0; i < digits.length - 1; i++) {
      if (digits[i] % 2 === 0 && digits[i + 1] % 2 === 0) {
        digits.splice(i + 1, 0, '-');
      }
    }
    return digits.join('');
  }
  
  
  console.log(computeDash(25468));
  