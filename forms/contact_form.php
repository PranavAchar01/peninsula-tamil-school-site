<?php
// Contact Form Handler for Peninsula Tamil School
// This script processes contact form submissions

// Enable error reporting for development (disable in production)
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Set response header
header('Content-Type: text/html; charset=utf-8');

// Check if form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Sanitize and collect form data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $phone = htmlspecialchars(trim($_POST['phone']));
    $subject = htmlspecialchars(trim($_POST['subject']));
    $message = htmlspecialchars(trim($_POST['message']));
    
    // Validate required fields
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        die('<h1>Error</h1><p>Please fill in all required fields. <a href="../contact.html">Go back</a></p>');
    }
    
    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die('<h1>Error</h1><p>Invalid email address. Please go back and try again.</p>');
    }
    
    // Map subject codes to readable names
    $subject_names = [
        'enrollment' => 'Enrollment Inquiry',
        'volunteer' => 'Volunteer Opportunity',
        'general' => 'General Question',
        'feedback' => 'Feedback',
        'other' => 'Other'
    ];
    
    $subject_display = isset($subject_names[$subject]) ? $subject_names[$subject] : $subject;
    
    // Prepare email to school admin
    $to = "info@peninsulatamilschool.org";
    $email_subject = "Contact Form: " . $subject_display . " - " . $name;
    
    $email_message = "
    <html>
    <head>
        <title>Contact Form Submission</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            h2 { color: #D32F2F; border-bottom: 2px solid #D32F2F; padding-bottom: 10px; }
            .field { margin: 15px 0; padding: 10px; background: #f9f9f9; border-left: 4px solid #D32F2F; }
            .label { font-weight: bold; color: #555; }
            .value { margin-top: 5px; }
            .message-box { padding: 15px; background: #fff; border: 1px solid #ddd; margin-top: 10px; }
        </style>
    </head>
    <body>
        <div class='container'>
            <h1>New Contact Form Submission</h1>
            <p>Submission Date: " . date('F d, Y h:i A') . "</p>
            
            <div class='field'>
                <div class='label'>Name:</div>
                <div class='value'>$name</div>
            </div>
            
            <div class='field'>
                <div class='label'>Email:</div>
                <div class='value'>$email</div>
            </div>
            
            <div class='field'>
                <div class='label'>Phone:</div>
                <div class='value'>" . ($phone ? $phone : 'Not provided') . "</div>
            </div>
            
            <div class='field'>
                <div class='label'>Subject:</div>
                <div class='value'>$subject_display</div>
            </div>
            
            <div class='field'>
                <div class='label'>Message:</div>
                <div class='message-box'>$message</div>
            </div>
        </div>
    </body>
    </html>
    ";
    
    // Email headers
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: Peninsula Tamil School <noreply@peninsulatamilschool.org>" . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    
    // Send email to school
    $mail_sent = mail($to, $email_subject, $email_message, $headers);
    
    // Prepare auto-reply to sender
    $auto_reply_subject = "We received your message - Peninsula Tamil School";
    $auto_reply_message = "
    <html>
    <head>
        <title>Message Received</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #D32F2F; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; background: #f9f9f9; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h1>Message Received</h1>
            </div>
            <div class='content'>
                <p>Dear $name,</p>
                
                <p>Thank you for contacting Peninsula Tamil School. We have received your message regarding: <strong>$subject_display</strong></p>
                
                <p>Our team will review your inquiry and respond within 1-2 business days.</p>
                
                <p>If your matter is urgent, please feel free to call us at (650) 555-1234.</p>
                
                <p>Best regards,<br>
                <strong>Peninsula Tamil School Team</strong></p>
            </div>
            <div class='footer'>
                <p>Peninsula Tamil School | Foster City, CA 94404<br>
                info@peninsulatamilschool.org | (650) 555-1234<br>
                <a href='https://peninsulatamilschool.org'>www.peninsulatamilschool.org</a></p>
            </div>
        </div>
    </body>
    </html>
    ";
    
    // Send auto-reply
    mail($email, $auto_reply_subject, $auto_reply_message, $headers);
    
    // Display success message
    echo "
    <!DOCTYPE html>
    <html lang='en'>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>Message Sent Successfully</title>
        <link rel='stylesheet' href='../css/styles.css'>
        <style>
            .success-container {
                max-width: 700px;
                margin: 50px auto;
                padding: 40px;
                text-align: center;
                background: white;
                border-radius: 10px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            .success-icon {
                font-size: 80px;
                color: #4CAF50;
                margin-bottom: 20px;
            }
            .success-title {
                color: #D32F2F;
                font-size: 32px;
                margin-bottom: 20px;
            }
            .success-message {
                font-size: 18px;
                line-height: 1.6;
                color: #555;
                margin-bottom: 30px;
            }
            .btn {
                display: inline-block;
                padding: 15px 30px;
                margin: 0 10px;
                background: #D32F2F;
                color: white;
                text-decoration: none;
                border-radius: 5px;
                font-size: 16px;
                transition: background 0.3s;
            }
            .btn:hover {
                background: #B71C1C;
            }
        </style>
    </head>
    <body>
        <div class='success-container'>
            <div class='success-icon'>✓</div>
            <h1 class='success-title'>Message Sent Successfully!</h1>
            <div class='success-message'>
                <p>Thank you for contacting us, <strong>$name</strong>!</p>
                <p>We have received your message and will respond to <strong>$email</strong> within 1-2 business days.</p>
                <p>A confirmation email has been sent to your inbox.</p>
            </div>
            <a href='../index.html' class='btn'>Return to Home</a>
        </div>
    </body>
    </html>
    ";
    
} else {
    // If accessed directly without POST
    header('Location: ../contact.html');
    exit();
}
?>