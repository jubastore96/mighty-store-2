document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("complaintForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const fullName = document.getElementById("fullName").value;
        const email = document.getElementById("email").value;
        const complaint = document.getElementById("complaint").value;

        // إرسال البيانات إلى البريد الإلكتروني (يمكنك استخدام خدمات البريد الإلكتروني أو الجانب الخادم لإرسال البريد)
        const mailtoLink = `mightyservice267@gmail.com?subject=شكوى من ${fullName}&body=${complaint}%0D%0A%0D%0Aالبريد الإلكتروني: ${email}`;
        window.location.href = mailtoLink;
    });
});
