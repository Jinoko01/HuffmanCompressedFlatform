import { decompressText } from "../../functions/huffman";

const DecodedUploadBtn = ({
  className,
  setHuffman,
  setDecompressedHuffman,
  tree,
}) => {
  const onFileDecoding = (e) => {
    const file = e.target.files[0]; // 파일 객체를 가져옴
    let fileReader = new FileReader();
    fileReader.onload = () => {
      console.log(fileReader.result); // 파일 내용을 출력
      setHuffman(fileReader.result); // 파일 상태를 설정
      setDecompressedHuffman(decompressText(fileReader.result, tree));
    };
    fileReader.readAsText(file); // 파일 객체를 전달
  };
  return (
    <>
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="decodingUpload"
          className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
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
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" x2="12" y1="3" y2="15" />
          </svg>
          Upload
        </label>
        <input
          id="decodingUpload"
          type="file"
          className="sr-only"
          onChange={onFileDecoding}
          accept=".txt"
        />
      </div>
    </>
  );
};

export default DecodedUploadBtn;
