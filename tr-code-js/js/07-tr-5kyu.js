{/**  6 kyu  Array.diff 
 Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]               */

  function arrayDiff(a, b) {
    // return a.filter(e => b.indexOf(e) < 0);
    // return a.filter(e => b.indexOf(e) === -1);
    return a.filter(e => !b.includes(e));

    // let arr = [...a];
    // b.map(e => arr = arr.filter(el => el !== e));
    // return arr;
  };
  // console.log(arrayDiff([1, 2, 2, 3], [3, 1]));
}

{/** 6 kyu  Who likes it? 
 You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.       */


  function likes(names) {
    switch (names.length) {
      case 0: return "no one likes this";
      case 1: return `${names[0]} likes this`;
      case 2: return `${names[0]} and ${names[1]} like this`;
      case 3: return `${names[0]}, ${names[1]} and ${names[2]} like this`;
      default: return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    }
  }

  // console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));
}

{/**6 kyu  Replace With Alphabet Position 
Welcome.
In this kata you are required to, given a string, replace every letter with its position in the alphabet.
If anything in the text isn't a letter, ignore it and don't return it.
"a" = 1, "b" = 2, etc.
Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )    */

  function alphabetPosition(text) {
    // const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    // return [...text].filter(e => e == e.match(/[a-z]/i)).map(e => 1 + (alphabet.includes(e) ? alphabet.indexOf(e) : alphabet.indexOf(e.toLowerCase()))).join(' ');
    return [...text.replace(/[^a-z]/gi, '').toUpperCase()].map(e => e.charCodeAt() - 64).join(' ');

    // const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    // return [...text].filter(e => e == e.match(/[a-z]/i))
    //   .map(e => { return alphabet.includes(e) ? alphabet.indexOf(e) + 1 : alphabet.indexOf(e.toLowerCase()) + 1; }).join(' ');
  }
  // console.log(alphabetPosition("The narwhal bacons at midnight."));
  // console.log('A'.charCodeAt());
}

{  /**  8 kyu   Is it even? 
In this Kata we are passing a number (n) into a function.
Your code will determine if the number passed is even (or not).
The function needs to return either a true or false.
Numbers may be positive or negative, integers or floats.
Floats with decimal part non equal to zero are considered UNeven for this kata.    */

  function testEven(n) {
    return !(n % 2);
    // return (n % 1 > 0) ? false : n % 2 !== 0 ? false : true;
  }
  // console.log(testEven(7));
}

{  /**8 kyu  Welcome!  
Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.

The Task
Think of a way to store the languages as a database. The languages are listed below so you can copy and paste!
Write a 'welcome' function that takes a parameter 'language', with a type String, and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.
The Database
[ ("english", "Welcome")
, ("czech", "Vitejte")
, ("danish", "Velkomst")
, ("dutch", "Welkom")
, ("estonian", "Tere tulemast")
, ("finnish", "Tervetuloa")
, ("flemish", "Welgekomen")
, ("french", "Bienvenue")
, ("german", "Willkommen")
, ("irish", "Failte")
, ("italian", "Benvenuto")
, ("latvian", "Gaidits")
, ("lithuanian", "Laukiamas")
, ("polish", "Witamy")
, ("spanish", "Bienvenido")
, ("swedish", "Valkommen")
, ("welsh", "Croeso")
]
Possible invalid inputs include:

IP_ADDRESS_INVALID - not a valid ipv4 or ipv6 ip address
IP_ADDRESS_NOT_FOUND - ip address not in the database
IP_ADDRESS_REQUIRED - no ip address was supplied          */

  function greet(language) {
    // switch (language) {
    //   case 'czech': return "Vitejte";
    //   case 'danish': return "Velkomst";
    //   case 'dutch': return "Welkom";
    //   case 'estonian': return "Tere tulemast";
    //   case 'finnish': return "Tervetuloa";
    //   case 'flemish': return "Welgekomen";
    //   case 'french': return "Bienvenue";
    //   case 'german': return "Willkommen";
    //   case 'irish': return "Failte";
    //   case 'italian': return "Benvenuto";
    //   case 'latvian': return "Gaidits";
    //   case 'lithuanian': return "Laukiamas";
    //   case 'polish': return "Witamy";
    //   case 'spanish': return "Bienvenido";
    //   case 'swedish': return "Valkommen";
    //   case 'welsh': return "Croeso";

    //   default: return 'Welcome';
    // }

    const data = [
      ["english", "Welcome"],
      ["czech", "Vitejte"],
      ["danish", "Velkomst"],
      ["dutch", "Welkom"],
      ["estonian", "Tere tulemast"],
      ["finnish", "Tervetuloa"],
      ["flemish", "Welgekomen"],
      ["french", "Bienvenue"],
      ["german", "Willkommen"],
      ["irish", "Failte"],
      ["italian", "Benvenuto"],
      ["latvian", "Gaidits"],
      ["lithuanian", "Laukiamas"],
      ["polish", "Witamy"],
      ["spanish", "Bienvenido"],
      ["swedish", "Valkommen"],
      ["welsh", "Croeso"]
    ];
    return (data.map((e) => (e[0] === language) ? e[1] : 0).filter(e => e)[0]) || 'Welcome';
  }

  // console.log(greet('IP_ADDRESS_INVALID'));
  // console.log(greet('german'));
}

{  /**  5 kyu  Rot13 
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".                                   */

  function rot13(message) {
    return message.replace(/[a-z]/gi, str => String.fromCharCode(str.charCodeAt() + (/[a-m]/i.test(str) ? 13 : -13)));

    /** Метод test() в JavaScript виконує пошук з використанням регулярного виразу для відповідності між регулярним виразом та вказаним рядком. 
      Він повертає true, якщо є відповідність, і false в іншому випадку.    RegExp.prototype.test()    */

    // return message.replace(/[a-z]/gi, str => String.fromCharCode(str.charCodeAt(0) + (str.toLowerCase() < 'n' ? 13 : -13)));

    // const codes = [...message].map(e => e.charCodeAt()).map(cc => ((cc > 64 && cc < 78) || (cc > 96 && cc < 110)) ? cc += 13 : ((cc > 77 && cc < 91) || (cc > 109 && cc < 123)) ? cc -= 13 : cc);
    // return String.fromCharCode(...codes);

    // const codes = [...message].map(e => e.charCodeAt());
    // const codesCoded = codes.map(cc => {
    //   if ((cc > 64 && cc < 78) || (cc > 96 && cc < 110)) { return cc += 13; };
    //   if ((cc > 77 && cc < 91) || (cc > 109 && cc < 123)) { return cc -= 13; };
    //   return cc;
    // });

    // const codes = [...message].map(e => e.charCodeAt());
    // const codesCoded = codes.map(cc => ((cc > 64 && cc < 78) || (cc > 96 && cc < 110)) ? cc += 13 : ((cc > 77 && cc < 91) || (cc > 109 && cc < 123)) ? cc -= 13 : cc);
    // const stringCoded = String.fromCharCode(...codesCoded);
    // return stringCoded;

    // console.log("🌟".charCodeAt(), "🌟".charCodeAt(1), "🌟".codePointAt(), ".".charCodeAt(), "A".charCodeAt(), "a".charCodeAt(),);
  }
  console.log(rot13('The quick brown fox jumps over the lazy dog.'));  /**  Gur dhvpx oebja sbk whzcf bire gur ynml qbt. */
  console.log(rot13("test"));  /**  Grfg */
}