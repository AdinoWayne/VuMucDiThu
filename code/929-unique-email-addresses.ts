function numUniqueEmails(emails: string[]): number {
  const set = new Set();

  for (const email of emails) {
    const arr = email.split("@");
    arr[0] = (arr[0].split("+"))[0]; 
    arr[0] = arr[0].replace(/\./g, "");
    set.add(arr.join("@"));
  }

  return set.size;
};
