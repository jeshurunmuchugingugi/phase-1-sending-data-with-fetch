function submitData(name, email) {
    const userData = {
      name: name,
      email: email
    };
  
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(userData)
    };
  
    return fetch("http://localhost:3000/users", configObj)
      .then(response => response.json())
      .then(data => {
        // Append the ID to the DOM
        const idElement = document.createElement('p');
        idElement.textContent = `ID: ${data.id}`;
        document.body.appendChild(idElement);
      })
      .catch(error => {
        // Append the error message to the DOM
        const errorElement = document.createElement('p');
        errorElement.textContent = error.message;
        document.body.appendChild(errorElement);
      });
  }
  
