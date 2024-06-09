class HuffmanNode {
  constructor(char, freq, left = null, right = null) {
    this.char = char;
    this.freq = freq;
    this.left = left;
    this.right = right;
  }
}

const buildHuffmanTree = (text) => {
  const freqMap = new Map();
  for (const char of text) {
    freqMap.set(char, (freqMap.get(char) || 0) + 1);
  }

  const nodes = Array.from(freqMap.entries()).map(
    ([char, freq]) => new HuffmanNode(char, freq)
  );

  while (nodes.length > 1) {
    nodes.sort((a, b) => a.freq - b.freq);
    const left = nodes.shift();
    const right = nodes.shift();
    const newNode = new HuffmanNode(null, left.freq + right.freq, left, right);
    nodes.push(newNode);
  }

  return nodes[0];
};

const generateHuffmanCodes = (root) => {
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

const compressText = (text, codes) => {
  return text
    .split("")
    .map((char) => codes[char])
    .join("");
};
