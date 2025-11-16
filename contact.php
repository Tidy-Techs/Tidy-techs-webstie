<?php
header('Content-Type: application/json');

if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $name = strip_tags(trim($_POST['name']));
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $phone = strip_tags(trim($_POST['phone']));
    $message = strip_tags(trim($_POST['message']));

    if(empty($name) || empty($email) || empty($message)){
        echo json_encode(['success'=>false, 'message'=>'Please fill in all required fields.']);
        exit;
    }

    $to = "juniormtshali19@gmail.com"; // your email
    $subject = "New Contact Form Message from $name";
    $body = "Name: $name\nEmail: $email\nPhone: $phone\n\nMessage:\n$message

