// fetch request

export function handleFiles(files, url, shouldFetch) {
  let myfiles = [...files];
  myfiles.forEach((element) => {
    if (shouldFetch) {
      useFetch(element, url);
    } else {
      useXHR(element);
    }
  });
}
export function createFormData(file) {
  let myFormData = new FormData();
  myFormData.append("file", file);
  return myFormData;
}

export function useFetch(file, url) {
  fetch(url, {
    method: "POST",
    body: createFormData(file),
  })
    .then((el) => alert("done!"))
    .catch((err) => console.log("ERROR", err));
}

export function useXHR(file, url) {
  let xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      alert("DONE!");
    } else if (xhr.readyState == 4 && xhr.status !== 200) {
      console.log("ERROR", xhr.status);
    }
  });

  let mydata = createFormData(file);
  xhr.send(mydata);
}
