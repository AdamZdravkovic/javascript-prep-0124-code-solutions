function getValue(object, key) {
  for (let prop in object) {
    if (prop === key) {
      return object[key];
    }
  }
  return undefined;
}
