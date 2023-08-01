function removeSubfolders(folders: string[]): string[] {
  const ret = [];
  const set = new Set();
  folders.sort((a, b) => a.length - b.length);
  for (let i = 0; i < folders.length; ++i) {
    const folder = folders[i];
    let prefix = '/' + folder[1];
    let flag = true;
    for (let j = 2; j < folder.length; ++j) {
      if (folder[j] === '/' && set.has(prefix)) { flag = false; break; }
      prefix += folder[j];
    }
    flag && ret.push(folder) && set.add(folder);
  }
  return ret;
};
