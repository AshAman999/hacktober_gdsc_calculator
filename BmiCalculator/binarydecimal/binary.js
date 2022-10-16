var convertToBinary = function(){
    var binInput = document.getElementById("userInput").value;  
      document.getElementById("output").value = checkInput(binInput);
    
      console.log(binInput);
    }
    
    
    /* Method to compare whether input conforms to Binary values*/
    var checkInput = function(input){
      if(/[^10]/g.test(input)){
        console.log("Value entered is not in binary form");
        return "binary inputs only";
         } else {
          console.log("You've entered a binary number");
           return convertToDecimal(input);
        }
    }
    
    var convertToDecimal = function(binVal){
      var result = 0;
      var n = binVal.length - 1;
      for (i = 0; i < binVal.length; i++){
        var digit = binVal.charAt(i);
        result = result + (digit * Math.pow(2, n));
        n--;
      }
      return result;
    }
    