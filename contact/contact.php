<?php

$hostname = "localhost";
$userid = "root";
$pass = "sneha";
$dbname = "connect";
$conn = new mysqli($hostname,$userid,$pass,$dbname);

if(!$conn){
    echo "error in getting connection";
}
else{
    echo "connection successfull";
}
$usname = $_POST['uname'];
$usemail = $_POST['uemail'];
$msg = $_POST['msg'];
$sql = "insert into con values('$usname','$usemail','$msg');";
$result = mysqli_query($conn,$sql);



?>