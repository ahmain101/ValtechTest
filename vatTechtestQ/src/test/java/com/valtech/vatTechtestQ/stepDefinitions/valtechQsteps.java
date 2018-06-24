package com.valtech.vatTechtestQ.stepDefinitions;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class valtechQsteps {
	
	WebDriver driver;
	
	@Before
	public void setup () {
			
			System.setProperty("webdriver.chrome.driver", "C:\\resources\\chromedriver.exe");
			driver = new ChromeDriver();
			driver.manage().window().maximize();
			driver.manage().timeouts().pageLoadTimeout(120, TimeUnit.SECONDS);
			}

	
	@After
	public void finish () {
		if(driver != null) {
			
			driver.quit();
			driver = null;
		}
		
	}
	
	
	@Given("^I browse to the Valtech website$")
	public void i_browse_to_the_Valtech_website() throws Throwable {
		driver.get("https://www.valtech.com");
	}

	@Then("^the Latest News section is displayed$")
	public void the_Latest_News_section_is_displayed() throws Throwable {
		WebElement secttxt = driver.findElement(By.xpath("//h2[contains(text(),'Latest news')]"));
		Assert.assertEquals(true, secttxt.isDisplayed());
	}

	
	@Given("^select a navigation button$")
	public void select_a_navigation_button(DataTable arg1) throws Throwable {
		List<List<String>> data = arg1.raw();
		for (int i=0; i < data.size(); i++) {
			String findElem = "//*[@id=\"navigationMenuWrapper\"]//span[contains(text(),\'" + data.get(i).get(0) + "\')]";
			driver.findElement(By.xpath(findElem)).click();			
			String h1Elem = "//*[@id=\"container\"]//h1[contains(text(),\'" + data.get(i).get(0) + "\')]";
			WebElement h1txt = driver.findElement(By.xpath(h1Elem));
			Assert.assertEquals(true, h1txt.isDisplayed());
		}
	} 

	@Then("^the tag displays the correct page name$")
	public void the_H_tag_displays_the_correct_page_name() throws Throwable {
	    // in the Given part as i went with a  datatable in a loop and verify there. 
	}

	@Given("^I navigate to the Contact Page$")
	public void i_navigate_to_the_Contact_Page() throws Throwable {
		driver.findElement(By.xpath("//*[@id=\"CTA-form-trigger\"]/div/div/span")).click();		
	}

	@Given("^the contact us information is displayed$")
	public void the_page_is_displayed_correctly() throws Throwable {
		WebElement cutxt = driver.findElement(By.xpath("//*[@id=\"contactForm\"]"));
		Assert.assertEquals(true, cutxt.isDisplayed());
	    
	}

	@Then("^I output how many valtech offices there are$")
	public void i_output_how_many_valtech_offices_there_are() throws Throwable {
		String officeStr = driver.findElement(By.cssSelector(".foot__offices")).getText();
	    String[] numOffices = officeStr.split(",");
		System.out.println("Number of Valtech offices = " + numOffices.length);

	}
	
	
	
	
}
