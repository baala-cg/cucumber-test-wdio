import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";
import { findConfigFile } from "typescript";

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
  await browser.url("");
  await browser.setTimeout({ pageLoad: 10000, implicit: 15000 });
  // await browser.maximizeWindow();
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

  // let ele = await $("[type=number]");
  // await ele.scrollIntoView(); //optional - to scroll to the element position
  // await ele.click(); //optional
  // let num = 5555;
  // let str = num.toString();
  // await ele.setValue(str);
  // await browser.pause(3000);
  // await ele.addValue("54321");

  // await ele.click(); //to focus on the element to enter chars

  // for (let i = 0; i < str.length; i++) {
  //   let ch = await str.charAt(i)
  //   await browser.pause(1000);
  //   await browser.keys(ch);
  // }
  /**
   * Dropdown
   *
   */
  // let ele = await $("//select[@id='dropdown']/option[@selected='selected']");
  // let value = await ele.getText();
  // chai.expect(value).to.be.equal("Please select an option");
  // await browser.debug();
  // await browser.pause(5000)

  // Select a specific option

  // let sel = await $("#dropdown")
  // await sel.selectByVisibleText("Option 1")
  // await browser.pause(3000)

  // await sel.selectByAttribute('value','2')
  // await browser.pause(3000)

  // let eleArr = await $$("select > option");
  /**
   eleArr.forEach(async ele => {    //foreach will not support async function here
   await ele.getText()
  })
   * 
   */
  // let arr = [];
  // for (let i = 0; i < eleArr.length; i++) {
  //   let c = eleArr[i];
  //   let a = await c.getText();
  //   arr.push(a);
  //   console.log(a);
  // }
  // console.log("Options array:", arr);
  // console.log('Options array: ${arr}'); --not working

  /**
   * Checkbox
   * 1.Select checkbox
   * 2.unselect a checkbox
   * 3.Assert a checkbox for selection
   * 4.click on all checkboxes
   */

  // let checkbox = await $("//*[@id='checkboxes']/input[1]");
  // await checkbox.click();

  // await browser.pause(3000);

  // let ele = await $("//*[@id='checkboxes']/input[2]");
  // await ele.click();

  // // if (!(await ele.isSelected())) {
  // //   await ele.click();
  // // }

  // let flag = await ele.isSelected();
  // chai.expect(flag).to.be.false;

  // let eleArr = await $$("//*[@id='checkboxes']/input");
  // for (let i = 0; i < eleArr.length; i++) {
  //   let el = await eleArr[i];
  //   if (!(await el.isSelected())) {
  //     await el.click();
  //   }
  // }

  /**
   * Windows handling
   * Steps:
   * 1.click on a link
   * 2.switch to the child window based on title
   * 3.switch back to main window
   *
   * Methods:
   * 1.getTitle
   * 2.getWindowHandle
   * 3.getWindowHandles
   * 4.switchToWindow or switchWindow
   */
  // let ele = await $("=Click Here");
  // await ele.click();

  // let ele1 = await $("=Elemental Selenium");
  // await ele1.click();

  // let parentWindowTitle = await browser.getTitle();
  // let parentWindowHandle = await browser.getWindowHandle();
  // // await browser.switchWindow()

  // console.log("currenttitle: ", parentWindowTitle);

  // let windows = await browser.getWindowHandles();

  // for (let i = 0; i < windows.length; i++) {
  //   if (windows[i] != parentWindowHandle) {
  //     await browser.switchToWindow(windows[i]);
  //     let currenttitle = await browser.getTitle();
  //     console.log("Child window Title: ", i, " ", currenttitle);
  //     if (currenttitle === "Elemental Selenium: Receive a Free, Weekly Tip on Using Selenium like a Pro") {
  //       let headerele = await $("<h1>").getText();
  //       console.log("header Element window text: ", headerele);
  //       break
  //     }
  //   }
  // }

  // await browser.switchToWindow(parentWindowHandle);
  // console.log("Header Text: ", await $("<h3>").getText());

  /**
   * Handling Alerts
   * 1.isAlertOpen()
   * 2.acceptAlert()
   * 3.dismissAlert()
   * 4.getAlertText()
   * 5.sendAlertText()
   */

  // await (await $("button=Click for JS Alert")).click();

  // if(await browser.isAlertOpen())
  // {
  //   console.log("Alert text: ",await browser.getAlertText())
  //   await browser.acceptAlert()
  // }

  // await (await $("button=Click for JS Prompt")).click();

  // if(await browser.isAlertOpen())
  // {
  //   console.log("Alert text: ",await browser.getAlertText())
  //   await browser.sendAlertText("Balu")
  //   await browser.acceptAlert()
  // }

  /**
   * File Upload
   */
  console.log(process.cwd())
  // let ele = await $("#file-upload");
  // await ele.addValue("E:/Materials/WebDriverIO/workspace/cucumber-test/data/fielupload/dummy.txt");
  // await (await $("#file-submit")).click();

  /**
   * Frames
   * 1.Switch to Frame
   * 2.Switch to Parent Frame
   */

  // await (await $("=iFrame")).click()
  // let ele = await $("#mce_0_ifr")
  // await browser.switchToFrame(ele)
  // await (await $("#tinymce")).click()
  // //Interact with the frame
  // // await (await $("#tinymce")).setValue("My input")
  // await browser.keys(["Control","A"])
  // await browser.pause(1000)
  // await browser.keys("Delete")
  // await (await $("#tinymce")).addValue("My input")
  // await browser.switchToParentFrame()


  /**
   * Basic scroll
   * 
   */

  let ele = await $("//h2[text()='Shop books by category']")
  // await ele.scrollIntoView()

  await ele.scrollIntoView(false)  //scrolls to the bottom of that section with boolean as false

  await browser.pause(3000);
});
