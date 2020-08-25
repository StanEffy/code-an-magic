(function () {
    window.hiddenFunctions = {
        showThemFive: function(array) {
            for(let i = 0; i < 5; i++){
                array[i].classList.remove('hidden');
            }
        },
        hideThemAll : function(array) {
            for(let i = 0; i < array.length; i++){
                array[i].classList.add('hidden');
            }
        },

    }
    var userDialog = document.querySelector('.setup');
    userDialog.classList.remove('hidden');

    var similarListElement = userDialog.querySelector('.setup-similar-list');

    var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

    var renderWizard = function (wizard) {
        var wizardElement = similarWizardTemplate.cloneNode(true);

        wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
        wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
        wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

        return wizardElement;
    };

    var successHandler = function (wizards) {
        var fragment = document.createDocumentFragment();

        for(var i = 0; i < wizards.length; i++) {
            fragment.appendChild(renderWizard(wizards[i]));
        }
        similarListElement.appendChild(fragment);
        window.hiddenFunctions.hideThemAll(similarListElement.querySelectorAll('.setup-similar-item'));
        window.hiddenFunctions.showThemFive(similarListElement.querySelectorAll('.setup-similar-item'));
        userDialog.querySelector('.setup-similar').classList.remove('hidden');
    };

    var errorHandler = function (errorMessage) {
        var node = document.createElement('div');
        node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
        node.style.position = 'absolute';
        node.style.left = 0;
        node.style.right = 0;
        node.style.fontSize = '30px';

        node.textContent = errorMessage;
        document.body.insertAdjacentElement('afterbegin', node);
    };

    window.load(successHandler, errorHandler);

})();