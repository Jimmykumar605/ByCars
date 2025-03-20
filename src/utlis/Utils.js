import SiteConfig from "@/config/SiteConfig";
import siteConfig from "@/config/SiteConfig";
import axios from "axios";

export const CallGetApis = async (apiendpoint) => {
  try {
    const response = await axios.get(SiteConfig?.DEV_URLS + "/" + apiendpoint);
    console.log("response 111:>> ", response);
    return response?.data;
  } catch (error) {
    console.log("error while calling call api function :>> ", error);
  }
};
