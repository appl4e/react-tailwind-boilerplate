const plugin = require('tailwindcss/plugin');

const namedBtns= {};

const btnColors = [
  {name :'primary', hex:'#429FDD'}
];

btnColors.forEach(color => {
  namedBtns[`.btn-${color.name}`] = {
    backgroundColor: color.hex, 
    color: 'white',
      '&:hover': {backgroundColor: '#429FFF'}
    }
});

module.exports = plugin(({addComponents})=>{
  addComponents(namedBtns);
});