// Condicional
const body = document.querySelector('body');
if (body) body.style.background = 'red';

// Non-null assertion (!)
const body1 = document.querySelector('body')!;
body1.style.background = 'red';

// Type assertion
const body2 = document.querySelector(
  'body',
) as HTMLBodyElement;
body2.style.background = 'red';

//HTMLElement
const input = document.querySelector(
  '.input',
) as HTMLInputElement;
input.value = 'Enviar';
