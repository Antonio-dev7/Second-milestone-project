function sendMail(contactForm) {
    emailjs.send("gmail","Antonio", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "work_related": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS, response");
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;
}