Feature: Test Facebook login smoke scenario
	
	Scenario: Test login with valid credentials
	Given Open Firefox and start application
	When I enter valid "kiran@gmail.com" and "123456"
	Then user able to login successfully 
