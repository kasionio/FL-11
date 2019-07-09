const emailMinLength = 6;
const passMinLength = 5;
const adminEmail = 'admin@gmail.com';
const userEmail = 'user@gmail.com';
const adminPass = 'AdminPass';
const userPass = 'UserPass';
let password, confirmation, oldPass, newPass, repeatPass;

const promptEmail = prompt('Enter your email');

if (promptEmail === null || promptEmail === '') {
  alert('Canceled');
} else if (promptEmail.length < emailMinLength) {
  alert('I don\'t know any emails having name length less than 6 symbols');
} else if (promptEmail === userEmail || promptEmail === adminEmail) {
  password = prompt('Enter your password');
  if (password === null || password === '') {
    alert('Canceled');
  } else if (promptEmail === userEmail && password === userPass 
    || promptEmail === adminEmail && password === adminPass) {
    confirmation = confirm('Do you want to change your password?');
    if (confirmation === true) {
      oldPass = prompt('Enter old password');
      if (oldPass === null || oldPass === '') {
        alert('Canceled');
      } else if (oldPass === password) {
        newPass = prompt('Enter new password');
        if (newPass.length < passMinLength) {
          alert('It’s too short password. Sorry.');
        } else {
          repeatPass = prompt('Repeat new password');
          if (repeatPass === newPass) {
            alert('You have successfully changed your password.');
          } else {
            alert('You wrote the wrong password.');
          }
        }
      } else {
        alert('Wrong password');
      }
    } else {
      alert('You have failed the change.');
    }
  } else {
    alert('Wrong password');
  }
} else {
  alert('I don\'t know you');
}
