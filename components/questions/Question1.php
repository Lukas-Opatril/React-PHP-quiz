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
  <title>Question2</title>
</head>

<body>
  <div class="flex justify-center items-center text-white w-screen h-screen ">
    <div class="question h-auto w-2/5 flex flex-col justify-center items-center">
      <h1 class="p-1 border w-full text-center text-4xl font-bold">
        <p>2/10</p>
        Jaké verze má rozhrání PCI-Express ?
      </h1>
      <form action="./Question2.php" method="post" class="w-full text-xl">
        <div class=" p-4 border w-full flex items-center text-3xl ">
          <input type="checkbox" value="PCIe 1.0" name="check1[]" />
          <span class="ml-2">PCIe 1.0</span>
        </div>
        <div class="p-4 border w-full flex items-center text-3xl">
          <input type="checkbox" value="PCIe 2.0" name="check1[]" />
          <span class="ml-2">PCIe 2.0</span>
        </div>
        <div class="p-4 border w-full flex items-center text-3xl">
          <input type="checkbox" value="PCIe 7.5" name="check1[]" />
          <span class="ml-2">PCIe 7.5</span>
        </div>
        <div class="p-4 border w-full flex items-center text-3xl">
          <input type="checkbox" value="PCIe 6.0" name="check1[]" />
          <span class="ml-2">PCIe 6</span>
        </div>
        <div class=" w-full h-fit justify-end flex items-center text-3xl">
          <input type="submit" value="Pokračovat dále..." name="submit-2" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-xl  ">


        </div>
      </form>
    </div>
  </div>
</body>

</html>

<?php
if (!empty($_POST["submit-1"])) {
  $body = 0;
  if (!empty($_POST["q0"])) {
    if ($_POST["q0"] == "ESA") {
      $body += 10;
    }
  }

  $_SESSION["body"] = $body;
}

?>