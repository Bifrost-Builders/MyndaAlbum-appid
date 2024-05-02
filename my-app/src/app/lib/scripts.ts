export default function handleClickByRef(refVARIABLE) {
    if (refVARIABLE.current) {
        refVARIABLE.current.click();
    }
};

export const imageUploader = (image: File): Promise<any> => {
    return new Promise((resolve, reject) => {
      const apiToken = "PNYRX9HF96BQJTQSWQ5G"; // API key
  
      if (image) {
        const reader = new FileReader();
  
        reader.onload = async (e: ProgressEvent<FileReader>) => {
          if (typeof e.target.result === 'string') {
            const base64Image = e.target.result.split(',')[1]; // Get the base64 data
  
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
                      country: result["ai_country"],
                      city: result["city"],
                      province: result["province"]});
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
        reader.readAsDataURL(image); 
      } else {
        reject('Missing image');
      }
    });
  };
  