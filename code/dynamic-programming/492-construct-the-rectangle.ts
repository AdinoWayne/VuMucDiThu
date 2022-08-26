function constructRectangle(area: number): number[] {
  for(let i = Math.floor(Math.sqrt(area)); i > 0 ; i--) {
    if (area % i == 0) {
      return [area/i, i];
    }
  }
};
