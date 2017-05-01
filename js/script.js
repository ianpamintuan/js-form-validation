var options = "";
var currentYear = new Date().getFullYear();
var daysDropdown = document.getElementsByName("day")[0];
var monthsDropdown = document.getElementsByName("month")[0];
var yearsDropdown = document.getElementsByName("year")[0];

function resetOption() {
    options = "";
}

function setDropdown(min, max) {
    for (var i = min; i <= max; i++) {
        options += "<option>" + i + "</option>";
    } 
}

setDropdown(1, 12);
monthsDropdown.innerHTML = options;
resetOption();

setDropdown(1, 31);
daysDropdown.innerHTML = options;
resetOption();

setDropdown(1900, currentYear);
yearsDropdown.innerHTML = options;
resetOption();

var firstName = document.getElementById("firstName");
var middleInitial = document.getElementById("middleInitial");
var lastName = document.getElementById("lastName");
var username = document.getElementById("username");
var password = document.getElementById("password");
var confirmPassword = document.getElementById("confirmPassword");
var month = document.getElementsByName("month")[0];
var day = document.getElementsByName("day")[0];
var year = document.getElementsByName("year")[0];
var country = document.getElementsByName("country")[0];
var gender = document.getElementsByName("gender");
var optionalEmails = document.getElementsByName("optionalEmails");
var terms = document.getElementById("terms");
var errorBackground = document.getElementsByClassName("form-elem");
var labels = document.getElementsByTagName("label");
var summary = ""

function changeErrorBackground(n) {
    errorBackground[n].style.backgroundColor = "yellow";
    labels[n].style.color = "red";   
}

function removeErrorBackground(n) {
    errorBackground[n].style.backgroundColor = "white";
    labels[n].style.color = "#000000"; 
}

function validate() {
    
    var flag = 0;
    
    if(firstName.value == "") {
        flag += 1;
        changeErrorBackground(0);
    } else {
        removeErrorBackground(0);
    }
    
    if(middleInitial.value == "") {
        flag += 1;
        changeErrorBackground(1);
    } else {
        removeErrorBackground(1);
    }
    
    if(lastName.value == "") {
        flag += 1;
        changeErrorBackground(2);
    } else {
        removeErrorBackground(2);
    }
    
    if(username.value == "") {
        flag += 1;
        changeErrorBackground(3);
    } else {
        removeErrorBackground(3);
    }
    
    if(password.value == "") {
        flag += 1;
        changeErrorBackground(4);
    } else {
        removeErrorBackground(4);
    }
    
    if(confirmPassword.value == "") {
        flag += 1;
        changeErrorBackground(5);
    } else {
        removeErrorBackground(5);
    }
    
    if(password.value !== confirmPassword.value) {
        flag += 1;
        changeErrorBackground(4);
        changeErrorBackground(5);
    } else {
        removeErrorBackground(4);
        removeErrorBackground(5);
    }
    
    
    if(gender[0].checked == false && gender[1].checked == false){
        flag += 1;
        errorBackground[8].style.backgroundColor = "yellow";
        labels[8].style.color = "red";   
    } else {
        errorBackground[8].style.backgroundColor = "white";
        labels[8].style.color = "#000000";   
    }
    
    if(optionalEmails[0].checked == false && optionalEmails[1].checked == false && optionalEmails[2].checked == false) {
        flag += 1;
        errorBackground[9].style.backgroundColor = "yellow";
        labels[11].style.color = "red";   
    } else {
        errorBackground[9].style.backgroundColor = "white";
        labels[11].style.color = "#000000";  
    }
    
    if(terms.checked == false) {
        flag += 1;
        labels[15].style.color = "red";
    } else {
        labels[15].style.color = "#000000";
    }
    
    if(flag > 0) {
        alert("Please fill out the form correctly!");
    } else {
        
        content = "<label>Name:</label>" + " " + lastName.value + ", " + firstName.value + " " + middleInitial.value + "<br>" + "<label>Username:</label>" + " " + username.value + "<br>" + "<label>Password:</label>" + " " + password.value + "<br>" + "<label>Birthdate:</label>" + " " + month.value + "/" + day.value + "/" + year.value + "<br>" + "<label>Country:</label>" + " " + country.value + "<br>" + "<label>Gender:</label>" + " ";
        
        if(gender[0].checked) {
            content += "Male";
        } else {
            content += "Female";
        }
        
        content += "<br> <label>Optional Emails:</label><br>";
        
        for(var i = 0; i < optionalEmails.length; i++) {
            if(optionalEmails[i].checked) {
                content += labels[12 + i].textContent + "<br>";
            }
        }
        
        document.getElementById("content").innerHTML = content;

    }
    
}

function resetForm() {
    
    for(var i = 0; i < errorBackground.length; i++) {
            errorBackground[i].style.backgroundColor = "white";
            labels[i].style.color = "#000000";   
    }
    
    content = "";
    document.getElementById("content").innerHTML = content;
    
}