document.addEventListener('DOMContentLoaded', function () {
    // Get reference to the template
    var templateSource = document.querySelector(".userTemplate").innerHTML;

    // Compile the template using the handlebars.compile rule
    var userTemplate = Handlebars.compile(templateSource);

    // What do you want to do next?
    // I want to add the compiled data to an empty field in the body
    // SO I need to get the reference of that empty field

    // get a reference to tableBody where users is to be displayed
    var userDataElem = document.querySelector(".userData");

    // Then? Now I need to insertDate to the first Template Where I want names to be displayed

    var userData = { users: [
        {username: "alan", firstName: "Alan", lastName: "Johnson", email: "alan@test.com" },
        {username: "allison", firstName: "Allison", lastName: "House", email: "allison@test.com" },
        {username: "ryan", firstName: "Ryan", lastName: "Carson", email: "ryan@test.com" }
      ]};
    // compile the template
    var userDataHTML = userTemplate(userData);
    userDataElem.innerHTML = userDataHTML;
});
