<?php
// Registration Form Handler for Peninsula Tamil School
// This script processes student registration form submissions

// Enable error reporting for development (disable in production)
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Set response header
header('Content-Type: text/html; charset=utf-8');

// Check if form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Sanitize and collect form data
    $student_first_name = htmlspecialchars(trim($_POST['student_first_name']));
    $student_last_name = htmlspecialchars(trim($_POST['student_last_name']));
    $date_of_birth = htmlspecialchars(trim($_POST['date_of_birth']));
    $current_grade = htmlspecialchars(trim($_POST['current_grade']));
    $tamil_level = htmlspecialchars(trim($_POST['tamil_level']));
    $current_school = htmlspecialchars(trim($_POST['current_school']));
    
    $parent_first_name = htmlspecialchars(trim($_POST['parent_first_name']));
    $parent_last_name = htmlspecialchars(trim($_POST['parent_last_name']));
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $phone = htmlspecialchars(trim($_POST['phone']));
    $address = htmlspecialchars(trim($_POST['address']));
    $city = htmlspecialchars(trim($_POST['city']));
    $state = htmlspecialchars(trim($_POST['state']));
    $zip = htmlspecialchars(trim($_POST['zip']));
    
    $emergency_name = htmlspecialchars(trim($_POST['emergency_name']));
    $emergency_phone = htmlspecialchars(trim($_POST['emergency_phone']));
    $emergency_relationship = htmlspecialchars(trim($_POST['emergency_relationship']));
    
    $how_heard = htmlspecialchars(trim($_POST['how_heard']));
    $special_needs = htmlspecialchars(trim($_POST['special_needs']));
    $comments = htmlspecialchars(trim($_POST['comments']));
    
    $photo_consent = isset($_POST['photo_consent']) ? 'Yes' : 'No';
    $volunteer = isset($_POST['volunteer']) ? 'Yes' : 'No';
    
    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die('<h1>Error</h1><p>Invalid email address. Please go back and try again.</p>');
    }
    
    // Prepare email to school admin
    $to = "info@peninsulatamilschool.org";
    $subject = "New Student Registration: " . $student_first_name . " " . $student_last_name;
    
    $message = "
    <html>
    <head>
        <title>New Student Registration</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 800px; margin: 0 auto; padding: 20px; }
            h2 { color: #D32F2F; border-bottom: 2px solid #D32F2F; padding-bottom: 10px; }
            .section { margin: 20px 0; padding: 15px; background: #f9f9f9; border-left: 4px solid #D32F2F; }
            .field { margin: 10px 0; }
            .label { font-weight: bold; color: #555; }
            .value { margin-left: 10px; }
        </style>
    </head>
    <body>
        <div class='container'>
            <h1>New Student Registration</h1>
            <p>Submission Date: " . date('F d, Y h:i A') . "</p>
            
            <div class='section'>
                <h2>Student Information</h2>
                <div class='field'><span class='label'>Name:</span><span class='value'>$student_first_name $student_last_name</span></div>
                <div class='field'><span class='label'>Date of Birth:</span><span class='value'>$date_of_birth</span></div>
                <div class='field'><span class='label'>Current Grade:</span><span class='value'>$current_grade</span></div>
                <div class='field'><span class='label'>Tamil Level:</span><span class='value'>$tamil_level</span></div>
                <div class='field'><span class='label'>Current School:</span><span class='value'>$current_school</span></div>
            </div>
            
            <div class='section'>
                <h2>Parent/Guardian Information</h2>
                <div class='field'><span class='label'>Name:</span><span class='value'>$parent_first_name $parent_last_name</span></div>
                <div class='field'><span class='label'>Email:</span><span class='value'>$email</span></div>
                <div class='field'><span class='label'>Phone:</span><span class='value'>$phone</span></div>
                <div class='field'><span class='label'>Address:</span><span class='value'>$address, $city, $state $zip</span></div>
            </div>
            
            <div class='section'>
                <h2>Emergency Contact</h2>
                <div class='field'><span class='label'>Name:</span><span class='value'>$emergency_name</span></div>
                <div class='field'><span class='label'>Phone:</span><span class='value'>$emergency_phone</span></div>
                <div class='field'><span class='label'>Relationship:</span><span class='value'>$emergency_relationship</span></div>
            </div>
            
            <div class='section'>
                <h2>Additional Information</h2>
                <div class='field'><span class='label'>How did you hear about us?</span><span class='value'>$how_heard</span></div>
                <div class='field'><span class='label'>Special Needs:</span><span class='value'>$special_needs</span></div>
                <div class='field'><span class='label'>Comments:</span><span class='value'>$comments</span></div>
                <div class='field'><span class='label'>Photo Consent:</span><span class='value'>$photo_consent</span></div>
                <div class='field'><span class='label'>Volunteer Interest:</span><span class='value'>$volunteer</span></div>
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
    $mail_sent = mail($to, $subject, $message, $headers);
    
    // Prepare confirmation email to parent
    $parent_subject = "Registration Confirmation - Peninsula Tamil School";
    $parent_message = "
    <html>
    <head>
        <title>Registration Confirmation</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #D32F2F; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; background: #f9f9f9; }
            .button { display: inline-block; padding: 10px 20px; background: #D32F2F; color: white; text-decoration: none; margin: 10px 0; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h1>Registration Received!</h1>
            </div>
            <div class='content'>
                <p>Dear $parent_first_name $parent_last_name,</p>
                
                <p>Thank you for registering <strong>$student_first_name $student_last_name</strong> for the 2024-2025 academic year at Peninsula Tamil School!</p>
                
                <p>We have received your registration and will review it shortly. You will receive a confirmation email within 2-3 business days with:</p>
                <ul>
                    <li>Payment instructions</li>
                    <li>Class assignment details</li>
                    <li>Important dates and calendar</li>
                    <li>Required forms and documents</li>
                </ul>
                
                <p><strong>Next Steps:</strong></p>
                <ol>
                    <li>Wait for our confirmation email</li>
                    <li>Complete the payment process</li>
                    <li>Submit any required documents</li>
                    <li>Attend orientation (date TBD)</li>
                </ol>
                
                <p>If you have any questions, please don't hesitate to contact us at info@peninsulatamilschool.org or call (650) 555-1234.</p>
                
                <p>We're excited to have $student_first_name join our Tamil learning community!</p>
                
                <p>Warm regards,<br>
                <strong>Peninsula Tamil School Administration</strong></p>
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
    
    // Send confirmation email to parent
    mail($email, $parent_subject, $parent_message, $headers);
    
    // Display success message
    echo "
    <!DOCTYPE html>
    <html lang='en'>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>Registration Successful</title>
        <link rel='stylesheet' href='../css/styles.css'>
        <style>
            .success-container {
                max-width: 800px;
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
            .button-group {
                margin-top: 30px;
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
            .btn-secondary {
                background: #666;
            }
            .btn-secondary:hover {
                background: #444;
            }
        </style>
    </head>
    <body>
        <div class='success-container'>
            <div class='success-icon'>✓</div>
            <h1 class='success-title'>Registration Successful!</h1>
            <div class='success-message'>
                <p>Thank you for registering <strong>$student_first_name $student_last_name</strong> at Peninsula Tamil School!</p>
                <p>A confirmation email has been sent to <strong>$email</strong> with next steps and payment instructions.</p>
                <p>We will contact you within 2-3 business days with class assignment details.</p>
            </div>
            <div class='button-group'>
                <a href='../index.html' class='btn'>Return to Home</a>
                <a href='../contact.html' class='btn btn-secondary'>Contact Us</a>
            </div>
        </div>
    </body>
    </html>
    ";
    
} else {
    // If accessed directly without POST
    header('Location: ../registration.html');
    exit();
}
?>