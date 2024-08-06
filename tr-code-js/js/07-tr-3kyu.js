{/** 8 kyu Merging sorted integer arrays (without duplicates)
Write a function that merges two sorted arrays into a single one. 
The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate. */

  const mergeArrays = (a, b) => [...new Set([...a, ...b])].sort((a, b) => a - b);

  console.log(mergeArrays([2, 4, 8], [2, 4, 6]));
}