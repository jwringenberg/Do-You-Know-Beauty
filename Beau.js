//Global Variables that dont get 
//reset on a call to a function
var index = 0;
var yesBeautiful = 0;
var randRectArray = [1,2,3,4,5,6,7,8,9,10];

function updateCount()
 {
	 //The JQuery Event Handler, an abstraction (VERY ABSTRACT)
	 //I read a TON of the JQuery Documentation to get this to
	 //Work as intended,...
	 //Bascially that .one("click", function) line of code
	 //is a special feature of JQuery where it will STOP the
	 //asynchronous binding to the object(the button) and only
	 //detect the click/event once per call, only counting 
	  //the click when we call this function. 
	  //Otherwise,...
	  //EVERY TIME the button is clicked it would count as a
	  //successful identifcation of the golden rectangle
	  //By default JQuery synchronous binding will
      //count a completed action (in this case a button click)
	  //everytime during the life of the loaded page.	  
	 $(document).ready(function(){
	    $( "#goldenButton" ).one( "click", function(){            
			 yesBeautiful++;
			 console.log(yesBeautiful); //for debug purposes
            });
	     });
  }
 
function clearIt()
{
    var canvas=document.getElementById("myCanvas");
	//A cheap way to reset the canvas
	canvas.width = canvas.width; 
}


function randomizeArray()
   {
	   //This Shuffles the array in a random order
	   //This is an algorthim I desgined myself
	   //generates a set of unique numbers in a random order
	   //saved into an array between 1 - 10
	   
	    var i = 0; //keep track of the current index
	    var isVisited = [false,false,false,false,false,false,false,false,false,false];
		 var randomIndex = Math.floor(Math.random() * 9)+1; //random num between 1 -10
		 while(i < randRectArray.length-1)
		 {
			 if(isVisited[randomIndex] == false)
			 {
				isVisited[randomIndex] = true; //mark that we have visited
				randRectArray[i] = randomIndex;
				i = i + 1; //move the index forward
			 }
			randomIndex = Math.floor(Math.random() * 9)+1; //regenerate
		 }
		
   }	
  
function makeRect()
     { 
	 
	    //Doesn't matter if the golden rectangles are the 
		//first 3 to be generated, the array has been shuffled.
		
       if(randRectArray[index] == 1)
	   {
		   clearIt();
		   genGoldenRect1();
	
	      //Debug code to see when goldenRect was generated
		   console.log("RECT1 Count" + yesBeautiful);
		   
	       updateCount();
	   }
	   else if(randRectArray[index] == 2)
	   {
		   clearIt();
		   genGoldenRect2();
		   
		   //Debug code to see when goldenRect was generated
		   console.log("RECT2 Count" + yesBeautiful);
		  
		   updateCount();
	   }
	   else if(randRectArray[index] == 3)
	   {
		   clearIt();
		   genGoldenRect3();
		   
		   //Debug code to see when goldenRect was generated
		   console.log("RECT3 Count" + yesBeautiful);
		  
		   updateCount();
	   }
	   else
	   {
		   clearIt();
		   genNormRect();
	   }
		
	   //Move the randomized array index up.	
	   index++;
		
		
		//After 10 rectangles have been generated
		if(index >= 10)
		{
		   //Ok this was another head ache,... In order to pass
		   //the count variable to another page, I had to either
		   //save it into the cookies of the browser OR,... use
		   //This other useful JQuery Abstraction, its not the most 
		   //secure, you would not want to save username/passwords
		   //using this method but, for a simple count variable its fine
		   localStorage.setItem("TheTotalCorrect",yesBeautiful);
		   
		   //Go to the Result Page
		   window.location.href = "result.html";
		}
	 }

//Functions that generate random Widths and Heights	 
function rectGenWidth()
	{
		var wth = (Math.random()*350)+5;
		wth = parseInt(wth);
		console.log(wth);
		return wth;
	}

function rectGenHeight()
	{
		var hth = (Math.random()*250)+5;
		hth = parseInt(hth);
		console.log(hth);
		return hth;
	}
	
	 
function genNormRect()
   {
	    var c =document.getElementById("myCanvas");
		 //Get the canvas in the frame!!!!
		 var ctx =c.getContext("2d");
		
		 var b = rectGenWidth();
		 var a = rectGenHeight();
	
		 ctx.rect(20,20,b,a);
		 
		 //The stroke() method actually draws the path you have defined 
		 ctx.stroke();		 
   }
  

//Below are the 3 golden rectangles coded in with the 
//correct height and width proportion to match the GoldeRatio (1.6...)
  
function genGoldenRect1()
    {
	  var c =document.getElementById("myCanvas");
	  var ctx =c.getContext("2d");
	  ctx.rect(20,20,199,322);
	  ctx.stroke();	
	 
	   
    }
	
function genGoldenRect2()
    {
	  var c =document.getElementById("myCanvas");
	  var ctx =c.getContext("2d");
	  ctx.rect(20,20,300,485);
	  ctx.stroke();	
    }
	
function genGoldenRect3()
    {
	  var c =document.getElementById("myCanvas");
	  var ctx =c.getContext("2d");
	  ctx.rect(20,20,97,157);
	  ctx.stroke();	
    }