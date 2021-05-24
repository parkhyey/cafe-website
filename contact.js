document.addEventListener('DOMContentLoaded', bindButtons);
function bindButtons() {

    // if POST request submit button is clicked
    document.getElementById('submitPost').addEventListener('click', function (event) {
        // prevent page reload when submit button is clicked
        event.preventDefault();
        var req = new XMLHttpRequest();
        var payload = {
            name: null,
            email: null,
            subject: null
        };

        var nameVal = document.getElementById('nameInput').value
        var emailVal = document.getElementById('emailInput').value
        var subjectVal = document.getElementById('subjectInput').value

        // check for user inputs
        if (!nameVal) {
            document.getElementById('resultPost').textContent = "Please enter your name.";
        }
        else if (!emailVal) {
            document.getElementById('resultPost').textContent = "Please enter your email address.";
        }
        else if (!subjectVal) {
            document.getElementById('resultPost').textContent = "Please enter your message.";
        }
        else {
            payload.name = document.getElementById('nameInput').value;
            payload.email = document.getElementById('emailInput').value;
            payload.subject = document.getElementById('subjectInput').value;

            // submit asynchronously via a POST
            req.open('POST', 'http://httpbin.org/post', false);
            // set a content-type to application/json 
            req.setRequestHeader('Content-Type', 'application/json');
            // send stringified object
            req.send(JSON.stringify(payload));
            // parses a JSON string
            var response = JSON.parse(req.responseText);

            // console.log(response);
            // display the response data
            document.getElementById('resultPost').textContent = "Thank you " + response.json.name + " for contacting us!";
        }
    })
};