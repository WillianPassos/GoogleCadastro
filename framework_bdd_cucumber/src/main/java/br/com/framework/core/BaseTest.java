package br.com.framework.core;

import java.io.File;
import java.io.IOException;
import java.text.DecimalFormat;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import cucumber.api.java.After;

import static br.com.framework.core.DriverFactory.getDriver;
import static br.com.framework.core.DriverFactory.killDriver;

public class BaseTest {
	
	private static int screenshotIndex = 1;
	
	public static String testName;
	
	@After
	public static void finaliza() throws IOException {
		
		takeScreenshot();
		
		if(Propriedades.FECHAR_BROWSER) {
			killDriver();	
		}
		
	}
	
	public static void takeScreenshot() throws IOException {
		DecimalFormat zeroFormatter = new DecimalFormat("0000");
		File arquivo = ((TakesScreenshot)getDriver()).getScreenshotAs(OutputType.FILE);
		String fullPath = "target\\screenshot\\" + zeroFormatter.format(screenshotIndex) + " - " + testName + ".jpg";
		FileUtils.copyFile(arquivo, new File(fullPath));
		screenshotIndex++;
	}
	
}
