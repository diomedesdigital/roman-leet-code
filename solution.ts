function romanToInt(s: string): number {
    const symbolValues: Record<string, number> = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000,
    };
    let total = 0;
    let prevValue = 0;
    for (let i = 0; i < s.length; i++) {
      const singleRomanValue = s[i]
      const value = symbolValues[singleRomanValue];
      if (value > prevValue) {
        total -= 2 * prevValue;
      }
      total += value;
      prevValue = value;
    }
    return total;
  }

  console.log(romanToInt("III"));
  console.log(romanToInt("XXXLX"));
  console.log(romanToInt("MMMMCXLIII"));