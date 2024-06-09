import { useState } from "react";
import DownloadBtn from "../components/common/DownloadBtn";
import UploadBtn from "../components/common/UploadBtn";
import DecodedUploadBtn from "../components/common/DecodedUploadBtn";
import DecodedDownloadBtn from "../components/common/DecodedDownloadBtn";

const Home = () => {
  const [text, setText] = useState("");
  const [compressedText, setCompressedText] = useState("");
  const [huffman, setHuffman] = useState("");
  const [decompressedHuffman, setDecompressedHuffman] = useState("");
  const [tree, setTree] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-center">허프만 압축</h1>
        <div className="space-y-4">
          <div>
            <label htmlFor="encodingUpload" className="block font-medium mb-2">
              텍스트 파일 업로드
            </label>
            <UploadBtn
              className="mr-2 h-5 w-5"
              setText={setText}
              setCompressedText={setCompressedText}
              setTree={setTree}
            />
          </div>
          <p style={{ fontSize: "12px", color: "gray", margin: "0" }}>
            텍스트: {text && <label>{text}</label>}
          </p>
          <div>
            <label htmlFor="download" className="block font-medium mb-2">
              인코딩 파일 다운로드
            </label>
            <div className="flex items-center justify-center w-full">
              <DownloadBtn className="mr-2 h-5 w-5" text={compressedText} />
            </div>
          </div>
          <div>
            <label htmlFor="decodingUpload" className="block font-medium mb-2">
              압축 파일 업로드
            </label>
            <DecodedUploadBtn
              className="mr-2 h-5 w-5"
              setHuffman={setHuffman}
              setDecompressedHuffman={setDecompressedHuffman}
              tree={tree}
            />
          </div>
          <p style={{ fontSize: "12px", color: "gray", margin: "0" }}>
            허프만코드: {huffman && <label>{huffman}</label>}
          </p>
          <div>
            <label
              htmlFor="download-decompressed"
              className="block font-medium mb-2"
            >
              디코딩 파일 다운로드
            </label>
            <div className="flex items-center justify-center w-full">
              <DecodedDownloadBtn
                className="mr-2 h-5 w-5"
                text={decompressedHuffman}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
