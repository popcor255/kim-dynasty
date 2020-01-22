const wordwrap = (word, column) => {
  if (word.length === 1) return word;
  var split = word.split(" ");

  for (var i = 0; i < split.length; i++) {
    var w = split[i];
    split[i] = addBreakToWord(w);
  }
  return split.join("").replace("\n", "");
};

const addBreakToWord = (word, column) => {
  
  const result = word;
  const wordLen = word.length, curr = 0;
  if (wordLen === column) return word;

  for (var i = 0; i < wordLen; i++) {
    var min = Math.min(wordLen, column);
    result = result.substring(curr, min) + "\n" + result.substring(min);
    curr = min;
  }
  return result;
};

describe("wordwrap tests", () => {
  test("canary test wordwrap", () => {
    expect(true).toEqual(true);
  });

//   test("{a, 1} = a", () => {
//     expect(wordwrap("a", 1)).toEqual("a");
//   });

//   test("{aa, 1} = a_a", () => {
//     expect(wordwrap("aa", 1)).toEqual("a\na");
//   });

//   test("{aaa, 1} = a_a_a", () => {
//     expect(wordwrap("aaa", 1)).toEqual("a\na\na");
//   });

//   test("{aaaa, 2} = aa_aa", () => {
//     expect(wordwrap("aaaa", 2)).toEqual("aa\naa");
//   });

//   test("{aaa bbb ccc, 3} = aaa_bbb_ccc", () => {
//     expect(wordwrap("aaa bbb ccc", 3)).toEqual("aaa\nbbb\nccc");
//   });

//   test("{aaa bbb ccc, 2} = aa_a bbb_ccc", () => {
//     expect(wordwrap("aaa bbb ccc", 3)).toEqual("aaa\nbbb\nccc");
//   });
});
