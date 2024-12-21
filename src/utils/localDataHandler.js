import fs from 'fs';
import path from 'path';



export const readData = (fileName) => {
    const file_path = path.join(process.cwd(), 'src/data', fileName);
    try {
        const data = fs.readFileSync(file_path, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.log("An error occurred in the localDataHandler.js > readData: " + err.message);
    }
};

export const writeData = async(fileName, products) => {
    const file_path = path.join(process.cwd(), 'src/data', fileName);
    try {
        fs.writeFileSync(file_path, JSON.stringify(products, null, 2), 'utf8');
    } catch (err) {
        console.log("An error occurred in the localDataHandler.js > writeData: " + err.message);
    }
};

