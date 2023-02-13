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
    <title>Question6</title>
</head>

<body>

</body>

</html>
<div class="flex justify-center items-center text-white w-screen h-screen ">
    <div class="question h-auto w-2/5 flex flex-col justify-center items-center">
        <h1 class="p-1 border w-full text-center text-4xl font-bold">
            <p>6/10</p>
            Napiš, kolik pinů má konektor USB 2.0 ?
        </h1>
        <form action="./Question6.php" method="post" class="w-full text-xl">
            <div class="p-10 border w-full flex items-center justify-between text-3xl flex-col gap-y-6 ">
                <input type="number" name="q5" placeholder="6" class="text-black rounded-lg text-center w-full text-4xl py-1" />
            </div>
            <div class=" w-full h-fit justify-end flex items-center text-3xl">
                <input type="submit" name="submit-6" value="Pokračovat dále..." class="cursor-pointer text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-xl  ">


            </div>
        </form>
    </div>
</div>

<?php
if (!empty($_POST["submit-5"])) {
    if (!empty($_POST["hid"])) {
        $result = $_POST["hid"];
        if ($result == "q4-1") {
            $_SESSION["body"] = $_SESSION["body"] += 10;
        }
    }
}
?>