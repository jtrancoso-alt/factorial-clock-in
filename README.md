# factorial-clock-in

This project is a script to automate the Factorial clock in and out using Node.js and Puppeteer.
It checks if the clocking is already started and clicks on the corresponding button.

To run it you will need to:

## 1. Install Dependencies:

Intall Node.js and Puppeteer by running these commands:

```ruby
sudo apt update
sudo apt install nodejs npm
```

```ruby
npm install puppeteer dotenv
```

## 2. Set up environment varialbes

Create a .env file in your project directory:

```ruby
touch .env
```

And add your email and password variables:

```ruby
EMAIL="your@email.com"
PASSWORD="yourpassword"
```

## 3. Run the Script

Run it with:

```ruby
node factorial_clock_in.js
```
