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

function intersect(quadTree1: Node | null, quadTree2: Node | null): Node | null {
    if(quadTree1.isLeaf) {
        return quadTree1.val ? quadTree1 : quadTree2;
    }

    if(quadTree2.isLeaf) {
        return quadTree2.val ? quadTree2 : quadTree1;
    }

    let topLeft = intersect(quadTree1.topLeft, quadTree2.topLeft);
    let topRight = intersect(quadTree1.topRight, quadTree2.topRight);
    let bottomLeft = intersect(quadTree1.bottomLeft, quadTree2.bottomLeft);
    let bottomRight = intersect(quadTree1.bottomRight, quadTree2.bottomRight);

    // Detect a merger state when all 4 leaves have same value.
    if(topLeft.isLeaf&&topRight.isLeaf&&bottomLeft.isLeaf&&bottomRight.isLeaf && topLeft.val==topRight.val && topRight.val==bottomLeft.val && bottomLeft.val==bottomRight.val) {
        return new Node(topLeft.val, true, null, null, null, null);
    }else {
        return new Node(false, false, topLeft, topRight, bottomLeft, bottomRight)
    }
};
