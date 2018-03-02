$(document).ready(function() {

    var displayNumber = Math.floor(Math.random() * (90 - 45) + 45);
    var wins = 0;
    var losses = 0;
    var totalScore = 0; 
    var numberArray = [];
  
    function picknums() {
  
      for(i =0 ; numberArray.length < 4; i++){
        var pickRandom = Math.floor(Math.random() * (12 - 1) + 1);
  
        if(numberArray.indexOf(pickRandom) < 0){
          numberArray.push(pickRandom);
          var yellow1 = $(".yellow1");
          var green1 = $(".green1");
          var red1 = $(".red1");
          var blue1 = $(".blue1");
          yellow1.attr("data-switchvalue", numberArray[0]);
          green1.attr("data-switchvalue", numberArray[1]);
          red1.attr("data-switchvalue", numberArray[2]);
          blue1.attr("data-switchvalue", numberArray[3]);        
        }
      } 
    }
  
  picknums();
  console.log(numberArray);
  
  $("#display-number").html("<span>" + displayNumber + "</span>");
  
    function resetArray() {
  
    numberArray = [];
      // $("#total-score-display").html("<span>" + totalScore + "</span>");
    displayNumber = Math.floor(Math.random() * (120 - 19) + 19);
    $("#display-number").html("<span>" + displayNumber + "</span>");
  }
    
    function writeStats() {
  
      $("#total-score-display").html("<span>" + totalScore + "</span>");
      if (totalScore === displayNumber) {
        resetArray();
        console.log('you win');
        
        wins++;
        totalScore = 0;
        $('#win').html('Wins: ' + wins);
        picknums();
        console.log(numberArray);  
        resetGame();
        // $("#total-score-display").html("<span>" + totalScore + "</span>");
        
  
      } else if (totalScore >= displayNumber) {
        resetArray();
        console.log("You lose!!");
        // $("#total-score-display").html("<span>" + totalScore + "</span>");
        losses++;
        totalScore = 0;
        $('#loss').html('Losses: ' + losses);
        picknums();
        console.log(numberArray); 
        resetGame();
  
      }
    }
  
  
    function resetGame() {
      $("#total-score-display").html(totalScore);
      if(wins === 5 || losses === 5) {
      
      wins = 0;
      losses = 0;
      $('#win').html('Wins: ' + wins);
      $('#loss').html('Losses: ' + losses);
      alert("Play Again!");
  
      }
    }
  
  
    $(".yellow1").on("click", function() { 
     var yellow1value = ($(this).attr("data-switchvalue"));
     yellow1value = parseInt(yellow1value);
     totalScore += yellow1value;
     console.log(yellow1value);
     writeStats();
   });
  
    $(".green1").on("click", function() { 
      var green1value = ($(this).attr("data-switchvalue"));
      green1value = parseInt(green1value);
      totalScore += green1value;
      console.log(green1value);
      writeStats();
    });
  
    $(".red1").on("click", function() { 
      var red1value = ($(this).attr("data-switchvalue"));
      red1value = parseInt(red1value);    
      totalScore += red1value;
      console.log(red1value);
      writeStats();
    });
  
    $(".blue1").on("click", function() { 
      var blue1value = ($(this).attr("data-switchvalue"));
      blue1value = parseInt(blue1value);
      totalScore += blue1value;
      console.log(blue1value);    
      writeStats();
    });
  
    
  
  
  });
  
  
  