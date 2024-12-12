//Generate prefix

function genPreFix(firstName) {
    if(firstName.length > 5) {
        return 'The Great';
    } else {
        return 'Master';
    }
}

// Generate First Name

function genFirstName(firstName) {
   const firstLetter = firstName.charAt(0).toLowerCase();
   if (firstLetter==='a') {
    return 'Jeff';
   } else if (firstLetter==='b') {
    return 'Pablo';
   } else {
    return 'Hannah';
   }
}

// Generate middle name

function genMiddleName(roadType, favoriteColor) {
    if (roadType==='road') {
        return `${favoriteColor} ridge`; //EX: blue ridge
    } else if (roadType==='street') {
        return `${favoriteColor} sun` //EX: blue sun
    } else {
        return `${favoriteColor}`;
    }
} 

// generate last name

function genLastName(lastName) {
    const lastLetter = lastName.charAt(lastName.length-1) {
        if(lastLetter==='a') {
            return 'idk';
        }else if (lastLetter==='b') {
            return 'sifsdkfjsdfh';
        } else {
            return 'dnkjkdjklsj';
        }
    }
}


//generate suffix

function getSuffix(favoriteAnimal) {
    return `of the ${favoriteAnimal} clan`;
}


//generate full name

function genFullName() {
    //get user inputs from htmls
    const firstName=document.getElementById('firstName').value.trim();
    const lastName=document.getElementById('lastName').value.trim();
    const roadType=document.getElementById('roadType').value;
    const favoriteColor=document.getElementById('favoriteColor').value.trim();
    const favoriteAnimal=document.getElementById('favoriteAnimal').value.trim();

    //run name generating functions and store in new variables
    const prefix=genPrefix(firstName);
    const newFirstName=genFirstName(firstName);
    const middleName=genMiddleName(roadType, favoriteColor);
    const newLastName=genLastName(lastName);
    const suffix=genSuffix(favoriteAnimal);

    //capitalize name variables when needed

    const capitalizedPrefix = capitalize(prefix);
    const capitalizedFirstName = capitalize(newFirstName);
    const capitalizedMiddleName = capitalize(middleName);
    const capitalizedLastName = capitalize(newLastName);

    //combine all name variables into a full new name

    //display new name
}

//capitalization function

function capitalize(input) {
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}