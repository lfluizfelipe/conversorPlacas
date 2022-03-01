// CONVERSOR DE PLACAS
function validaPlaca(placa) {
    const resultado = document.getElementById('actionResult');
  
    let regexPlaca = /^[a-zA-Z]{3}[0-9]{4}$/;
  
    if (regexPlaca.test(placa) != true){
        resultado.innerHTML = 'Placa inválida, favor digitar novamente!';
        return false;
        } else {
          return true;
        }
    }
  
  function convertePlaca(){
    let placa = document.getElementById('plate').value;
    const resultado = document.getElementById('actionResult')
    const isValid = validaPlaca(placa);
    let convertedPlate = '';
  
    if (!isValid) {
      return;
    }
  

     
     switch (placa.charAt(4)) {
     case "0":
     convertedPlate = placa.replace("0", "A");
     break;
     case "1":
     convertedPlate = placa.replace("1", "B");
     break;
     case "2":
     convertedPlate = placa.replace("2", "C");
     break;
     case "3":
     convertedPlate = placa.replace("3", "D");
     break;
     case "4":
     convertedPlate = placa.replace("4", "E");
     break;
     case "5":
     convertedPlate = placa.replace("5", "F");
     break;
     case "6":
     convertedPlate = placa.replace("6", "G");
     break;
     case "7":
     convertedPlate = placa.replace("7", "H");
     break;
     case "8":
     convertedPlate = placa.replace("8", "I");
     break;
     case "9":
     convertedPlate = placa.replace("9", "J");
     break;
     }
     resultado.innerHTML = `Placa Convertida: ${convertedPlate}` 
  }
     
