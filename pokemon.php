<body>
      <section class="container">
        <div class="box">
          <div class="searchBox">
            <input type="text" id="txtSearch" class="txtSearch" name="txtSearch" onkeydown="checkIfEnterButton(event);" placeholder="Id of naam..." value="">
            <span id="searchButton" class="searchButton" onclick="getPokemonByNameOrId()"><i class="fa fa-search"></i>
            </span>
          </div>
          <article class="pokemonGeneralInfo">
            <center>
              <i class="fa fa-balance-scale"></i></i>

              <label id="pokemonName" class="pokemonName"></label>
              <figure>
                <img id="pokemonImage" class="pokemonImage" />
              </figure>
              <div class="types">
                <div class="typeHolder" id="type1"></div>
                <div class="typeHolder" id="type2"></div>
              </div>
              <div id="descriptionLoader" class="loader descriptionLoader"> </div>
              <p id="pokemonDescription" class="pokemonDescription"></p>
            </center>
          </article>
          <article id="pokemonDetailedInfo" class="pokemonDetailedInfo">
          <p id="pokemonWeight" class="pokemonWeight"></p>
          <p id="pokemonHeight" class="pokemonHeight"></p>
          </article>
          <center>
            <div id="loadingSpinner" class="loader loadingSpinner"></div>
          </center>
        </div>
      </section>
</body>
