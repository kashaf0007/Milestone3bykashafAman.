var form = document.getElementById('Resume');
var resumeDisplayElement = document.getElementById('resume-display');
//frm submission 
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var Lastname = document.getElementById('last').value;
    var phoneno = document.getElementById('phone no').value;
    var email = document.getElementById('email').value;
    var Education = document.getElementById('Education').value;
    var Experiance = document.getElementById('Experiance').value;
    var Skills = document.getElementById('Skills').value;
    //generat resume dynamically
    var resumeHTML = "\n    <h2><b>Resume</b><h2>\n    <h3>personal information</h3>\n    <p><b> First Name:</b>".concat(name, "</p>\n    <p><b> Last Name:</b>").concat(name, "</p>\n    <p><b> phone no:</b>").concat(phoneno, "</p>\n    p><b> Email ID:</b>").concat(email, "</p>\n    \n    <h3>Education</h3>\n    <p>").concat(Education, "</p>\n    \n    <h3>Experiance</h3>\n    <p>").concat(Experiance, "</p>\n\n    <h3>Skills</h3>\n    <p>").concat(Skills, "</p>\n    ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
