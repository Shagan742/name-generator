//Generate prefix

function genPreFix(firstName) {
    if (firstName.length > 5) {
        return 'The Great';
    } else {
        return 'Master';
    }
}

// Generate First Name

function genFirstName(firstName) {
    const firstLetter = firstName.charAt(0).toLowerCase();
    switch (firstLetter) {
        case 'a':
            return 'Jeff';

        case 'b':
            return 'Pablo';

        case 'c':
            return 'Hannah';

        case 'd':
            return 'Jake';

        case 'e':
            return 'Pat';

        case 'f':
            return 'George';
        
        case 'g':
            return 'Greg';

        case 'h':
            return 'May';

        case 'i':
            return 'April';

        case 'j':
            return 'Stella';

        case 'k':
            return 'Techna';

        case 'l':
            return 'Kenzie';

        case 'm':
            return 'Flora';

        case 'n':
            return 'Bloom';    

        case 'o':
            return 'Rachel';

        case 'p':
            return 'Pot';
    
        case 'q':
            return 'Zoey';
    
        case 'r':
            return 'Jack';
    
        case 's':
            return 'Anthony';
    
        case 't':
            return 'Wes';
    
        case 'u':
            return 'Candace';
    
        case 'v':
            return 'Kia';    
    
        case 'w':
            return 'Hank';
        
        case 'x':
            return 'Frank';

        case 'y':
            return 'Giovanna';

        case 'z':
            return 'Leah';

        default:
            return 'TypeYourNameBro';
    }
}

// Generate middle name

function genMiddleName(roadType, favoriteColor) {
    if (roadType === 'road') {
        return `${favoriteColor} ridge`; //EX: blue ridge
    } else if (roadType === 'street') {
        return `${favoriteColor} sun` //EX: blue sun
    } else {
        return `${favoriteColor}`;
    }
}

// generate last name

function genLastName(lastName) {


    const lastLetter = lastName.charAt(lastName.length - 1);
    if (lastLetter === 'a' || lastLetter === 'z') {
        return 'Bratz';
    }
    if (lastLetter === 'b') {
        return 'Long';
    } else if (lastLetter === 'c') {
        return 'Pulaski';
    } else if (lastLetter === 'd') {
        return 'Singh';
    } else {
        return 'Kaur';
    }
}

//generate suffix

function getSuffix(favoriteAnimal) {

    const lastLetterFavoriteAnimal = favoriteAnimal.charAt(favoriteAnimal.length -1);
    const lastLetterFavoriteAnimal2 = favoriteAnimal.charAt(favoriteAnimal.length - 2);

    if (lastLetterFavoriteAnimal==='n' && lastLetterFavoriteAnimal2==='o') {
       return `of the ${favoriteAnimal} clan`; 
    } else if (lastLetterFavoriteAnimal==='e' && lastLetterFavoriteAnimal2==='n') {
        return `of the ${favoriteAnimal} kingdom`;
    } else {
        return `of the ${favoriteAnimal} tribe`;
    }
    
}


//generate full name

function genFullName() {
    //get user inputs from htmls
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const roadType = document.getElementById('roadType').value;
    const favoriteColor = document.getElementById('favoriteColor').value.trim();
    const favoriteAnimal = document.getElementById('favoriteAnimal').value.trim();

    //run name generating functions and store in new variables
    const prefix = genPreFix(firstName);
    const newFirstName = genFirstName(firstName);
    const middleName = genMiddleName(roadType, favoriteColor);
    const newLastName = genLastName(lastName);
    const suffix = getSuffix(favoriteAnimal);

    //capitalize name variables when needed

    const capitalizedPrefix = capitalize(prefix);
    const capitalizedFirstName = capitalize(newFirstName);
    const capitalizedMiddleName = capitalize(middleName);
    const capitalizedLastName = capitalize(newLastName);

    //combine all name variables into a full new name
    const fullName = `${capitalizedPrefix} ${capitalizedFirstName} ${capitalizedMiddleName} ${capitalizedLastName} ${suffix}`;

    //display new name

    document.getElementById("result").textContent = fullName;

}





//capitalization function

function capitalize(input) {
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}