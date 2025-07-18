const loginForm = document.querySelector('.form-box-login');
const resetForm = document.querySelector('.form-box-reset');

const showResetBtn = document.getElementById('showReset');
const backToLoginBtn = document.getElementById('backToLogin');


showResetBtn.addEventListener('click', (e) => {
  e.preventDefault();
  gsap.to(loginForm, {
    duration: 0.6,
    rotationX: 90,
    opacity: 0,
    onComplete: () => {
      loginForm.classList.add('hidden');
      resetForm.classList.remove('hidden');
      gsap.fromTo(resetForm, 
        { rotationX: 90, opacity: 0 },
        { duration: 0.7, rotationX: 0, opacity: 1 }
      );
    }
  });
});

backToLoginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  gsap.to(resetForm, {
    duration: 0.6,
    rotationX: 90,
    opacity: 0,
    onComplete: () => {
      resetForm.classList.add('hidden');
      loginForm.classList.remove('hidden');
      gsap.fromTo(loginForm, 
        { rotationX: 90, opacity: 0 },
        { duration: 0.7, rotationX: 0, opacity: 1 }
      );
    }
  });
});
