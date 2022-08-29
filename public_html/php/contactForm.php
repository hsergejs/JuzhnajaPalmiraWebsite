<?php
        
        if(!empty($_POST["name"]) && !empty($_POST["email"]) && !empty($_POST["msg"]))
        {    
            $n = $_POST["name"];
            $e = $_POST["email"];
            $t = $_POST["msg"];
        
            if(!empty($n)){
                $n = sanitize($n);
            }
            
            if(!empty($e)){
                if(preg_match("/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/", $e)){
                    $e = sanitize($e);
                }
            }
            
            if(!empty($t)){
                $t = sanitize($t);
            }
            
            $toAddress = "stgsergei@mail.ru";
            $msgSubject = "Email с сайта Южная Пальмира";
            $msgHead = "MIME-Version: 1.0" . "\r\n";
            $msgHead .= "Content-type:text/html;charset=UTF-8" . "\r\n";
            $msgHead .= 'From: mail.juzhnajapalmira.ru' . "\r\n";
            $msgTxt = '<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <title>Апартаменты Южная Пальмира</title>
    <style>
        .head_foot {
            background-color: black;
            color: white;
            padding: 0px 0px 0px 20px;
            opacity: 0.8;
            overflow: auto;
        }
        
        .content {
            padding-left: 40px;
            background-color: #ecebeb;
            overflow: auto;
        }
    </style>
  </head>

  <body>
      <div class="head_foot">
          <div><h3>Южная Пальмира</h3></div>
      </div>
      
      <div class="content">
          <h4>От: <strong>'.$n.'</strong></h6>
          <h4>Email отправителя: <strong>'.$e.'</strong></h4>
          <h4>Текст сообшения:</h4>
          <p style="padding:20px 10px 20px 10px;">'.$t.'</p>
      </div>
       
      <div class="head_foot">
              <p>&copy; Южная Пальмира</p>
      </div>
  </body>
</html>
';
            
            $success = mail($toAddress, $msgSubject, $msgTxt, $msgHead);
            if($success){
                echo "success";
            }
            else{
                echo "invalid";
            }
        }
        else{
            exit('Unauthorized access');
        }
  
        function sanitize($data) {
            $data = trim($data);
            $data = stripslashes($data);
            $data = htmlspecialchars($data);
            
            return $data;
        }
?>