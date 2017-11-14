
    // My Custom js
document.getElementById('subBtn').onclick = function(){
	   event.preventDefault();
 	

    var oForm = document.forms[0];

    var els = oForm.elements;
    // console.log(els);
    var values;

  
    function loopFormEls(elements){

        var valuesPlease = [];

        for (var i = 0; i < elements.length; i++) {
            valuesPlease.push(elements[i].value);
        };
        
        values = valuesPlease;
        console.log(values);
        return valuesPlease; 
        

	}


 
   function changeImage(){
	   var myImage = document.getElementsByTagName('img');

	   var valuesTwo = values[1];

		 if(valuesTwo === 'christmas'){
           myImage[0].src = 'assets/christmas.jpg';
       } else if (valuesTwo === 'birthday'){
           myImage[0].src = 'assets/birthday.jpg';
       } else if (valuesTwo === 'valentines'){
           myImage[0].src = 'assets/valentines.jpg';
       }
       else{
           console.log('break');
       }
}

 	 
  function changeColour(){
	   var myColour = document.getElementsByClassName('card');

	   var valuesThree = values[2];

		 if(valuesThree === 'celadon'){
           myColour[0].className = ' card celadonBackground';
       } else if (valuesThree === 'graphite'){
          myColour[0].className = ' card graphiteBackground';
       } else if (valuesThree === 'rose'){
           myColour[0].className = ' card roseBackground';
       }
       else{
           console.log('break');
       }
}

	 
  function changeFont(){
	   var myFont = document.getElementsByTagName('h1');

	   var valuesFour = values[3];

		 if(valuesFour === 'handwriting'){
           myFont[0].className = ' handwriting';
       } else if (valuesFour === 'sketch'){
          myFont[0].className = 'sketch';
       } else if (valuesFour === 'print'){
           myFont[0].className = ' print';
       }
       else{
           console.log('break');
       }
}

function changeBorder(){
	   var myBorder = document.getElementsByTagName('div');
	 

	   var valuesFive = values[4];

		 if(valuesFive === 'none'){
           myBorder[3].className = 'noneBorder';
       } else if (valuesFive === 'thin'){
          myBorder[3].className = 'smallBorder';
       } else if (valuesFive === 'thick'){
           myBorder[3].className = 'bigBorder';
       }else if (valuesFive === 'filled'){
           myBorder[3].className = 'filledBorder';
       }
       else{
           console.log('break');
       }
}

function changeMessage(){
	var msg = document.getElementsByTagName('textarea');
	console.dir(msg);
	message = oForm.elements["message"].value;



	
}
 	   loopFormEls(els);
 	    changeImage();
 	    changeColour();
 	    changeFont();
 	    changeBorder();
 	    changeMessage();

	

    	
    	
   
    	
    }




	