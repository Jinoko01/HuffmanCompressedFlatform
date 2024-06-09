const DownloadBtn = ({ className, text }) => {
  const bitStringToByteArray = (bitString) => {
    const byteArray = [];
    for (let i = 0; i < bitString.length; i += 8) {
      const byte = bitString.substring(i, i + 8);
      byteArray.push(parseInt(byte, 2));
    }
    return new Uint8Array(byteArray);
  };

  const onExport = () => {
    if (text === "") return;

    const bitString = text
      .split("")
      .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
      .join("");

    const byteArray = bitStringToByteArray(bitString);

    const element = document.createElement("a");
    const file = new Blob([byteArray], { type: "application/octet-stream" });
    element.href = URL.createObjectURL(file);
    element.download = "text.bin";
    document.body.appendChild(element); // FireFox fix
    element.click();
    document.body.removeChild(element);
  };

  return (
    <>
      <button
        id="download-decompressed"
        className={`flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
          text ? "bg-indigo-600 hover:bg-indigo-700" : "bg-gray-400"
        } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
        onClick={onExport}
        disabled={!text}
      >
        <svg
          className={`${className}`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" x2="12" y1="15" y2="3" />
        </svg>
        Download
      </button>
    </>
  );
};

export default DownloadBtn;
