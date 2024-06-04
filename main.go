package main

import (
	"context"
	"fmt"
	"github.com/chromedp/chromedp"
)

func main() {
	// create a new instance of the application using Chromedp
	ctx, cancel := chromedp.NewContext(context.Background())
	defer cancel()

	var result string
	err := chromedp.Run(ctx,
		chromedp.Navigate(`https://factorialhr.es/login`),
		chromedp.WaitVisible(`#email`),
		chromedp.SendKeys(`#email`, `your-email@example.com`),
		chromedp.SendKeys(`#password`, `your-password`),
		chromedp.Click(`#login-button`),
		chromedp.WaitVisible(`#dashboard`),
		chromedp.Navigate(`https://factorialhr.es/some-dashboard`),
		chromedp.Text(`.some-element`, &result),
	)
	if err != nil {
		fmt.Println("Error:", err)
		return
	}

	fmt.Println("Scraped Data:", result)
}
