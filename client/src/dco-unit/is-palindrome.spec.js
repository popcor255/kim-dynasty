const isPalindrome = text => {

    if(!text || text.trim().length === 0) return false;
    
    var str = text.replace(" ", "").toLowerCase();

    if(str.length < 2) return true;

    return str[0] === str[str.length - 1] && isPalindrome(str.substring(1, str.length - 2));
    
};

describe("is-palindrome-tests", () => {
  test("canary test for is palindrome", () => expect(true).toEqual(true));

  test("one letter is a palindrome", () => {
    expect(isPalindrome("a")).toEqual(true);
  });
  test("valid palindrome is true", () => {
    expect(isPalindrome("mom")).toEqual(true);
  });
  test("palindrome with space is true", () => {
    expect(isPalindrome("race car")).toEqual(true);
  });
  test("ignore casing", () => {
    expect(isPalindrome("moM")).toEqual(true);
  });
  test("single space is palindrome", () => {
    expect(isPalindrome(" ")).toEqual(false);
  });

  test("empty string throws error", () => {
    expect(isPalindrome("")).toEqual(false);
  });
});
