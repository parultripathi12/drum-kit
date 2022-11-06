/* The first part. Here document.querySelectorAll selects all the buttons. it is in the form of array. 

[i] is loop. i=0 takes first button and so on. 

now to each button an event is added namely "click". so that when that button is clicked,
the eventListener runs a function attached to that event which is "handleClick."  

"this" is identity of that button upon which click is performed. i.e., button w, a, etc.

and this.innerHTML delivers the letter (a, w ,etc.), as the text in that button is that letter.

now this letter is assigned to variable buttonInnerHTML.

then a function makeSound runs which takes the button clicked and its corresponding letter as input.

the makeSound fumction has different tasks for different letters.

*/



for (var i=0; i<document.querySelectorAll(".drum").length; i++)
{
document.querySelectorAll("button")[i].addEventListener("click", handleClick);
   function handleClick()
   {
   var buttonInnerHTML = this.innerHTML;
   makeSound(buttonInnerHTML);
   animation(buttonInnerHTML);
     
   }
}


/* The Second part. the above part was for when the button is clicked. now we want sound to play when
keyboard keys are pressed too.

so now an eventListener is added to entire document and not to any querySelector as there is nothing to 
be selected from the code.

the eventListener attaches "keydown" to document which performs a function when key is pressed.

the function has Event as input which means the clicking of key is considered as an event, and it is actually
an already defined "keyboardEvent" in javascript. this event has lots of details already like which key is pressed.
the word "key" int his event denotes the letter which is prrssed.

so, Event.key returns the key pressed in the KeyboardEvent.

on this letter the function makeSound is performed which is given below.

the switch key is like if else. it triggers key pressed and checks which actions is to per performed.

*/


document.addEventListener("keydown", function(Event)
{
    
    makeSound(Event.key);
    animation(Event.key);
});

function makeSound(key)
{
    switch (key) 
    {
      case "w":
          var crash=new Audio('sounds/crash.mp3');
          crash.play();
          break;
      case "a":
          var kickbass=new Audio(src="sounds/kick-bass.mp3");
          kickbass.play(); 
          break;
      case "s":
          var snare=new Audio(src="sounds/snare.mp3");
          snare.play();
          break;
      case "d":
          var tom1=new Audio(src="sounds/tom-1.mp3");
          tom1.play(); 
          break;
      case "j":
          var tom2=new Audio(src="sounds/tom-2.mp3");
          tom2.play();
          break;
      case "k":
          var tom3=new Audio(src="sounds/tom-3.mp3");
          tom3.play();
          break;
      case "l":
          var tom4=new Audio(src="sounds/tom-4.mp3");
          tom4.play();
          break;    
      default:console.log(key);
    }
}

function animation(currentKey)
{
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    
    setTimeout(function(){activeButton.classList.remove("pressed");}, 200);
}
