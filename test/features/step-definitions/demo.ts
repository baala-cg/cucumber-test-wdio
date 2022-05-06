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
/**
 * Web Interactions
 */
Given(/^Web page is launched$/, async function () {
  await browser.url("/inputs");
  await browser.setTimeout({ pageLoad: 10000, implicit: 15000 });
  await browser.maximizeWindow();
  await browser.pause(5000);
});

When(/^Perform web interactions$/, async function () {
  /**
   * Input box
   * 1.Type into input box
   * 2.Clear the field and add value
   * 3.Click and type
   * 4.Type slowly
   *
   */

  let ele = await $("[type=number]");
  await ele.scrollIntoView(); //optional - to scroll to the element position
  await ele.click(); //optional
  let num = 5555;
  let str = num.toString();
  await ele.setValue(str);
  await browser.pause(3000);
  await ele.addValue("54321");

  await ele.click(); //to focus on the element to enter chars

  for (let i = 0; i < str.length; i++) {
    let ch = await str.charAt(i)
    await browser.pause(1000);
    await browser.keys(ch);
  }
  // await browser.debug();
});
