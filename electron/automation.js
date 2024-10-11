import puppeteer from 'puppeteer';

export async function automate(text, website, selectors, credentials) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  try {
    await page.goto(website);

    if (credentials) {
      await handleAuthentication(page, credentials, selectors);
    }

    await page.waitForSelector(selectors.inputBox);
    await page.type(selectors.inputBox, text);

    await page.click(selectors.submitButton);

    await page.waitForSelector(selectors.responseSelector);
    const response = await page.$eval(selectors.responseSelector, (el) => el.textContent);

    await browser.close();
    return response;
  } catch (error) {
    await browser.close();
    throw error;
  }
}

async function handleAuthentication(page, credentials, selectors) {
  await page.waitForSelector(selectors.loginForm);
  await page.type(selectors.usernameInput, credentials.username);
  await page.type(selectors.passwordInput, credentials.password);
  await page.click(selectors.loginButton);

  // Handle human verification if needed
  try {
    await page.waitForSelector(selectors.humanVerification, { timeout: 5000 });
    throw new Error('Human verification required');
  } catch (error) {
    if (error.message !== 'Human verification required') {
      // Ignore timeout error, it means no human verification was needed
      console.log('No human verification required');
    } else {
      throw error;
    }
  }
}