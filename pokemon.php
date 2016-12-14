<body>
    <form method="post">
      <div class="container">
        <div class="box">
          <div id="searchBox">
            <input type="text" id="txtSearch" name="txtSearch" placeholder="Id of naam..." value=""> <span id="searchButton" onclick="getPokemonByNameOrId()"><i class="fa fa-search"></i></span>
          </div>
          <div id="pokemonGeneralInfo" class="col-1">
            <center>
              <label id="pokemonName"></label>
              <figure>
                <img id="pokemonImage" />
              </figure>
              <div id="types">
                <div class="typeHolder" id="type1"></div>
                <div class="typeHolder" id="type2"></div>
              </div>
              <div id="descriptionLoader" class="loader"> </div>
              <p id="pokemonDescription"></p>
            </center>
          </div>
          <center>
            <div id="loadingSpinner" class="loader">
            </div>
          </center>

          <div>

          </div>
        </div>
      </div>
    </form>
</body>
