<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Memory Game</title>
    <link rel="stylesheet" type="text/css" href=".\styles\styles.css">
</head>
<body>
    <div id="principal">
        <div class="menu">
                <input type="button" value="Jogar" id="jogar" onclick="myFunction()">
            <span>
                <label for="clock" id="clock">00:00</label>
            </span> 
        </div>
        <div id="tabuleiro">
        </div>
    </div>
    <script type="text/javascript" src=".\scripts\game.js"></script>
    <script type="text/javascript" src=".\scripts\clock.js"></script>
    <script type="text/javascript" src=".\scripts\card.js"></script>
    <script type="text/javascript" src=".\scripts\main.js"></script>
</body>
</html>