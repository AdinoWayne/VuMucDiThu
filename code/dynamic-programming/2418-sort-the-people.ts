function sortPeople(names: string[], heights: number[]): string[] {
  //creating a array to store name , height as key value pair
  let d = [];
  for (let i = 0; i < names.length; i++) {
    d.push([names[i], heights[i]]);
  }
  //sorting heights based on decending order
  d.sort((a, b) => b[1] - a[1]);

  d = d.map((x) => x[0]);
  return d;
};
