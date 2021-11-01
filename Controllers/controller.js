//Declaramos variables
var operationA, operationB, operation;

(()=>{
    //variables
    var One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Zero, Clean, Sum, Subtraction, Multiplication, Division, Reset, Results, toReset, Reset, Equal, Resolved;
    
    One = document.getElementById('one');
    Two = document.getElementById('two');
    Three = document.getElementById('three');
    Four = document.getElementById('four');
    Five = document.getElementById('five');
    Six = document.getElementById('six');
    Seven = document.getElementById('seven');
    Eight = document.getElementById('eight');
    Nine = document.getElementById('nine');
    Zero = document.getElementById('zero');

    Sum = document.getElementById('sum');
    Subtraction = document.getElementById('subtraction');
    Multiplication = document.getElementById('multiplication');
    Division = document.getElementById('division');
    Equal = document.getElementById('equal');
    
    Reset = document.getElementById('reset');
    Results = document.getElementById('results');
   
    //Eventos de click
    One.onclick = ()=>{
        Results.textContent = Results.textContent  + "1";
    }
    Two.onclick = ()=>{
        Results.textContent = Results.textContent  + "2";
    }
    Three.onclick = ()=>{
        Results.textContent = Results.textContent  + "3";
    }
    Four.onclick = ()=>{
        Results.textContent = Results.textContent  + "4";
    }
    Five.onclick = ()=>{
        Results.textContent = Results.textContent  + "5";
    }
    Six.onclick = ()=>{
        Results.textContent = Results.textContent  + "6";
    }
    Seven.onclick = ()=>{
        Results.textContent = Results.textContent  + "7";
    }
    Eight.onclick = ()=>{
        Results.textContent = Results.textContent  + "8";
    }
    Nine.onclick = ()=>{
        Results.textContent = Results.textContent  + "9";
    }
    Zero.onclick = ()=>{
        Results.textContent = Results.textContent  + "0";
    }
    Clean = ()=>{
        Results.textContent = "";
    }
    Sum.onclick = ()=>{
        operationA = Results.textContent;
        operation = "+";
        Clean();
    }
    Subtraction.onclick = ()=>{
        operationA = Results.textContent;
        operation = "-";
        Clean();
    }
    Multiplication.onclick = ()=>{
        operationA = Results.textContent;
        operation = "*";
        Clean();
    }
    Division.onclick = ()=>{
        operationA = Results.textContent;
        operation = "/";
        Clean();
    }
    
    toReset = ()=>{
        Clean();
        operationA = 0;
        operationB = 0;
        operation = "";
    }
    Reset.onclick = ()=>{
        toReset();
    }
    
    Resolved = ()=>{
        var res = 0;
        switch(operation){
          case "+":
            res = parseFloat(operationA) + parseFloat(operationB);
            break;
          case "-":
            res = parseFloat(operationA) - parseFloat(operationB);
            break;
          case "*":
            res = parseFloat(operationA) * parseFloat(operationB);
            break;
          case "/":
            res = parseFloat(operationA) / parseFloat(operationB);
            break;
        }
        toReset();
        Results.textContent = res;
      }
    Equal.onclick = ()=>{
        operationB = Results.textContent;
        Resolved();
    }

  })()