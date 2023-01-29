import axios from "axios";
import endpoints from "@/frontend/config/api-endpoints";

export const useFileUpload = async (file: File) => {
  const { data } = await axios({
    method: "post",
    url: endpoints.uploadFile(),
    data: {
      name: file.name,
      type: file.type
    }
  });

  await axios.put(data.url, file, {
    headers: {
      "Content-type": file.type,
      "Access-Control-Allow-Origin": "*",
    },
    onUploadProgress: (event) => {
      if (!event.total) return
      console.log(`progress: ${Math.round((100 * event.loaded) / event.total)}`)
    }
  })

  return data.url.split('?')[0]
};
