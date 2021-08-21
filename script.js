const toggleBtn = document.getElementById('toggle-btn');
const amounts = document.querySelectorAll('.amount');

const monthlyRates = {
  basic: 19.99,
  professional: 24.99,
  master: 39.99
}
const annualRates = {
  basic: 199.99,
  professional: 249.99,
  master: 399.99
}

const loadApp = () => {
  toggleBtn.classList.add('monthly');

  toggle();
  changePrice();
}

window.addEventListener('DOMContentLoaded', loadApp);

const toggle = () => {
  toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('monthly');
    toggleBtn.classList.toggle('annual');
    changePrice();
  });
};

const changePrice = () => {
  for(let i = 0; i < amounts.length; i++) {
    if(toggleBtn.classList.contains('monthly')) {
      let monthPrice = Object.values(monthlyRates);
      amounts[i].textContent = `${monthPrice[i]}`;
    } else {
      let annualPrice = Object.values(annualRates);
      amounts[i].textContent = `${annualPrice[i]}`;
    }
  }
}
