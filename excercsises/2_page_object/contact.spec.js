var homePage = require("./pages/home");

describe("Protractor Workshop app", function () {
  beforeEach(function () {
    homePage.get();
  });

  it('should have "Get in touch" and "Address" sections on Contact Us page', function () {
    homePage.clickMenuAtIdx(4);
  });
});
