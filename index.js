
// Set and get the cookies 
function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  // Setting cookie with username, colour then count and choosing a random colour for first page load
  function checkCookie() {
    let user = getCookie("username");
    let count = 1;
    let new_bgcolor = "";
    if (user != "") {
      count += 1;
      
  
      setCookie("username", user.split('/')[0] + "/" + user.split('/')[1] + "/" + (parseInt(user.split('/')[2]) + 1).toString(), 30);
      
    } else {
      let ballColor = [
        ['red'],
        ['blue']
      ];
      let randomBall = ballColor[Math.floor(Math.random() * ballColor.length)];
      new_bgcolor = randomBall[0];
        user = prompt("Please enter your name:","");
        if (user != "" && user != null) {
          setCookie("username", user + "/" + new_bgcolor + "/" + count.toString(), 30);
        }
    }
  
    // Always goes back to the previous new_bg colour which is the first colour you have seen on page load
    if (new_bgcolor != "") {
      document.getElementById("ball").style.backgroundColor = new_bgcolor;
    }
    else {
      document.getElementById("ball").style.backgroundColor = user.split('/')[1];
    }
  
    user = getCookie("username");
  
    // Condition to show text to the user based on the colour stored in cookie 
    if (user.split('/')[1] === "red"){
    
      document.getElementById("redBall").innerHTML = "Number of red balls seen by " + user.split('/')[0] + ": " + (user.split('/')[2]) ;
      
      
    } else {
      document.getElementById("blueBall").innerHTML = "Number of blue balls seen by " + user.split('/')[0] + ": " + (user.split('/')[2]);
      
    }
    
  }
  
  
  
  
  
  
  
  