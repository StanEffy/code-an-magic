'use strict';

(function () {
  let setupWizard = document.querySelector('.setup-wizard');
  setupWizard.addEventListener('click', function (evt) {
    let setupWizardColors = {
      coat: setupWizard.querySelector('.wizard-coat').style.fill,
      eyes: setupWizard.querySelector('.wizard-eyes').style.fill,
    }

    let similarWizards = document.querySelectorAll('.setup-similar-list .setup-similar-item');
    let similarList = document.querySelector('.setup-similar-list');
    let similarPoints = [];
    similarWizards.forEach(wizard => {
      if(wizard.querySelector('.wizard-coat').style.fill === setupWizardColors.coat){
        let pointsOfThisWizard = 2;
        if(wizard.querySelector('.wizard-eyes').style.fill === setupWizardColors.eyes){
          pointsOfThisWizard += 1;
          similarPoints.push(pointsOfThisWizard);
        } else {
          similarPoints.push(pointsOfThisWizard);
        }
      } else if(wizard.querySelector('.wizard-eyes').style.fill === setupWizardColors.eyes){
        similarPoints.push(1);
      } else {
        similarPoints.push(0);
      }
    })

    //This 3 arrays are created to rearrange filtered wizards and concat them. Not elegant - but working, should've been
    //redone
    let max = [];
    let medium = [];
    let min = [];

    for(let i = 0; i < similarPoints.length; i++){
      if(similarPoints[i] === 3){
        max.push(i);
      } else if(similarPoints[i] === 2){
        medium.push(i);
      } else if(similarPoints[i] === 1){
        min.push(i);
      } else{}
    }
    let newArr = max.concat(medium);
    let finalArr = newArr.concat(min);

    let fragment = document.createDocumentFragment();
    for(let i = 0; i < finalArr.length; i++){
      let elem = similarList.removeChild(similarWizards[finalArr[i]]);
      fragment.appendChild(elem);
    }
    similarList.prepend(fragment);
    window.hiddenFunctions.hideThemAll(document.querySelectorAll('.setup-similar-item'));
    window.hiddenFunctions.showThemFive(document.querySelectorAll('.setup-similar-item'));
  })
})();
