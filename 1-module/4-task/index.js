function checkSpam(str) {
  
  let simpleStr = str.toLowerCase();
  
  if (simpleStr.includes("1xbet") || simpleStr.includes("xxx")) {
    return true;
  } else {
    return false;
  }
}

console.log (checkSpam('adfa1xbextdsf'));
