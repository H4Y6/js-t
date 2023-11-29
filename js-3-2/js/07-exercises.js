const copyInstance = function (instance) {
    if (Array.isArray(instance)) {
        return [...instance];
    }

    return { ...instance };
};

const array1 = [1, 4, 6, 5]
const newArray = copyInstance(array1);
console.log(`Are they equal? ->  ${newArray === array1}`);