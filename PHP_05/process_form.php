<?php
$name = $_POST['name'];

//echo $name;

$age = $_POST['age'];
$mark_total = $_POST['mark_total'];
$mark_scored = $_POST['mark_scored']; 
$response = array();

//validate inputs
$error_msg = '';
$has_error = false;
if(empty($name)){
	$error_msg = 'Name is required';
	$has_error = true;
}elseif (empty($age)) {
	$error_msg = 'Age is required';
	$has_error = true;
}elseif(empty($mark_total) || empty($mark_scored)){
	$error_msg = 'Marks is required';
	$has_error = true;
}elseif($mark_total < $mark_scored){
	$error_msg = 'Marks scored should be lower than total morks.';
	$has_error = true;
}

// echo $has_error;
// echo $error_msg;


if($has_error){
	//return error msg
	$message = 'user registration failed';
	$response['has_error'] = $has_error;
	$response['message'] = $message;
}else{
	//add data to session
	//$_SESSION["name"] = $name;
	$message = 'user registered successfully';
	$response['message'] = $message;
}

echo json_encode($response);
exit();
?>