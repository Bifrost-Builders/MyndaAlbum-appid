import { useEffect, useRef } from "react";

export default function handleClickByRef(refVARIABLE) {
    if (refVARIABLE.current) {
        refVARIABLE.current.click();
    }
};

export const imageFinder = (FULLUrl) => {
  const url = "https://picarta.ai/classify";
    const apiToken = "PNYRX9HF96BQJTQSWQ5G"; // Replace with your API token
    const headers = {"Content-Type": "application/json"};

    // OR from a URL
    const imgPath = FULLUrl;


    // Prepare the payload
    const payload = {
        "TOKEN": apiToken,
        "IMAGE": imgPath
    };

    // Send the POST request with the payload as JSON data
    fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Request failed with status code: " + response.status);
        }
    })
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error("Request failed with error:", error);
    });                                
                      

}

export const imageUploader = (image: File): Promise<any> => {
  return new Promise((resolve, reject) => {
    const apiToken = process.env.API_TOKEN; // API key

    if (image) {
      const reader = new FileReader();

      reader.onload = async (e: ProgressEvent<FileReader>) => {
        if (typeof e.target.result === 'string') {
          const base64Image = e.target.result.split(',')[1]; // Get base64 data

          const payload = {
            TOKEN: apiToken,
            IMAGE: base64Image,
          };

          try {
            const response = await fetch('https://picarta.ai/classify', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(payload),
            });

            if (response.ok) {
              const result = await response.json();
              resolve({
                country: result.ai_country,
                city: result.city,
                province: result.province,
              });
            } else {
              reject(`Request failed with status code: ${response.status}`);
            }
          } catch (error) {
            reject(`Request failed with error: ${error}`);
          }
        } else {
          reject('Failed to convert image to base64');
        }
      };

      reader.readAsDataURL(image); // Convert image to base64
    } else {
      reject('Missing image'); // Ensure there's an image before processing
    }
  });
};

  
//Used for mobile navbar
export const useDimensions = ref => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, []);

  return dimensions.current;
};
  