const puppeteer = require("puppeteer");
require("dotenv").config();

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
  });
  console.log("Script Starts");
  const page = await browser.newPage();

  await page.goto("https://app.factorialhr.com/dashboard");

  // Fill in the login form
  var email = process.env.EMAIL;
  var pass = process.env.PASSWORD;
  await page.type("#user_email", email);
  await page.type("#user_password", pass);

  // Click the login button
  await page.click('input[name="commit"]');

  // Wait for navigation to the dashboard
  await page.waitForNavigation();

  console.log("Login Succesful");

  // Check which button to click
  const button = await Promise.race([
    page.waitForSelector(
      "xpath///button[span/span[@title='Fichar desde casa']]"
    ),
    page.waitForSelector("xpath///button[span[text()='Detener']]"),
  ]);

  if (await page.$("xpath///button[span/span[@title='Fichar desde casa']]")) {
    const startButton = await page.$(
      "xpath///button[span/span[@title='Fichar desde casa']]"
    );
    await startButton.click();
    console.log("Turn Started");
  } else {
    const endButton = await page.$("xpath///button[span[text()='Detener']]");
    await endButton.click();
    console.log("Turn Ended");
  }

  await sleep(1000);

  console.log("Script ends");
  await browser.close();
})();
