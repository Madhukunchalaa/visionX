# Contact Form Implementation Walkthrough

I have implemented the contact form functionality by creating a PHP script and updating the HTML form.

## Changes Made

### 1. Created `contact.php`
This script handles the form submission. It:
-   Receives POST data from the form.
-   Sanitizes and validates the input.
-   Constructs an email message.
-   Sends the email using PHP's `mail()` function.
-   Redirects the user back to `contact.html` with a status parameter (success/error).

### 2. Updated `contact.html`
I modified the existing HTML to:
-   Wrap the input fields in a `<form>` tag.
-   Set the form `action` to `contact.php` and `method` to `POST`.
-   Added `name` attributes to all input fields so the PHP script can access the data:
    -   `full_name`
    -   `email`
    -   `company`
    -   `goal`
    -   `message`
    -   `timeline`

## How to Test

1.  **Deploy**: You need a web server with PHP support (like Apache/Nginx with PHP installed, or XAMPP/WAMP locally).
2.  **Configure Email**: Open `contact.php` and update the `$to` variable with your actual email address.
    ```php
    $to = "studio@studiox.com"; // Change this to your email
    ```
3.  **Run**: Open `contact.html` in your browser through the local server (e.g., `http://localhost/VisionX/contact.html`).
4.  **Submit**: Fill out the form and click Submit.
5.  **Check**:
    -   If configured correctly, you should receive an email.
    -   The page should redirect back to `contact.html` with `?status=success`.

> [!NOTE]
> The `mail()` function requires a configured mail server (SMTP) on your hosting environment. On a local machine (like XAMPP), you might need to configure `sendmail` or use a library like PHPMailer if the default `mail()` function doesn't work out of the box.
