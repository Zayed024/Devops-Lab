from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

# Path to your ChromeDriver (if not added to PATH)
driver = webdriver.Chrome()

# Open your locally hosted form (from Kind)
driver.get("http://localhost:8087/form.html")

# Fill the registration form fields
driver.find_element(By.ID, "name").send_keys("Zayed Aman")
driver.find_element(By.ID, "email").send_keys("zayed@example.com")
driver.find_element(By.ID, "password").send_keys("Test1234")

# Submit the form
submit_button = driver.find_element(By.ID, "submit")
submit_button.click()

# Wait to observe the result
time.sleep(3)

# Close the browser
driver.quit()
