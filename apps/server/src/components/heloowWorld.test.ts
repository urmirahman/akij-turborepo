import HellowWord from "./hellowWorld";

describe("Next-app-2 test", () => {
  it("sees Next-app-2", () => {
    expect(HellowWord(1, 4)).toEqual(5);
  });
});
