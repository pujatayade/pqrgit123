package com.jbk.bdd.cucumber_maven;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.junit.Cucumber;

// html // json //xml
@RunWith(Cucumber.class)
@CucumberOptions(format = { "pretty", "json:target/cucumber-reports/Cucumber.json",
		"junit:target/cucumber-reports/Cucumber.xml", "html:target/cucumber-reports" }, 
features = {"classpath:cucumber" },
glue = { "com.jbk.bdd.steps" })
public class RunWebsiteTest {}

/**
 * format = { "pretty", "json:target/cucumber-reports/Cucumber.json",
 * "junit:target/cucumber-reports/Cucumber.xml",
 * "html:target/cucumber-reports"},
 */
