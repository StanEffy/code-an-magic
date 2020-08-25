'use strict';

// lists to customize your wizard warlocks

let colorsList = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
let eyesColorList = ['black', 'red', 'blue', 'yellow', 'green'];
let fireballColorList = ['#ee4830', '#30a8ee', '#5ce6c0','#e848d5', '#e6e848'];

let setup = document.querySelector('.setup');
let setupClose = document.querySelector('.setup-close');
//this function created for some randomize inside other fun()
let getRandomInt = function (max) {
  return Math.floor(Math.random() * Math.floor(max));
};

document.querySelector('.setup-similar').classList.remove('hidden');

let setupOpen = document.querySelector('.setup-open')

setupOpen.addEventListener('click', function(evt){
  evt.preventDefault();
  setup.classList.remove('hidden');
})

let avatar = document.querySelector('.setup-user-pic');
let avatarInput = document.querySelector('.upload input')

avatarInput.addEventListener('change', function(evt) {
    let file = avatarInput.files[0];

    let reader = new FileReader();
    avatar.file = file;

    let src = reader.readAsDataURL(file);

    reader.onload = (function(ava) {
        return function(e) {
            ava.src = e.target.result;
        };
    })(avatar);

    avatar.src = src;

})
setupClose.addEventListener('click', function(evt){
  evt.preventDefault();
  setup.classList.add('hidden');
  setup.style.top = '80px'; 
  setup.style.left = '50%';
})

let setupIcon = document.querySelector('.setup-open-icon');

//whenever usericon is on focus - enter opens setup
setupIcon.addEventListener('keydown', function(evt) {
	if(evt.key === 'Enter') {
		evt.preventDefault();
		setup.classList.remove('hidden');
	} else {}
})

let userName = document.querySelector('.setup-user-name');
let setupCloseButton = document.querySelector('.setup-close');

/*put a flag on element whenever the focus was changed*/
userName.onfocus = function() {
  this.focused = true;
}
userName.onblur = function() {
  this.focused = false;
}
setupCloseButton.onfocus = function() {
  this.focused = true;
}
setupCloseButton.onblur = function() {
  this.focused = false;
}
/*close the form if only it is opened (lol) and user name is not on focus*/
document.addEventListener('keydown', function(evt) {
	if(!setup.classList.contains('hidden') && !userName.focused){
		if(evt.keyCode === 27) {
			evt.preventDefault();
			setup.classList.add('hidden');
			setup.style.top = '80px'; 
  			setup.style.left = '50%';
		} else {}
	} else if(setupCloseButton.focused){
		if(evt.keyCode === 13){
			evt.preventDefault();
			setup.classList.add('hidden');
		} else {}
	} else {};
});

let setupSubmit = document.querySelector('.setup-submit');

setupSubmit.onfocus = function() {
  this.focused = true;
}

setupSubmit.onblur = function() {
  this.focused = false;
}

/*sends form with key or click on button*/
let setupForm = document.querySelector('.setup-wizard-form');

document.addEventListener('keydown', function(evt) {
	if(!setup.classList.contains('hidden') && setupSubmit.focused){
		evt.preventDefault();
		setupForm.submit();
	}
})

setupSubmit.addEventListener('click', function(evt){
  evt.preventDefault();
  setupForm.submit();
})

/*wizard-coat change on click*/

let setupWizard = document.querySelector('.setup-wizard');
let setupCoat = setupWizard.querySelector('.wizard-coat');

setupCoat.addEventListener('click', function(evt) {
	evt.preventDefault();
	setupCoat.style.fill =  colorsList[getRandomInt(colorsList.length)];
});

/*wizard-eyes change on click*/
let setupEyes = setupWizard.querySelector('.wizard-eyes');

setupEyes.addEventListener('click', function(evt) {
	evt.preventDefault();
	setupEyes.style.fill = eyesColorList[getRandomInt(eyesColorList.length)];
});

/*setup fireball on click */

let setupFireball = document.querySelector('.setup-fireball-wrap');

setupFireball.addEventListener('click', function(evt) {
	evt.preventDefault();
	setupFireball.style.backgroundColor = fireballColorList[getRandomInt(fireballColorList.length)];
});

setupForm.addEventListener('submit', function(evt) {
  window.upload(new FowmData(form), function(response) {
    userDialog.classList.add('.hidden');
  });
  evt.preventDefault();
});


