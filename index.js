/*const postData = {
    dogName: "Byron",
    dogBreed: "Poodle",
}

const configObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/JSON",
    },
    body: JSON.stringify(postData),
}

fetch("http://localhost:3000/dogs", configObject)
.then((response => response.json))
.then((obj) => console.log(obj))
.catch((error) => {
    alert("Bad things! Ragnarok!");
    console.log(error.message);
})*/

function submitData(name, email){
    const newUser = {
        name: name,
        email: email
    } 
    //console.log(newUser);
    
    const configObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(newUser),
    }
    //console.log(newUser);
    return fetch("http://localhost:3000/users", configObject)
        .then((res) => res.json)
        .then((data) => {
            document.body.innerHTML += data.id;
            console.log(data);
        })
        .catch((error) =>{
            document.body.innerHTML += error.message;
        });
}
//submitData("Rhoda", "rhoda@rhoda.com");
