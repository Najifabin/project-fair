import commonAPI from "./commonAPI";
import SERVER_BASE_URL from "./serverUrl";

// registerAPI
export const registerAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVER_BASE_URL}/register`,reqBody)
}