const user = { name: 'Bill', age: 22 };

const addProps = function (obj, key, value) {
  return { ...obj, [key]: value };
};
console.log(addProps(user, 'email', 'fol@ok.ps'));