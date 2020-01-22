const fhToCel = val => {
  if (typeof val !== "number") throw new Error("the value is not a number");
  return ((val - 32) * 5) / 9;
};

describe("fahrenheit-to-celsius", () => {
  test("canary verifies test tools", () => {
    expect(true).toEqual(true);
  });

  test("32 f is 0 c", () => {
    expect(fhToCel(32)).toEqual(0);
  });

  test("212 f is 100 c", () => {
    expect(fhToCel(212)).toEqual(100);
  });

  test("when val is nan throw an error", () => {
    expect(() => {
      fhToCel("d");
    }).toThrow(new Error("the value is not a number"));
  });
});
