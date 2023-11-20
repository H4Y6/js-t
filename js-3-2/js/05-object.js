{
    const createUser = function (name, age) {
        // return { name: name, age: age };
        const eyeColor = 'green';

        return { name, age, eyeColor };
    }

    const user = createUser('Smith', 33);
    // console.log(user);
}

{
    const user = { name: 'Peter', age: 32 };

    const addProps = function ({ ...obj }, key, value) {
        obj[key] = value;

        return obj;
    }
    // const developer = addProps(user, 'salary', 2222);
    const developer = addProps(user, 'rating', 4.2);

    console.log(user, developer);
}
{
    const user = { name: 'Peter', age: 32 };

    const addProps = function (obj, key, value) {
        obj

        return { ...obj, [key]: value };
    }
    let developer = addProps(user, 'salary', 2222);
    console.log(user, developer);

    developer = addProps(user, 'rating', 4.2);
    console.log(user, developer);
}