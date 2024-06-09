export const buildHuffmanTree = (text) => {
  const freqMap = {};
  for (const char of text) {
    if (!freqMap[char]) freqMap[char] = 1;
    else freqMap[char]++;
  }

  const nodes = [];
  for (const char in freqMap) {
    nodes.push({ char, freq: freqMap[char], left: null, right: null });
  }

  while (nodes.length > 1) {
    nodes.sort((a, b) => a.freq - b.freq);
    const left = nodes.shift();
    const right = nodes.shift();
    nodes.push({ char: null, freq: left.freq + right.freq, left, right });
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
  for (const bit of encodedText) {
    currentNode = bit === "0" ? currentNode.left : currentNode.right;
    if (currentNode.char !== null) {
      decodedText += currentNode.char;
      currentNode = root;
    }
  }
  return decodedText;
};

export const bitStringToByteArray = (bitString) => {
  const byteArray = [];
  for (let i = 0; i < bitString.length; i += 8) {
    const byte = bitString.substring(i, i + 8);
    byteArray.push(parseInt(byte, 2));
  }
  return new Uint8Array(byteArray);
};

export const byteArrayToBitString = (byteArray) => {
  let bitString = "";
  for (let byte of byteArray) {
    bitString += byte.toString(2).padStart(8, "0");
  }
  return bitString;
};

export const downloadByteArray = (byteArray, fileName) => {
  const blob = new Blob([byteArray], { type: "application/octet-stream" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

export const readByteFile = (file, callback) => {
  const reader = new FileReader();
  reader.onload = (e) => {
    const byteArray = new Uint8Array(e.target.result);
    callback(byteArray);
  };
  reader.readAsArrayBuffer(file);
};
