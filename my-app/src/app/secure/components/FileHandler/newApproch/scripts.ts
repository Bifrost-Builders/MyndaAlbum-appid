

type DataStruct = {
    metaData: {},
    imageUrl: string,
    uuid: string,
};

function extractMetaData(file) {
    return []
};

function locationFinder() {
    
};

function getSpecialUuid() {

    return "";
};

//?Route.ts
function addImageToDataBase(imageData: DataStruct) { 

};

export function HandleImage({file}) {
    const imageData: DataStruct = {
        metaData: {},
        imageUrl: "",
        uuid: "",
    };

    try {

        const [location, city] = extractMetaData(file);
        imageData.metaData["location"] = location;
        imageData.metaData["city"] = city;

        imageData.uuid = getSpecialUuid();

        addImageToDataBase(imageData)

        
    } catch (error) {
        console.error("Heyy... error: ",error)
    }
    
};