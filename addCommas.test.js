const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test("it adds commas to numbers", () => {
    expect(addCommas(1000000000)).toEqual("1,000,000,000");
  });


  test("it outputs a string", () => {
    expect(addCommas(300)).toEqual(expect.any(String));
  });
});
