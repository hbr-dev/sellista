import { readData } from "../utils/localDataHandler.js";

const CATEGORY_RESOLVERS = {
    Query:{
        categories: () => {
            try {
                return readData("category.json");
            } catch (error) {
                console.log("An error occured in the categoryResolvers.js: " + error);
                return;
            }
        }
    }
};

export default CATEGORY_RESOLVERS;