const logger = cb => console.log(cb(4));

const logMessage = (value) => `The value is ${value}.`;

// logger(logMessage);

{
    const arr = [4, 7, 5, 2, 8, 15, 12];
    const logValue = value => console.log(`The value is ${value}.`);
    const multiplyValue = value => console.log(`The multiplied by 2 Value is ${value * 2}.`);

    const callFunctionOnEvenNumber = (arr, cb) => {
        for (const number of arr) {
            if (number % 2 === 0) { cb(number) };
        }
    };

    // callFunctionOnEvenNumber(arr, logValue);
    // callFunctionOnEvenNumber(arr, multiplyValue);
}

const numbers = [4, 7, 5, 2, 8, 9];

{/**   ForEach    */


    const logItems = (el, idx, array) => {
        console.log('el:', el);
        console.log('idx:', idx);
        console.log('array:', array);
    };

    const logValuesWithEvenIndex = (value, idx) => {
        if (idx % 2 === 0) { console.log('value:', value, ', idx:', idx); };
    };
    let total = 0;
    const sumValues = (value) => {
        total += value;
    }
    numbers.forEach(sumValues);
    // console.log(total);

    // numbers.forEach(logItems);
    // numbers.forEach(logValuesWithEvenIndex);
}

/**  Filter    */

{
    const filteredNumbers = numbers.filter(el => el > 6);
    // console.log(filteredNumbers);
}

{
    const pureMultiplyFn = (array, value) => {
        const newArray = [];
        for (const number of [...array]) {
            newArray.push(number * value);
        };
        return newArray;
    };
    // console.log(pureMultiplyFn(numbers, 3), { numbers });
}
{
    const students = [
        { name: "Манго", courses: ["математика", "фізика"] },
        { name: "Полі", courses: ["інформатика", "математика"] },
        { name: "Ківі", courses: ["фізика", "біологія"] },
    ];

    // const mapResult = students.map(({ courses }) => courses);

    // const mapResConvertedToFlat = (arrayOfArrays) => {
    //     const flat = [];
    //     for (const el of [...arrayOfArrays]) {
    //         flat.push(...el);
    //     }
    //     return flat;
    // };

    // const flatMapResult = students.flatMap(student => student.courses);

    // const allCourses = mapResConvertedToFlat(mapResult);
    // const uniqueCourses = allCourses.filter((el, idx, array) => array.indexOf(el) === idx);

    // console.log(mapResult);
    // console.log(flatMapResult, allCourses);
    // console.log(uniqueCourses);

    const mapFn = students => students.map(({ courses }) => courses);
    const courses = mapFn(students);

    const flattenedMapFn = (cb, students) => {
        const flattenedArray = [];
        cb(students).forEach(elArray => flattenedArray.push(...elArray));
        return flattenedArray;
    }
    const flattenedCourses = flattenedMapFn(mapFn, students);

    // const flattenedMapFn = arrayOfArrays => {
    //     const flattenedArray = [];
    //     arrayOfArrays.forEach(elArray => flattenedArray.push(...elArray));
    //     return flattenedArray;
    // }
    // const flattenedCourses = flattenedMapFn(courses);

    const getUniqueCourses = array => array.filter((el, idx, array) => array.indexOf(el) === idx);
    const uniqueCourses = getUniqueCourses(flattenedCourses);

    // console.log(courses, flattenedCourses, uniqueCourses);
}

{
    const students = [
        { name: "Mango", score: 83 },
        { name: "Poly", score: 59 },
        { name: "Ajax", score: 37 },
        { name: "Kiwi", score: 94 },
        { name: "Huston", score: 64 },
    ];

    const averageScore = students.reduce((acc, { score }) => acc + score, 0) / students.length;
    // console.log(averageScore);

    const ascendingStudentScoreOrder = [...students].sort((first, second) => first.score - second.score);
    const descendingStudentScoreOrder = [...students].sort((first, second) => second.score - first.score);
    // console.log(ascendingStudentScoreOrder, descendingStudentScoreOrder);

    const alphabeticalStudentNameOrder = [...students].sort((first, second) => first.name.localeCompare(second.name));
    // console.log(alphabeticalStudentNameOrder);
}

{
    const tweets = [
        { id: "000", likes: 5, tags: ["js", "nodejs"] },
        { id: "001", likes: 2, tags: ["html", "css"] },
        { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
        { id: "003", likes: 8, tags: ["css", "react"] },
        { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
    ];

    const getTags = tweets => tweets.reduce((allTags, tweet) => {
        allTags.push(...tweet.tags);
        return allTags;
    }, []);

    // console.log(getTags(tweets));
}

{
    const scores = [27, 2, 41, 4, 7, 3, 75];
    const ascendingScores = [...scores].sort((a, b) => a - b);
    // console.log(ascendingScores);
}