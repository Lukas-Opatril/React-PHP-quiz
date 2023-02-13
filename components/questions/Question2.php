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
    <title>Question3</title>
</head>

<body>
    <div class="flex justify-center items-center text-white w-screen h-screen ">
        <div class="question h-auto w-2/5 flex flex-col justify-center items-center">
            <h1 class="p-1 border w-full text-center text-4xl font-bold">
                <p>3/10</p>
                Napiš, zda je sběrnice paralelní či sériová ?
            </h1>
            <form action="./Question3.php" method = "post" class="w-full text-xl">
                <div class="p-10 border w-full flex items-center justify-between text-3xl flex-col gap-y-6 ">

                    <p class="w-full"><img src="../../assets/picture1.jpg" alt="isa" class="w-full" /></p>
                    <input type="text" name="q2" placeholder="hybridní" class="text-black rounded-lg text-center w-full text-4xl py-1" />
                </div>

                <div class=" w-full h-fit justify-end flex items-center text-3xl">
                    <input name="submit-3" type="submit" value="Pokračovat dále..." class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-xl  ">


                </div>
            </form>
        </div </body>

</html>

>

<?php
if (!empty($_POST["submit-2"])) {
    if (!empty($_POST["check1"])) {
        if (in_array("PCIe 1.0", $_POST["check1"]) && in_array("PCIe 2.0", $_POST["check1"])) {
            $_SESSION["body"] = $_SESSION["body"] += 10;
        }
    }
}

?>