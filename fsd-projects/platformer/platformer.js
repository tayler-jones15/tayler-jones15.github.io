$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms
    //platform a//
    createPlatform(0, 400, 200, 10, "lightpink");
    //platform b//
    createPlatform(200, 300, 100, 10, "maroon");
    //platform c//
    createPlatform(700, 520, 130, 7, "lightpink");
    //platform d//
    createPlatform(520, 385, 130, 7, "lightpink");
    //platform e//
    createPlatform (950, 400, 100, 10, "lightpink");
    //platform f//
    createPlatform (1200, 300, 100, 10, "maroon");
    //platform g//
    createPlatform (1300, 200, 100, 10, "lightpink");
    //platform h//
    createPlatform (1050, 150, 100, 10, "lightpink");
    //platform i//
    createPlatform (950, 630, 100, 7, "darkseagreen");
    //platform fin//
    createPlatform (800, 200, 100, 10, "gold");





     

    // TODO 3 - Create Collectables
    createCollectable("starpng", 230, 260);
    createCollectable("starpng", 1000, 350);
    createCollectable("starpng", 1100, 120);
    createCollectable("starpng", 750, 500);
    createCollectable("starpng", 1350, 150);
    createCollectable("starpng", 850, 160);





    
    // TODO 4 - Create Cannons
    createCannon ("top", 1250, 3000);
    createCannon ("bottom", 400, 3000);
    createCannon ("left", 170, 3000);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
