import globals from 'globals';


export default [
  {languageOptions: { globals: globals.node },
  rules: {
    // Aquí configuras la regla para los puntos y comas
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
  },
},
  
];