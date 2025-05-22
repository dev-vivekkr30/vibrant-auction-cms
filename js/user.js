// active in-active toggle switch
const toggleSwitches = document.querySelectorAll('.toggle-switch');

toggleSwitches.forEach(toggleSwitch => {
  const toggleLabel = toggleSwitch.querySelector('.toggle-label');
  const toggleThumb = toggleSwitch.querySelector('.toggle-thumb');

  toggleSwitch.addEventListener('click', () => {
    toggleSwitch.classList.toggle('verified');
    toggleSwitch.classList.toggle('rejected');

    if (toggleSwitch.classList.contains('verified')) {
      toggleSwitch.style.backgroundColor = '#4CAF50'; // green
      toggleThumb.style.left = '60px'; // move thumb right
      toggleLabel.textContent = 'Active';
      toggleLabel.style.marginLeft = '0';
      toggleLabel.style.marginRight = '16px';
    } else {
      toggleSwitch.style.backgroundColor = '#f44336'; // red
      toggleThumb.style.left = '5px'; // move thumb left
      toggleLabel.textContent = 'Inactive';
      toggleLabel.style.marginRight = '0';
      toggleLabel.style.marginLeft = '16px';
    }
  });
});


// password Hide & Show 

const togglePasswordButtons = document.querySelectorAll('.toggle-password');

togglePasswordButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    const passwordInput = document.getElementById(targetId);
    const icon = button.querySelector('i');

    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      icon.classList.remove('bi-eye-slash');
      icon.classList.add('bi-eye');
    } else {
      passwordInput.type = 'password';
      icon.classList.remove('bi-eye');
      icon.classList.add('bi-eye-slash');
    }
  });
});
