<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>pierwszy php</title>
</head>
<body>
    <p>
        <?php
            // Każdy zwrot znajdujący się w tablicy powinien zostać zamieniony w tekście na ciąg [ocenzurowano]
            function cenzura($tekst, $zakazane) {
                foreach ($zakazane as $word) {
                    $tekst = str_replace($word,'[ocenzurowano]',$tekst);
                }
                return $tekst;
            }
            
            $zakazane = array("że", 'złe',"zło");
            $tekst = "Wszystcy wiemy że zło jest złe.";
            echo cenzura($tekst,$zakazane);

            
        ?>
    </p>
    
</body>
</html>