import { useState } from "react";
import DownloadBtn from "../components/common/DownloadBtn";
import UploadBtn from "../components/common/UploadBtn";

const Home = () => {
  const [text, setText] = useState("");
  const [huffman, setHuffman] = useState("");

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-center">허프만 압축</h1>
        <div className="space-y-4">
          <div>
            <label htmlFor="upload" className="block font-medium mb-2">
              텍스트 파일 업로드
            </label>
            <UploadBtn className="mr-2 h-5 w-5" setText={setText} />
          </div>
          <p style={{ fontSize: "12px", color: "gray", margin: "0" }}>
            텍스트: {text && <label>{text}</label>}
          </p>
          <div>
            <label htmlFor="download" className="block font-medium mb-2">
              인코딩 파일 다운로드
            </label>
            <div className="flex items-center justify-center w-full">
              <DownloadBtn
                className="mr-2 h-5 w-5"
                text={text}
                setText={setText}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="upload-compressed"
              className="block font-medium mb-2"
            >
              압축 파일 업로드
            </label>
            <UploadBtn className="mr-2 h-5 w-5" />
          </div>
          <p style={{ fontSize: "12px", color: "gray", margin: "0" }}>
            텍스트: {huffman && <label>{huffman}</label>}
          </p>
          <div>
            <label
              htmlFor="download-decompressed"
              className="block font-medium mb-2"
            >
              디코딩 파일 다운로드
            </label>
            <div className="flex items-center justify-center w-full">
              <DownloadBtn className="mr-2 h-5 w-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
