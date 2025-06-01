const toCamelCase = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word, index) => {
      if (word.length === 2) {
        return word.toUpperCase();
      }

      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
};

export default toCamelCase;
