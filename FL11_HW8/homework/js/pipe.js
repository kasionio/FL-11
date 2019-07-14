const pipe = (num, ...funcList) => {
  for (let i = 0; i < funcList.length; i++) {
    const randomFunc = funcList[i];
    num = randomFunc(num);
  }
  return num;
}

const addOne = num => {
  return num + 1;
}
pipe(1, addOne);
pipe(1, addOne, addOne);