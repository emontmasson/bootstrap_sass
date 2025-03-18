

createUserHtml();


async function createUserHtml() {
    const reponse = await fetch("https://jsonplaceholder.typicode.com/users");
    const utilisateurs = await reponse.json();


    let tbody = document.getElementById("users");


// si le tableau des utilisateurs contient plus d'une valeur
    if(utilisateurs.length > 0) {

        for(let ligneTableau = 0; ligneTableau < utilisateurs.length; ligneTableau = ligneTableau +1 ) {

            // création d'une nouvelle ligne
            let ligneHtmlTableau = document.createElement("tr");
            // création d'une colonnne
            let colonneNomHtmlTableau = document.createElement("td");
            // on met le nom de l'utilisateur dans la colonne
            colonneNomHtmlTableau.innerText = utilisateurs[ligneTableau].name;
            // on ajoute la colonne à la ligne
            ligneHtmlTableau.appendChild(colonneNomHtmlTableau);


            // création d'une colonnne
            let colonneEmailHtmlTableau= document.createElement("td")
            // on met l'email de l'utilisateur dans la colonne
            colonneEmailHtmlTableau.innerText = utilisateurs[ligneTableau].email;
            // on ajoute la colonne à la ligne
            ligneHtmlTableau.appendChild(colonneEmailHtmlTableau)

            // on ajout la ligne au tableau html
            tbody.appendChild(ligneHtmlTableau);

        }


    }
    else {
        let noUser = document.createElement("span");
        noUser.innerText = "Il n'y a pas d'utilisateur.";
        tbody.appendChild(noUser);
    }
}






