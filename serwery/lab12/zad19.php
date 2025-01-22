<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>zadanie student</title>
</head>
<body>
    <p>
        <?php
            $plik_student = fopen("./lab12/KIE/student.txt","r");
            $polskie_na_lacine = array('ą' => 'a', 'ć' => 'c', 'ę' => 'e', 'ł' => 'l', 'ń' => 'n', 'ó' => 'o', 'ś' => 's','ż' => 'z', 'ź' => 'z');
            if ($plik_student){
                $tekst = fread($plik_student,filesize("./KIE/student.txt"));
                $tekst = str_replace(array_keys($polskie_na_lacine),array_values($polskie_na_lacine),$tekst);
                echo "$tekst";
                fclose($plik_student);
            }

        ?>
    </p>
    
</body>
</html>