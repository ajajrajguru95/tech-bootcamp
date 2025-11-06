<?php
//start session
// session_start();
// echo $_SESSION["name"]; 

//print
    echo "Hello World!";
    //variable
    $name = "user"; //user conditional

    echo $name;

    $counter = 1;
    $test_array = array('test','test2');    
    var_dump($test_array);



    //PHP Math Functions
    $min_value = min(0, 150, 30, 20, -8, -200,100);
    echo $min_value;

    $max_value = max(0, 150, 30, 20, -8, -200);

    echo $max_value;

    $random_value = rand();

    echo $random_value;

    echo date("d/m/Y");


    //echo(sqrt(64));

    //echo(round(0.60));

    //echo(rand());

    //operators


    //loops

    //date function 
    
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<link rel="stylesheet" href="style.css"> 
</head>
<body>
	<h1>PHP Concepts</h1>
    
    <div class="form-wrapper">
        <h2>Student Profile Form </h2>
		<form id="contactForm" action="process_form.php" method="POST">
		    <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
            </div>
            
            <div class="form-group">
                <label for="age">Age:</label>
                <input type="number" id="age" name="age" required>
            </div>
            
            <div class="form-group">
                <label for="mark_total">Marks total:</label>
                <input type="number" id="mark_total" name="mark_total" required>
            </div>
            
            <div class="form-group">
                <label for="mark_scored">Marks scored:</label>
                <input type="number" id="mark_scored" name="mark_scored" required>
            </div>
            
            <button type="submit" id="submit-btn">Submit</button>	


              <div class="page-message" id="page-message">        </div>	    
		</form>


       <!--  <div class="result-wrapper">
            <div class="progress-container">
                <div id="progressBar" class="progress-bar" style="width: 0%">0%</div>
            </div>
        </div> -->
		
	</div>

    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <script src="script.js"></script>
</body>
</html>