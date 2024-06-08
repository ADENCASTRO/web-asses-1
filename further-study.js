// EXTRA CREDIT

// Return the strings common to both input arrays. Do not return duplicates.
// Ex.:
//   commonStrings(['a', 'b', 'c'], ['a', 'd', 'e']);
//   => ['a']
//   commonStrings(['zoo', 'space', 'zoo'], ['zoo', 'space', 'boat']);
//   => ['zoo', 'space']
function commonStrings(array1, array2) {
    const set1 = new Set(array1);
    const set2 = new Set(array2);
    const commonSet = new Set([...set1].filter(item => set2.has(item)));
    return [...commonset];
}

// Given three numbers, return a list of numbers from 1 to 100 that are
// divisible by at least one of a, b or c.
// Ex.:
//   divisibleByEither(50, 30, 29);
//   => [29, 30, 50, 58, 60, 87, 90, 100]
function divisibleByEither(a, b, c) {const result = [];
  
    for (let i = 1; i <= 100; i++) {
      if (i % a === 0 || i % b === 0 || i % c === 0) {
        result.push(i);
      }
    }
    
    return result;
  }

// Compress a string using the rules below and return the result. To compress a
// string, replace consecutive duplicate characters with a number and the
// character. For this compression, only count consecutive duplicate
// characters. If a character is not repeated, it should not be changed.
// Assume that all inputs are lowercased.
// Ex.:
//   compressString('aaa');
//   => '3a'
//   compressString('ssssbb');
//   => '4s2b'
//   compressString('ssssbbba');
//   => '4s3ba'
function compressString(string) {
    if (string.length === 0) return '';

  let result = '';
  let count = 1;
  
  for (let i = 1; i <= string.length; i++) {
    if (string[i] === string[i - 1]) {
      count++;
    } else {
      result += (count > 1 ? count : '') + string[i - 1];
      count = 1;
    }
  }

  return result;
}

export { commonStrings, compressString, divisibleByEither };
