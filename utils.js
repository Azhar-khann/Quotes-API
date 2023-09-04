const getRandomElement = arr => {
  if (!Array.isArray(arr)) throw new Error('Expected an array');
  return arr[Math.floor(Math.random() * arr.length)];
}
function quotesByperson(quotes,person){
  let array = []
  for (let i= 0; i <= quotes.length -1; i++){
    if (quotes[i].person === person) {
      array.push(quotes[i])
    }
  }
  return array
}
module.exports = {
  getRandomElement,
  quotesByperson
};
