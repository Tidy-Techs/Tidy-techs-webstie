<?php
header('Content-Type: application/json');

if($_SERVER['REQUEST_METHOD'] === 'POST'){
    // Sanitize inputs
    $name = strip_tags(trim($_POST['name']));
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $phone = strip_tags(trim($_POST['phone']));
    $message = strip_tags(trim($_POST['message']));

    // Validate required fields
    if(empty($name) || empty($email) || empty($message)){
        echo json_encode(['success'=>false, 'message'=>'Please fill in all required fields.']);
        exit;
    }

    // Recipient email
    $to = "juniormtshali19@gmail.com"; // <-- change to your email
    $subject = "New Contact Form Message from $name";
    
    $body = "You have received a new message from your website contact form.\n\n";
    $body .= "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Phone: $phone\n";
    $body .= "Message:\n$message\n";

    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send email
    if(mail($to, $subject, $body, $headers)){
        echo json_encode(['success'=>true, 'message'=>'Thank you! Your message has been sent.']);
    } else {
        echo json_encode(['success'=>false, 'message'=>'Oops! Something went wrong, please try again later.']);
    }

} else {
    echo json_encode(['success'=>false, 'message'=>'Invalid request method.']);
}
?>


