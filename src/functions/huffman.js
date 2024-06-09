export const buildHuffmanTree = (text) => {
  const freqMap = {};
  for (const char of text) {
    if (!freqMap[char]) freqMap[char] = 1;
    else freqMap[char]++;
  }
  console.log(freqMap);

  const nodes = [];

  for (const node in freqMap) {
    nodes.push({
      char: node,
      freq: freqMap[node],
      left: null,
      right: null,
    });
  }
  while (nodes.length > 1) {
    nodes.sort((a, b) => a.freq - b.freq);
    console.log(nodes);
    const left = nodes.shift();
    const right = nodes.shift();
    const newNode = {
      char: null,
      freq: left.freq + right.freq,
      left: left,
      right: right,
    };
    nodes.push(newNode);
  }

  return nodes[0];
};

export const generateHuffmanCodes = (root) => {
  const codes = {};

  const traverse = (node, code) => {
    if (node.char !== null) {
      codes[node.char] = code;
      return;
    }
    if (node.left) traverse(node.left, code + "0");
    if (node.right) traverse(node.right, code + "1");
  };

  traverse(root, "");
  return codes;
};

export const compressText = (text, codes) => {
  return text
    .split("")
    .map((char) => codes[char])
    .join("");
};

export const decompressText = (encodedText, root) => {
  let decodedText = "";
  let currentNode = root;
  console.log(root);

  for (const bit of encodedText) {
    if (bit === "0") {
      currentNode = currentNode.left;
    } else {
      currentNode = currentNode.right;
    }

    if (currentNode.char !== null) {
      decodedText += currentNode.char;
      currentNode = root;
    }
  }

  return decodedText;
};
