import axios from "axios";

const uploadDocument = async (
  url: string,
  file: File,
  onUploadProgess?: (value: number) => void
) => {
  const { data, status } = await axios.post(url, file, {
    headers: {
      "Content-Type": "application/pdf",
    },
    onUploadProgress(ev) {
      const progress = (ev.loaded / ev.total!) * 100;

      if (onUploadProgess) {
        onUploadProgess!(progress);
      }
    },
  });

  const response = {
    status,
    data: data,
  };

  return response;
};

export default uploadDocument;
