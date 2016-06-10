//planets names and values
$(document).ready(function(){
var allplanets = [
 ['the Sun', 27.9],
 ['Jupiter', 2.54],
 ['Neptune', 1.19],
 ['Saturn', 1.08],
 ['Earth', 1],
 ['the Moon', 0.1655],
 ['Mars', 0.3895],
 ['Jupiter', 2.640],
 ['Saturn', 1.139],
 ['Uranus', 0.917],
 ['Neptune', 1.148],
 ['Pluto', 0.06]
]; 
var planet;
var value;
var total;
var child = 0;
// select elements option tags
for( var i=1; i<= allplanets.length; i += 1){
    $("select option:nth-child("+i+")").html(allplanets[child][0]);
    child += 1;
}
    $("button").click(function(){    // calculate on weight
          $(allplanets).each(function(i){
           planet = allplanets[i][0];      // all planets names
           value = allplanets[i][1];        // all the planets values
              total = Math.floor($("#weight").val() * value);            // calculate on planet
              if (planet === $("#planet option:selected").text()){    // result
                  $("#result2").text(
                  "If you were on " +$( "#planet option:selected").text()+ ", you would weight:  " +   total +" lbs"
                  );
                  // picture of each planet
                
       }
           i += 1;
      });  
    });    
});