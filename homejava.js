$(document).ready(function(){

  var state = '<img src="https://thumbs.dreamstime.com/x/closed-bank-vault-20503256.jpg"/>';
  var state_2;
  
 
  /* set default pics to bank vault */
  document.getElementById("text_1").innerHTML = state;
  document.getElementById("image").innerHTML = state;

  /* pics for Text_1 */
  
    $("#suomi").hover(function(){
         state = '<img src="https://s3.eu-central-1.amazonaws.com/gh-website-bucket/cv_g_horning_suomi.PNG"/>';
         document.getElementById("text_1").innerHTML = state;
        
    },
                      
    function(){
        state = '<img src="https://thumbs.dreamstime.com/x/closed-bank-vault-20503256.jpg"/>';
        document.getElementById("text_1").innerHTML = state;
        
    }); 
  
      $("#english").hover(function(){
         state = '<img src="https://s3.eu-central-1.amazonaws.com/gh-website-bucket/cv_g_horning.PNG"/>';
         document.getElementById("text_1").innerHTML = state;
        
    },
                          
    function(){
        state = '<img src="https://thumbs.dreamstime.com/x/closed-bank-vault-20503256.jpg"/>';
        document.getElementById("text_1").innerHTML = state;
   });
  
  /* pics for Image */
        
$("#suomi").hover(function(){
         state_2 = '<img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/Finland_national_ice_hockey_team_logo.svg/720px-Finland_national_ice_hockey_team_logo.svg.png"/>';
         document.getElementById("image").innerHTML = state_2;
        
    },
                      
    function(){
        state_2 = '<img src="https://thumbs.dreamstime.com/x/closed-bank-vault-20503256.jpg"/>';
        document.getElementById("image").innerHTML = state_2;
        
    }); 
  
      $("#english").hover(function(){
         state_2 = '<img src="https://unitedstatesofhockey.files.wordpress.com/2012/12/logo_usa_hockey.gif"/>';
         document.getElementById("image").innerHTML = state_2;
        
    },
                          
    function(){
        state_2 = '<img src="https://thumbs.dreamstime.com/x/closed-bank-vault-20503256.jpg"/>';
        document.getElementById("image").innerHTML = state_2;
        
    });
  
  /* set timer and random text generator with switch */
  var change_text;
  var x;

  var myVar = setInterval(myFunction, 1000);

  function myFunction() {
      x = Math.floor((Math.random() * 6) + 1);


  switch (x) {
      case 1:
      default:
          change_text = 'THE CLOUD';
          break;
      case 2:
          change_text = 'CLOUD COMPUTING';
          break;
      case 3:
          change_text = 'CLOUD SERVICES';
          break;
      case 4:
          change_text = 'PILVI';
          break;
      case 5:
          change_text = 'PILVIPALVELUT';
          break;
      case 6:
          change_text = "PILVITEKNOLOGIA";
  }
    if (click_event % 2 == 0)
    {
      document.getElementById("back").innerHTML = change_text;
     }
     else
     {
       document.getElementById("back").innerHTML = "";
  }
 }

 /* toggle random text if menu is active */
var click_event = 2;
  
  document.getElementById("menu").addEventListener("click", away_random);
  

function away_random() {
  click_event ++;
}
 
}); 