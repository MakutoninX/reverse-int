module.exports = function reverse (n) {
    if(n<0){
        let numToStr = n.toString();
        return Array.from(numToStr.slice(1,numToStr.length)).reverse().join('');
    }
  let numToStr = n.toString();
  return Array.from(numToStr).reverse().join('');
  
}
