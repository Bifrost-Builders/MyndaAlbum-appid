import { useEffect, useRef } from "react";
import { info } from '@uploadcare/upload-client'
import { getDatabase,ref, child, get } from "firebase/database";
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from "@/app/firebase/firebaseConfig"

const firebaseApp = initializeApp(firebaseConfig);

export function readFromFirebase() {
  const database = ref(getDatabase());
  get(child(database, '/')).then((data) => {
    if (data.exists()){
      console.log(data.val())
    } else {
      console.log("No data found")
    };
  }).catch((e) => {
    console.log("Error", e)
  })
}

export function WriteToWrite() {
  
}

//Virkar ekki!
export async function fileInformation(uuid) {
  const result = await info(
    uuid,
    {
      publicKey: 'ece62160ae63703904a5'
    }
  )
  return result;
}

export default function handleClickByRef(refVARIABLE) {
    if (refVARIABLE.current) {
        refVARIABLE.current.click();
    }
};
export const imageFinder = async (FULLUrl) => {
  const url = "https://picarta.ai/classify";
  const apiToken = process.env.Location_APP_API_TOKEN; 
  const headers = { "Content-Type": "application/json" };

  const payload = {
    TOKEN: apiToken,
    IMAGE: FULLUrl,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      const result = await response.json();
      console.log("res: ",result)
      // Return all relevant information
      return {
        country: result.ai_country || 'Unknown Country',
        city: result.city || 'Unknown City',
        province: result.province || 'Unknown Province',
      };
    } else {
      throw new Error("Request failed with status code: " + response.status);
    }
  } catch (error) {
    console.error("Error during fetch:", error);
    return {
      country: 'Unknown Country',
      city: 'Unknown City',
      province: 'Unknown Province',
    };
  }
};



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
  