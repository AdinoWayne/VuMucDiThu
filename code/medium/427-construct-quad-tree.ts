/**
 * Definition for node.
 * class Node {
 *     val: boolean
 *     isLeaf: boolean
 *     topLeft: Node | null
 *     topRight: Node | null
 *     bottomLeft: Node | null
 *     bottomRight: Node | null
 *     constructor(val?: boolean, isLeaf?: boolean, topLeft?: Node, topRight?: Node, bottomLeft?: Node, bottomRight?: Node) {
 *         this.val = (val===undefined ? false : val)
 *         this.isLeaf = (isLeaf===undefined ? false : isLeaf)
 *         this.topLeft = (topLeft===undefined ? null : topLeft)
 *         this.topRight = (topRight===undefined ? null : topRight)
 *         this.bottomLeft = (bottomLeft===undefined ? null : bottomLeft)
 *         this.bottomRight = (bottomRight===undefined ? null : bottomRight)
 *     }
 * }
 */

function construct(grid: number[][]): Node | null {
  const tree = _grid => {
    const node = new Node();
    const isAllOne = _grid.every(_g => _g.every(v => v === 1));
    const isAllZero = _grid.every(_g => _g.every(v => v === 0));
    if (isAllOne) {
      node.val = true;
      node.isLeaf = true;
    } else if (isAllZero) {
      node.val = false;
      node.isLeaf = true;
    } else {
      let _len = _grid.length;
      let left = _grid.map(_g => _g.slice(0, _len / 2));
      let right = _grid.map(_g => _g.slice(_len / 2));
      node.topLeft = tree(left.slice(0, _len / 2));
      node.topRight = tree(right.slice(0, _len / 2));
      node.bottomLeft = tree(left.slice(_len / 2));
      node.bottomRight = tree(right.slice(_len / 2));
      node.isLeaf = false;
      node.val = true;
    }
    return node;
  }
  
  const head = tree(grid);
  return head;
};
