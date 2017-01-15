<!DOCTYPE html>
<html manifest="pokemon.appcache">
  <head>
    <meta charset="utf-8">
    <title>Pokémon Driek</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
    <script src="js/jquery-3.1.1.min.js" charset="utf-8"></script>
    <script src="js/javascript.js" charset="utf-8"></script>
  </head>
  <body>
    <nav>
      <ul>
        <div class="container">
          <li style="width: 50px;"><img src="http://i1.wp.com/nintendo-papercraft.com/wp-content/uploads/2014/04/pokeball.png?resize=512%2C376" onclick="getPokemonById();" width="100%"
            class="imgLogo"></li>
          <li><a href="index.php">Home</a></li>
          <li><a href="?page=pokemon" >Pokémon</a></li>
          <li><a href="?page=pokedex">Pokédex</a></li>
          <audio id="player" src="Music/background.mp3" autoplay="true" onloadeddata="setHalfVolume()" loop="true"></audio>
          <li id="play" onclick="document.getElementById('player').play(); document.getElementById('play').style.display='none'; document.getElementById('pause').style.display='block';" style="display: none; float:right;"><a href="#"><i class="fa  fa-volume-off"></i></a></li>
          <li id="pause" onclick="document.getElementById('player').pause(); document.getElementById('play').style.display='block'; document.getElementById('pause').style.display='none';" style=" float:right"><a href="#"><i class="fa fa-volume-up"></i></a></li>
        </div>
      </ul>
    </nav>
    <main>
      <?php
	  //get page parameter
        if(isset($_GET['page']))
        {
          $page = $_GET['page'];
          switch($page)
  				{
  					case 'pokemon': include("pokemon.php");
  								break;
  					case 'pokedex': include("pokedex.php");
  								break;
          }
        }
       ?>
  </body>
</html>
