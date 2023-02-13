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
    <title>Question8</title>
</head>

<body>

    <div class="flex justify-center items-center text-white w-screen h-screen ">
        <div class="question h-auto w-2/5 flex flex-col justify-center items-center">
            <h1 class="p-1 border w-full text-center text-4xl font-bold">
                <p>8/10</p>
                Co je MS-DOS ?

            </h1>
            <form action="./Question8.php" method="post" class="w-full text-xl">
                <div class="border w-full flex items-center justify-between text-3xl flex-col gap-y-6 ">

                    <div class="flex justify-center items-center"><img src="../../assets/ms-dos.png" alt="isa" class="h-full w-2/6" /></div>

                </div>
                <div class=" p-4 border w-full flex items-center text-2xl ">
                    <input type="radio" value="os" name="q7" class="" />
                    <span class="ml-2">Operační systém firmy Microsoft vydaný v roce 1981</span>
                </div>
                <div class="p-4 border w-full flex items-center text-2xl">
                    <input type="radio" value="pc" name="q7" class="" />
                    <span class="ml-2">Nejprodávanější a jeden z nejpopulárnějších 8bitových domácích počítačů.</span>
                </div>
                <div class="p-4 border w-full flex items-center text-2xl">
                    <input type="radio" value="ram" name="q7" class="" />
                    <span class="ml-2">Speciální typ paměti RAM, který spolupracuje s grafickým procesorem vašeho počítače neboli GPU</span>
                </div>
                <div class="p-4 border w-full flex items-center text-2xl">
                    <input type="radio" value="company" name="q7" class="" />
                    <span class="ml-2">Největší světový výrobce polovodičových obvodů a dalších zařízení</span>
                </div>

                <div class=" w-full h-fit justify-end flex items-center text-3xl">
                    <input type="submit" name="submit-8" value="Pokračovat dále..." class="cursor-pointer text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-xl ">


                </div>
            </form>
        </div>
    </div>

</body>

</html>

<?php
if (!empty($_POST["submit-7"])) {

    if (!empty($_POST["hid"])) {

        if ($_POST["hid"] == "q6-3") {
            $_SESSION["body"] = $_SESSION["body"] += 10;
        }
    }
}
?>