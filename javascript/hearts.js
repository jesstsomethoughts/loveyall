// Hearts Animation
var brd = document.createElement("DIV");
		document.body.insertBefore(brd, document.getElementById("board"));

		const duration = 3000;
		const speed = 0.5;
		const cursorXOffset = 0;
		const cursorYOffset = -5;

		var hearts = [];
		
		function generateHeart(x, y, xBound, xStart, scale)
		{
			var heart = document.createElement("DIV");
			heart.setAttribute('class', 'heart');
			brd.appendChild(heart);
			heart.time = duration;
			heart.x = x;
			heart.y = y;
			heart.bound = xBound;
			heart.direction = xStart;
			heart.style.left = heart.x + "px";
			heart.style.top = heart.y + "px";
			heart.scale = scale;
			heart.style.transform = "scale(" + scale + "," + scale + ")";
			if(hearts == null)
				hearts = [];
			hearts.push(heart);
			return heart;
		}

		var down = false;
		var event = null;

		document.onmouseover = function(e) {
			down = true;
			event = e;
		}

        document.onmouseon = function(e) {
			down = true;
			event = e;
		}

		document.onmousemove = function(e) {
            down = true;
			event = e;
		}

		document.ontouchstart = function(e) {
			down = true;
			event = e.touches[0];
		}

		document.ontouchend = function(e) {
			down = false;
		}

		document.ontouchmove = function(e) {
			event = e.touches[0];
		}

		var before = Date.now();
		var id = setInterval(frame, 5);
		var gr = setInterval(check, 100);

		function frame()
		{
			var current = Date.now();
			var deltaTime = current - before;
			before = current;
			for(i in hearts)
			{
				var heart = hearts[i];
				heart.time -= deltaTime;
				if(heart.time > 0)
				{
					heart.y -= speed;
					heart.style.top = heart.y + "px";
					heart.style.left = heart.x + heart.direction * heart.bound * Math.sin(heart.y * heart.scale / 30) / heart.y * 200 + "px";
				}
				else
				{
					heart.parentNode.removeChild(heart);
					hearts.splice(i, 1);
				}
			}
		}

		function check()
		{
			if(down)
			{
				var start = 1 - Math.round(Math.random()) * 2;
				var scale = Math.random() * Math.random() * 0.8 + 0.2;
				var bound = 30 + Math.random() * 20;
				generateHeart(event.pageX - brd.offsetLeft + cursorXOffset, event.pageY - brd.offsetTop + cursorYOffset, bound, start, scale);
			}
		}


// MODALS
//Get the modal
var modal = document.getElementById("modal1");
var modal2 = document.getElementById("modal2");
var modal3 = document.getElementById("modal3");
var modal4 = document.getElementById("modal4");
var modal5 = document.getElementById("modal5");
var modal6 = document.getElementById("modal6");

//What opens the modal
var adwoah = document.getElementById("adwoah");
var alexa = document.getElementById("alexa");
var chinny = document.getElementById("chinny");
var geo = document.getElementById("geo");
var michelle = document.getElementById("michelle");
var me = document.getElementById("me");

//back button!
var backbtn = document.getElementsByClassName("backbutton")[0];
var backbtn2 = document.getElementsByClassName("backbutton")[1];
var backbtn3 = document.getElementsByClassName("backbutton")[2];
var backbtn4 = document.getElementsByClassName("backbutton")[3];
var backbtn5 = document.getElementsByClassName("backbutton")[4];
var backbtn6 = document.getElementsByClassName("backbutton")[5];

//Actually opening modal when clicked
adwoah.onclick = function() {
    modal.style.display = "flex";
}

alexa.onclick = function() {
    modal2.style.display = "flex";
}

chinny.onclick = function() {
    modal3.style.display = "flex";
}

geo.onclick = function() {
    modal4.style.display = "flex";
}

michelle.onclick = function() {
    modal5.style.display = "flex";
}

me.onclick = function() {
    modal6.style.display = "flex";
}

//Going back
backbtn.onclick = function() {
    modal.style.display = "none";
}

backbtn2.onclick = function() {
    modal2.style.display = "none";
}

backbtn3.onclick = function() {
    modal3.style.display = "none";
}

backbtn4.onclick = function() {
    modal4.style.display = "none";
}

backbtn5.onclick = function() {
    modal5.style.display = "none";
}

backbtn6.onclick = function() {
    modal6.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
      }
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
    if (event.target == modal4) {
        modal4.style.display = "none";
    }
    if (event.target == modal5) {
        modal5.style.display = "none";
    }
    if (event.target == modal6) {
        modal6.style.display = "none";
    }
  }
