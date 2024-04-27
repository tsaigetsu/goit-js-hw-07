const elementsLength = document.querySelectorAll('.item').length;
console.log(`Number of categories ${elementsLength}`);


const categories = document.querySelectorAll('#categories .item');

categories.forEach(category => {
  const title = category.querySelector('h2').textContent;
  const items = category.querySelectorAll('ul li').length;
  console.log(`Category: ${title}, Items: ${items}`);
});
