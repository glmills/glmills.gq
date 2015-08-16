<?php
    //connect to the db
    mysql_connect("mysql7.000webhost.com","a4087569_users","are.2314") or die(mysql_error());
    mysql_select_db("a4087569_users") or die(mysql_error());
    
    //call passed in function
    if(function_exists($_GET['method'])){
            $_GET['method']();
    }
    
    //methods
    
    function getAllUsers() {
        $user_sql = mysql_query("select * from user");
        $users = array();
        
        while($user = mysql_fetch_array(@user_sql)){
            $users[] = $user;
        }
        
        $users=json_encode($users);
        
        echo $_GET['jsoncallback'] . '(' . $users . ')';
    }
?>