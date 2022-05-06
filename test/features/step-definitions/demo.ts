import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^Google page is launched$/, async function () {
  await browser.url("https://www.google.com");
});

When(/^Search a (.*)$/, async function (searchitem) {
  console.log("searchitem: ", searchitem);
  await (await $("[name='q']")).setValue(searchitem);
  await browser.keys("Enter");
});

Then(/^Click on first search result$/, async function () {
  let ele = await $("h3");
  await ele.click();
});

Then(/^Url should match (.*)$/, async function (expectedUrl) {
  console.log(">> expectedurl:", expectedUrl);
  let url = await browser.getUrl();
  chai.expect(url).to.be.equal(expectedUrl);
});
