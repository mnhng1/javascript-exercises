const convertToCelsius = function(far) {
  cel = (5/9)*(far - 32)
  
  if (Number.isInteger(cel)){
    return parseInt(cel)
  }
  return parseFloat(cel.toFixed(1))
};
//(32°F − 32) × 5/9//
const convertToFahrenheit = function(cel) {
  far = (cel * (9/5)) + 32
  if (Number.isInteger(far)){
    return parseInt(far)
  }
  return parseFloat(far.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
