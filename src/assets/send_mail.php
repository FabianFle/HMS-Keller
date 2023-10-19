<?php

$recipient = 'fabianflegler1@yahoo.de';

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case ("POST"): //Send the email;

        $subject = "Von: " . $_POST['nameField'];
        $headers = "E-Mail: ". $_POST['emailField'];
        $headers2 = "Telefon Nummer: ". $_POST['phoneField'];

        mail($recipient, $subject, $headers, $headers2, $_POST['messageField']);
        break;
    default: //Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}
?>
