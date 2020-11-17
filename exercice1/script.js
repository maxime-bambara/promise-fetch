function askAge() {
    return prompt('Quel âge avez-vous ?')
  }   
  
  function success() {
    console.log('Vous êtes majeur, vous pouvez continuer votre navigation')
  }
  
  function error() {
    console.log('Vous êtes mineur, vous allez être redirigé vers une autre page')
  }
  
  function redirectUser() {
   // code à implémenter
   return new Promise((resolve,reject) => {
       let age = askAge();
       if (age > 17){
           resolve()
       } else {
           reject()
       }

   })
  }
  
  redirectUser().then(success, error)