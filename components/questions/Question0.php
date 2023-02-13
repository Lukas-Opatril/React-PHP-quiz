<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../../css/App.css">
  <script src="https://cdn.tailwindcss.com"></script>
  <title>Question1</title>
</head>

<body>
  <div class="flex justify-center items-center text-white w-screen h-screen ">
    <div class="question h-auto w-2/5 flex flex-col justify-center items-center">
      <h1 class="p-1 border w-full text-center text-4xl font-bold">
        <p>1/10</p>
        Co nepatří mezi interní sběrnice pro karty ?
      </h1>
      <form action="./Question1.php " method="post" class="w-full text-xl">
        <div class=" p-4 border w-full flex items-center text-3xl ">
          <input type="radio" name="q0" id="" value="PCI" />
          <span class="ml-2">PCI</span>
        </div>
        <div class="p-4 border w-full flex items-center text-3xl">
          <input type="radio" name="q0" id="" value="AGP" />
          <span class="ml-2">AGP</span>
        </div>
        <div class="p-4 border w-full flex items-center text-3xl">
          <input type="radio" name="q0" id="" value="ISA" />
          <span class="ml-2">ISA</span>
        </div>
        <div class="p-4 border w-full flex items-center text-3xl">
          <input type="radio" name="q0" id="" value="ESA" />
          <span class="ml-2">ESA</span>
        </div>
        <div class=" w-full h-fit justify-end flex items-center text-3xl">
          <input type="submit" value = "Pokračovat dále..."name="submit-1" class="cursor-pointer text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-xl  ">
          

        </div>
      </form>
    </div>
  </div>

</body>

</html>