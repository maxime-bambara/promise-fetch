function manageResponse(response) {
    if(response.ok){
       return response.json();
    } else {
       console.log(response.status)
    }
   }
   
   function displayData(data) {
     console.log(data)
   }
   
   fetch('https://reqres.in/api/users/2')
       .then(manageResponse)
       .then(displayData)