{
    const copyInstance = function (instance) {
        if (Array.isArray(instance)) {
            return [...instance];
        }

        return { ...instance };
    };

    const array1 = [1, 4, 6, 5]
    const newArray = copyInstance(array1);
    // console.log(`Are they equal? ->  ${newArray === array1}`);
}

{
    // Поверхнева копія масиву:
    const users = [
        { name: 'Pit' },
        { name: 'Tit' },
    ];

    const newUsers = [...users];
    newUsers[0].name = 'Sam';

    console.log(users === newUsers)
    console.log(users, '---users')
    console.log(newUsers, '---newUsers')
}