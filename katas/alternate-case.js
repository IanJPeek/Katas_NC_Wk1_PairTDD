/*
  the alternateCase function should take a string and return a string.
  Every other letter either capital or lower case, starting with a capital letter.
  
  'hello' would become 'HeLlO'
  'hello world' would become 'HeLlO wOrLd'
  */

function alternateCase(str) {
  if (str.length === 0) {
    return "";
  }

  const letters = str.split("");
  const caseArray = [];
  let spaceAdjust = false;

  for (i = 0; i < letters.length; i++) {
    if (
      letters[i] === " " ||
      letters[i] === "," ||
      letters[i] === ";" ||
      letters[i] === "'"
    ) {
      spaceAdjust = !spaceAdjust;
    }
    
    if (spaceAdjust === false) {
      i % 2 === 0
      ? caseArray.push(letters[i].toUpperCase())
      : caseArray.push(letters[i].toLowerCase());
    }
    
    if (spaceAdjust === true) {
      i % 2 === 0
      ? caseArray.push(letters[i].toLowerCase())
      : caseArray.push(letters[i].toUpperCase());
    }
  }
  const joined = caseArray.join("");
  return joined;
  

  //Single Words - works - starter solution
    // for (i = 0; i < letters.length; i++) {
    //   i % 2 === 0
    //     ? caseArray.push(letters[i].toUpperCase())
    //     : caseArray.push(letters[i].toLowerCase());
    // }
  
    // const joined = caseArray.join("");
    // return joined;
  
    // Adjust Try method
  

  //Several Words - initial attempts
  // const wordArr = str.split(" ");
  // console.log(wordArr);
  
  // function caser(word) {
  //   let casedWord = [];
  //   for (i = 0; i < word.length; i++) {
  //     i % 2 === 0
  //       ? casedWord.push(word[i].toUpperCase())
  //       : casedWord.push(word[i].toLowerCase());
  //   }
  //   console.log(casedWord);
  //   caseArray.push(casedWord.join(""));
  // }

  // function altCaser(word) {
  //   let casedWord = [];
  //   for (i = 0; i < word.length; i++) {
  //     i % 2 === 1
  //       ? casedWord.push(word[i].toUpperCase())
  //       : casedWord.push(word[i].toLowerCase());
  //   }
  //   console.log(casedWord);
  //   caseArray.push(casedWord.join(""));
  // }

  // function dualCaser() {}

  // console.log(wordArr.forEach(caser), caseArray, "return");

  // // console.log(casedWord, caseArray);

  // for (i = 0; i < caseArray.length; i++) {
  //   if (i > 0 && caseArray[i - 1].length % 2 === 1) {
  //   }
  // }

  return caseArray;

  //EG FOR EACH

  // var fruits = ["apple", "orange", "cherry"];
  // fruits.forEach(myFunction);

  // function myFunction(item, index) {
  //   document.getElementById("demo").innerHTML += index + ":" + item + "<br>";
  // }

  //  const upped = "" + str.toUpperCase()
  //  console.log(upped)

  // return upped

  //old

  //  const alternatingWord = [];
  //  for (let i = 0; i < str.length; i++) {
  //    if (i % 2 === 0) {
  //      alternatingWord.push(str[i].toUpperCase());
  //    } else if (i % 2 === 1) {
  //      alternatingWord.push(str[i].toLowerCase());
  //    }
  //  }
  //  return alternatingWord.join("");

  //New

  //     console.log(letters, noWhite)

  // caseArray.push(noWhite[0].toUpperCase())

  // console.log(caseArray[0])
  // const ans = "" + caseArray[0]

  // return ans

  // const cased = noWhite.map(
  //   letter => console.log(noWhite.indexOf(letter)))

  // console.log (letters, noWhite, caseArray)
  // return caseArray
}

module.exports = alternateCase;
