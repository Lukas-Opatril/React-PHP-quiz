<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../../css/App.css">
  <script src="https://cdn.tailwindcss.com"></script>
  <title>Question4</title>
</head>

<body>
  <div class="flex justify-center items-center text-white w-screen h-screen ">
    <div class="question h-auto w-2/5 flex flex-col justify-center items-center">
      <h1 class="p-1 border w-full text-center text-4xl font-bold">
        <p>4/10</p>
        Co NEPATŘÍ mezi vstupní zařízení ?
      </h1>
      <form action="./Question4.php" method = "post" class="w-full text-xl">
        <div class=" p-4 border w-full flex items-center text-3xl ">
          <input type="radio" value="Klávesnice" name="q3" />
          <span class="ml-2">Klávesnice</span>
        </div>
        <div class="p-4 border w-full flex items-center text-3xl">
          <input type="radio" value="Myš" name="q3" />
          <span class="ml-2">Myš</span>
        </div>
        <div class="p-4 border w-full flex items-center text-3xl">
          <input type="radio" value="Trackpoint" name="q3" />
          <span class="ml-2">Trackpoint</span>
        </div>
        <div class="p-4 border w-full flex items-center text-3xl">
          <input type="radio" value="Tiskárna" name="q3" />
          <span class="ml-2">Tiskárna</span>
        </div>
        <div class=" w-full h-fit justify-end flex items-center text-3xl">
          <input type="submit" name="submit-4" value="Pokračovat dále..." class="cursor-pointer text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-xl  ">

        </div>
      </form>
    </div>
  </div>
</body>

</html>

<?php
if (!empty($_POST["submit-3"])) {
  if (!empty($_POST["q3"])) {
    $result = strtolower($_POST["q3"]);
    if ($result == "paralelní") {
      $_SESSION["body"] = $_SESSION["body"] += 10;
    }
  }
}

?>