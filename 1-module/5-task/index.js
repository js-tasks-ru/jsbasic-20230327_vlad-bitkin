function truncate(str, maxlength) {
  let strLength = str.length;
  let strMax = str.slice(0, (maxlength - 1));
  let strMaxWithEnd = strMax + "…";

  if (strLength > maxlength) {
    return strMaxWithEnd
  } 

  return str;
}

