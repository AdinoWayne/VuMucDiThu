function canReach(arr: number[], start: number): boolean {
  const val = arr[start];
  if (val === 0) return true;
  if (val === -1) return false;
  arr[start] = -1;
  return (start - val >= 0 && canReach(arr, start - val)) || (start + val < arr.length && canReach(arr, start + val));
};
