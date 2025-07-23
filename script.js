document
  .getElementById('registrationForm')
  .addEventListener('submit', function(event) {
    event.preventDefault();

    const name = this.fullName.value.trim();
    const email = this.email.value.trim();
    const phone = this.phone.value.trim();
    const tickets = this.tickets.value;

    let errors = [];

    if (name.length < 2) {
      errors.push('Name must be at least 2 characters.');
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      errors.push('Please enter a valid email.');
    }

    if (!/^\d{10}$/.test(phone)) {
      errors.push('Phone number must be 10 digits.');
    }

    if (tickets < 1 || tickets > 10) {
      errors.push('Tickets must be between 1 and 10.');
    }

    const msgEl = document.getElementById('message');
    msgEl.classList.remove('hidden');
    if (errors.length) {
      msgEl.style.color = 'red';
      msgEl.textContent = errors.join(' ');
    } else {
      msgEl.style.color = 'green';
      msgEl.textContent = 'Registration successful! We will contact you soon.';
      this.reset();
    }
  });
