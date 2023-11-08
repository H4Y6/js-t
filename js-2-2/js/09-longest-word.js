const findLongestWord = function (words) {
    const wordArray = words.split(' ');
    let longestWord = '';

    for (const word of wordArray) {
        longestWord = word.length > longestWord.length ? word : longestWord;
    }

    return longestWord;
};

const foodnames = 'kiwi banana ananas carrot cabbage cucumber';
const cars = 'audi bmw volkswagen Kia';

// findLongestWord(foodnames);
// findLongestWord(cars);

const testFindLongestWord = function (result, expectedValue) {
    if (result === expectedValue) {
        console.log('Test OK!', result);
        return;
    }

    console.error('Error!');
}

// testFindLongestWord(findLongestWord(foodnames), 'cucumber');
// testFindLongestWord(findLongestWord(cars), 'volkswagen');