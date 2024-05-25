const company = document.querySelector('.footer-company');
const companyBtn = company.querySelector('button');
const companyInfo = document.querySelector('.footer-company-info');

companyBtn.addEventListener('click', function() {
  company.classList.toggle('is-active');
  companyInfo.classList.toggle('is-active');
})