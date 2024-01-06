<script>
    document.addEventListener('DOMContentLoaded', function () {
        var form = document.querySelector('#contact-form-container form');
        var thankYouMessage = document.getElementById('thank-you-message');

        form.addEventListener('submit', function (event) {
            event.preventDefault(); 

            // additional logic can be added here to handle the form data e.g., sending it to a server :)...

            // Hide the form container
            document.getElementById('contact-form-container').style.display = 'none';

            // Show the thank-you message
            thankYouMessage.style.display = 'block';
        });
    });
</script>
