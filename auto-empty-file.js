function createEmptyFile() {
  const fileInput = document.querySelector("input[type=file]");
  if (!fileInput) {
    return;
  }

  const emptyFileContent = ["No real content"];
  const myFileName = "just_a_file.txt";
  const myFile = new File(emptyFileContent, myFileName);

  // Create a data transfer object. Similar to what you get from a `drop` event as `event.dataTransfer`
  const dataTransfer = new DataTransfer();

  // Add your file to the file list of the object
  dataTransfer.items.add(myFile);

  // Save the file list to a new variable
  const fileList = dataTransfer.files;

  // Set your input `files` to the file list
  fileInput.files = fileList;

  fileInput.dispatchEvent(new Event("change", { bubbles: true }));
}
setTimeout(() => createEmptyFile(), 500);
