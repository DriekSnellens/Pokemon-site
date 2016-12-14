<nav>
  <ul>
    <div class="container">
      <li style="width: 50px;"><img src="http://i1.wp.com/nintendo-papercraft.com/wp-content/uploads/2014/04/pokeball.png?resize=512%2C376" onclick="getPokemonById();" width="100%"
        class="imgLogo"></li>
      <li><a href="index.php">Home</a></li>
      <li><a href="pokemon.php" >Pokémon</a></li>
      <li><a href="pokedex.php">Pokédex</a></li>
      <audio id="player" src="Music/background.mp3" autoplay="true" onloadeddata="setHalfVolume()"></audio>
      <li id="play" onclick="pauseMusic();" style="float: right;"><a href="#">Uit</a></li>
      <li id="pause" onclick="playMusic()" style="display: none; float: right;"><a href="#">Aan</a></li>
    </div>
  </ul>
</nav>
