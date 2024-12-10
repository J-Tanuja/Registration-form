function submitForm() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    if (fullName && email && phone && address) {
        const resultContainer = document.getElementById('result');
        resultContainer.innerHTML = `
            <h2>Submitted Information</h2>
            <p><strong>Full Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Address:</strong> ${address}</p>
        `;

        resultContainer.style.display = 'block';
    }
}
