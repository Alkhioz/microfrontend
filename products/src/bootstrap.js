import faker from 'faker';

const mount = (el) => {
  let products = '';

  for(let i = 0; i < 5; i++){
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
}
// Context/Situation #1
// we are running this file in development in isolation
// we are using our local index.html file
// wich DEFINITELY has an element with an id 'dev-products'
// we want to immediately render our app into that element
if (process.env.NODE_ENV === 'development'){
  const el = document.querySelector('#dev-products');

  // Assuming our container doesnt have an element
  // with id 'dev-products'
  if(el){
    // we are probably running in isolation
    mount(el);
  }
}

// Context/Situation #2
// we are running this file in develpment or production
// through the CONTAINER app
// NO GUARANTEE that an element with an id of 'dev-products' exist
// WE DO NOT WANT to try to immediately render our app
export {mount};
