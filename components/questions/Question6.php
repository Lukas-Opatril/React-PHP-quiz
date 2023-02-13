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
  <script>
    document.addEventListener("click", function(event) {
      if (event.target.tagName === "IMG") {
        const imgArray = Array.from(document.querySelectorAll("IMG"));
        imgArray.forEach((oneImg) => {
          oneImg.classList.remove("chosen-img");
        });
        document.getElementById("hidden").removeAttribute("value");
        event.target.classList.add("chosen-img");
        document
          .getElementById("hidden")
          .setAttribute("value", `${event.target.alt}`);
      }
    });
  </script>
  <title>Question7</title>
</head>

<body>
  <div class="flex justify-center items-center text-white w-screen h-screen ">
    <div class=" question h-auto w-3/5 flex flex-col justify-center items-center  ">
      <h1 class="p-1  w-full text-center text-4xl font-bold border">
        <p>7/10</p>
        Klikni na obrázek, na kterém se nachazí DDR 2 RAM
      </h1>
      <form class="w-full h-auto flex flex-row justify-center text-xl gap-x-5 border  ">
        <div class="my-3">
          <img src="../../assets/ddr4-2.jpg" alt="q6-1" class="h-full w-48 cursor-pointer hover:border-8 hover:border-blue-500 " />
        </div>
        <div class="my-3">
          <img src="../../assets/ddr4.jpg" alt="q6-2" class="h-full w-48 cursor-pointer hover:border-8 hover:border-blue-500" />
        </div>
        <div class=" my-3">
          <img src="../../assets/ddr2.jpg" alt="q6-3" class="h-full w-48 cursor-pointer hover:border-8 hover:border-blue-500" />
        </div>
        <div class="my-3 ">
          <img src="../../assets/ddr1.jpg" alt="q6-4" class="h-full w-48 cursor-pointer hover:border-8 hover:border-blue-500" />
        </div>

      </form>
      <form method="post" action="./Question7.php">
        <input type="hidden" name="hid" value="" id="hidden" />
        <div class="flex h-fit w-full justify-center   ">

          <input type="submit" name="submit-7" value="Pokračovat dále..." class=" cursor-pointer my-3 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-xl  ">
        </div>
      </form>

    </div>
  </div>

</body>

</html>

<?php
if (!empty($_POST["submit-6"])) {
  if (!empty($_POST["q5"])) {
    if ($_POST["q5"] == 4) {
      $_SESSION["body"] = $_SESSION["body"] += 10;
      
    }
  }
}

?>