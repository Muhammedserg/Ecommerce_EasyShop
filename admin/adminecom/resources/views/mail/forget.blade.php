<!DOCTYPE html>
<html>
<head>
    <title>Passwort vergessen</title>
</head>
<body>
    Hallo, <br><br>

    Klicken Sie auf den folgenden Link, um Ihr Passwort zu ändern: 
    <a href="http://localhost:3000/reset/{{ $token }}">Hier klicken</a>
    <br><br>
    Ihr Pincode lautet: {{ $token }}

</body>
</html>
