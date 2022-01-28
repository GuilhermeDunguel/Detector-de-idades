function loadScript() {
   var date = new Date()
   var year = date.getFullYear();
   var userYear = document.querySelector('#userYear').value;
   var userGenre = document.querySelector('#userGenre').value;
   var image = document.querySelector('#resultImage')
   var resultText = document.querySelector('#resultText')
   var userAge = Number(year - userYear);

   if(userGenre == 'genreMasculine') {
      
      if(userAge <= 0) {
         image.src = 'assets/error.png'
         resultText.innerHTML = `ERRO DE INTERPRETAÇÃO: <strong>Insira um ano válido!</strong>`
      } else if(userAge <= 12) {
         image.src = 'assets/crianca_homem.png'
         resultText.innerHTML = `Detectamos uma <strong>criança</strong> do gênero <strong>masculino</strong> com <strong>${userAge}</strong> anos`
      } else if (userAge <= 17) {
         image.src = 'assets/adolescente_homem.png'
         resultText.innerHTML = `Detectamos um <strong>adolescente</strong> do gênero <strong>masculino</strong> com <strong>${userAge}</strong> anos`
      } else if (userAge <= 30) {
         image.src = 'assets/jovem_homem.png'
         resultText.innerHTML = `Detectamos um <strong>jovem</strong> do gênero <strong>masculino</strong> com <strong>${userAge}</strong> anos`
      } else if (userAge <= 60) {
         image.src = 'assets/adulto.png'
         resultText.innerHTML = `Detectamos um <strong>adulto</strong> do gênero <strong>masculino</strong> com <strong>${userAge}</strong> anos`
      } else if (userAge <= 100) {
         image.src = 'assets/idoso.png'
         resultText.innerHTML = `Detectamos um <strong>idoso</strong> do gênero <strong>masculino</strong> com <strong>${userAge}</strong> anos`
      } else if (userAge > 100) {
         image.src = 'assets/error.png'
         resultText.innerHTML = `ERRO DE INTERPRETAÇÃO: <strong>Insira um ano válido!</strong>`
      }
   } else {

      if(userAge <= 0) {
         image.src = 'assets/error.png'
         resultText.innerHTML = `ERRO DE INTERPRETAÇÃO: <strong>Insira um ano válido!</strong>`
      } else if(userAge <= 12) {
         image.src = 'assets/crianca_mulher.png'
         resultText.innerHTML = `Detectamos uma <strong>criança</strong> do gênero <strong>feminino</strong> com <strong>${userAge}</strong> anos`
      } else if (userAge <= 17) {
         image.src = 'assets/adolescente_mulher.png'
         resultText.innerHTML = `Detectamos uma <strong>adolescente</strong> do gênero <strong>feminino</strong> com <strong>${userAge}</strong> anos`
      } else if (userAge <= 30) {
         image.src = 'assets/jovem_mulher.png'
         resultText.innerHTML = `Detectamos uma <strong>jovem</strong> do gênero <strong>feminino</strong> com <strong>${userAge}</strong> anos`
      } else if (userAge <= 60) {
         image.src = 'assets/adulta.png'
         resultText.innerHTML = `Detectamos uma <strong>adulta</strong> do gênero <strong>feminino</strong> com <strong>${userAge}</strong> anos`
      } else if (userAge <= 100) {
         image.src = 'assets/idosa.png'
         resultText.innerHTML = `Detectamos uma <strong>idosa</strong> do gênero <strong>feminino</strong> com <strong>${userAge}</strong> anos`
      } else if (userAge > 100) {
         image.src = 'assets/error.png'
         resultText.innerHTML = `ERRO DE INTERPRETAÇÃO: <strong>Insira um ano válido!</strong>`
      } 
   }
}