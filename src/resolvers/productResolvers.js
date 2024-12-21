import { readData, writeData } from "../utils/localDataHandler.js";

const PRODUCT_RESOLVERS = {
    Query:{
        products: () => {
            try {
                return readData("products.json");
            } catch (error) {
                console.log("An error occured in the productResolvers.js: " + error);
                return;
            }
        }
    },
    Mutation: {
        updateProductName: async (parent, {id, name},  context) => {
            if (context.role !== "admin") {
                console.log("Unauthorized action");
                return;
            }

            const products = readData("products.json");
            const product_index = products.findIndex(product => product.id === id);

            if (product_index === -1) {
                console.log("product not found");
                return;
            }

            products[product_index].name = name;

            try {
                await writeData("products.json", products);
            } catch (error) {
                console.log("An error occurred in the productResolvers.js > Mutation: " + error);
                return;
            }
            return products[product_index];
        }
    }
};

export default PRODUCT_RESOLVERS;