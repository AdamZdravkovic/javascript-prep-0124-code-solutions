function compact(array) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (element || element === true) {
      newArray.push(element);
    }
  }

  return newArray;
}
