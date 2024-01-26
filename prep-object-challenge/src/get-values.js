function getValues(object) {
  let values = [];
  for (let k in object) {
    values.push(object[k]);
  }
  return values;
}
