const isInteger = arg => {
  return (arg % 1 === 0 && arg !== Infinity && arg !== '' + arg);
}
isInteger(5);
isInteger(5.1);