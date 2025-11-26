<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate input
    $name = strip_tags(trim($_POST["full_name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $company = strip_tags(trim($_POST["company"]));
    $goal = strip_tags(trim($_POST["goal"]));
    $message = strip_tags(trim($_POST["message"]));
    $timeline = strip_tags(trim($_POST["timeline"]));

    // Check for required fields
    if (empty($name) || empty($email) || empty($goal) || empty($message)) {
        // Redirect with error
        header("Location: contact.html?status=empty");
        exit;
    }

    // Recipient email address - CHANGE THIS TO YOUR EMAIL
    $to = "studio@studiox.com"; 
    
    $subject = "New Project Inquiry from $name";

    // Email body
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Company: $company\n";
    $email_content .= "Goal: $goal\n";
    $email_content .= "Timeline: $timeline\n\n";
    $email_content .= "Project Details:\n$message\n";

    // Email headers
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Send email
    if (mail($to, $subject, $email_content, $headers)) {
        // Success
        header("Location: contact.html?status=success");
    } else {
        // Failure
        header("Location: contact.html?status=error");
    }
} else {
    // If accessed directly without POST
    header("Location: contact.html");
}
?>
