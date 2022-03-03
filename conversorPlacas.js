// CONVERSOR DE PLACAS
function validatesPlate(plate) {
    const res = document.getElementById('actionResult');
  
    let regexPlate = /^[a-zA-Z]{3}[0-9]{4}$/;
  
    if (regexPlate.test(plate) != true){
        res.innerHTML = 'Placa inválida, favor digitar novamente!';
        return false;
        } else {
          return true;
        }
    }
  
  function convPlate(){
    let plate = document.getElementById('plate-info').value;
    const res = document.getElementById('actionResult')
    const isValid = validatesPlate(plate);
    let convertedPlate = '';
  
    if (!isValid) {
      return;
    }
  
    let beginPlate = plate.slice(0, 4)
    let charactersPlate = plate.slice(4, 5)
    let endPlate = plate.slice(5, 7)


     switch (charactersPlate) {
     case "0":
     convertedPlate = charactersPlate.replace("0", "A");
     break;
     case "1":
     convertedPlate = charactersPlate.replace("1", "B");
     break;
     case "2":
     convertedPlate = charactersPlate.replace("2", "C");
     break;
     case "3":
     convertedPlate = charactersPlate.replace("3", "D");
     break;
     case "4":
     convertedPlate = charactersPlate.replace("4", "E");
     break;
     case "5":
     convertedPlate = charactersPlate.replace("5", "F");
     break;
     case "6":
     convertedPlate = charactersPlate.replace("6", "G");
     break;
     case "7":
     convertedPlate = charactersPlate.replace("7", "H");
     break;
     case "8":
     convertedPlate = charactersPlate.replace("8", "I");
     break;
     case "9":
     convertedPlate = charactersPlate.replace("9", "J");
     break;
     }
     res.innerHTML = `Placa Convertida: ${beginPlate + convertedPlate + endPlate}`
  }
