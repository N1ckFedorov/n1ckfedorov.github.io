
if ($('.choose-btn__txt').length) {

(function(){

var hiddenBtn = document.getElementById('hiddenFile');
var chooseBtn = document.getElementById('chooseFile');
var chooseBtnChild = chooseBtn.getElementsByClassName('choose-btn__txt')[0];
var chooseBtnTxt = chooseBtn.getAttribute("data-txt")

hiddenBtn.addEventListener('change', function() {
    if (hiddenBtn.files.length > 0) {
			chooseBtnChild.innerText = hiddenBtn.files[0].name;
    } else {
			chooseBtnChild.innerText = chooseBtnTxt;
    }
});

})();

}