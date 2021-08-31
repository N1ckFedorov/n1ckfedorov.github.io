
for (const dropdown of document.querySelectorAll(".c-select")) {
  dropdown.addEventListener('click', function () {
      this.classList.toggle('open');
  })
}

for (const option of document.querySelectorAll(".c-select__option")) {
  option.addEventListener('click', function () {
      if (!this.classList.contains('selected')) {
          this.parentNode.querySelector('.c-select__option.selected').classList.remove('selected');
          this.classList.add('selected');
          this.closest('.c-select').querySelector('.c-select__trigger span').textContent = this.textContent;
      }
  })
}

window.addEventListener('click', function (e) {
  for (const select of document.querySelectorAll('.c-select')) {
      if (!select.contains(e.target)) {
          select.classList.remove('open');
      }
  }
});

function selectOption(index) {
var optionOnIdx = document.querySelector('.c-select__option:nth-child('+index+')');
var optionSelected = document.querySelector('.c-select__option.selected');
if (optionOnIdx !== optionSelected) {
  optionSelected.parentNode.querySelector('.c-select__option.selected').classList.remove('selected');
          optionOnIdx.classList.add('selected');
          optionOnIdx.closest('.c-select').querySelector('.c-select__trigger span').textContent = optionOnIdx.textContent;
      }
}
