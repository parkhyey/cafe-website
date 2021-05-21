document.addEventListener('DOMContentLoaded', bindButtons);
function bindButtons() {

    // prevent page reload when submit clicked
    document.getElementById('form1').addEventListener('click', function (event) {
        event.preventDefault();
    })
};
