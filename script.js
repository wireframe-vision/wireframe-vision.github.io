function downloadFile(filePath) {
  // Create a link element
  var link = document.createElement('a');
  link.href = filePath;
  
  // Set the download attribute to prompt the user to save the file
  link.download = filePath.substring(filePath.lastIndexOf('/') + 1);
  
  // Append the link to the body
  document.body.appendChild(link);
  
  // Trigger a click event to start the download
  link.click();
  
  // Remove the link from the body
  document.body.removeChild(link);
}