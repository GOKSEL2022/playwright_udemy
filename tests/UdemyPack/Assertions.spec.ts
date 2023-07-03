import{test,expect} from '@playwright/test';

test.describe("Assertions",async()=>{

    test("Hard assertions",async({page})=>{
        await page.goto("https://www.demoblaze.com/");
        await expect(page).toHaveURL("https://www.demoblaze.com/");
        await expect(page).toHaveTitle("STORE");
        await expect(page.getByText("Place Order").nth(1)).not.toBeAttached();
     //    await expect(page.getByText("Place Order").nth(1)).toBeAttached();
  })

     test("Automation practice",async({page})=>{
        await page.goto("https://testautomationpractice.blogspot.com/")
        const checkBoxLocate=page.locator("//input[@id='male']");
        await checkBoxLocate.check();
        await expect(checkBoxLocate).toBeChecked();
        await expect(page.locator("//input[@id='name']")).toBeEnabled();
        // await expect(page.locator("//input[@id='name']")).toBeDisabled();
        await expect(page.locator("//input[@id='name']")).toBeEditable();
        await expect(page.locator("//input[@id='name']")).toBeEmpty();
        await page.locator("//input[@id='name']").fill("Faruk");
        await expect(page.locator("//input[@id='name']")).toHaveValue("Faruk");
        await expect(page.locator("//input[@id='name']")).not.toBeEmpty();
      //   await expect(page.locator("//input[@id='name']")).toBeEmpty();


     })

     test("DemoQA",async({page})=>{
      await page.goto("https://demoqa.com/")
      await expect(page.getByText("Book Store Application")).not.toBeInViewport();
      // await expect(page.getByText("Book Store Application")).toBeInViewport();
      await expect(page.getByText("Book Store Application")).toContainText("Application");
      await expect(page.getByText("Book Store Application")).toContainText(" Application");
      await expect(page.getByText("Book Store Application")).toContainText("ion");
      await expect(page.getByText("Book Store Application")).toHaveText("Book Store Application");
      // await expect(page.getByText("Book Store Application")).toHaveText(" Book Store Application"); //hata verecek
      // await expect(page.getByText("Book Store Application")).toHaveText("Store Application"); // hata verecek
      
     expect(await page.getByText("Book Store Application").textContent()).toBe("Book Store Application");


     })

     



})
