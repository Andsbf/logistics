const blobReader = (blob) => {
  const reader = new FileReader();

  const promise = new Promise((resolve, reject) => {
    reader.addEventListener("loadend", () => {
      const text = reader.result;
      const json = JSON.parse(text.substring(text.lastIndexOf("\n")));
      resolve(json);
    })

    reader.readAsText(blob);
  });

  return promise;
}


export default blobReader;
