function getAverageVideoColor(selector) {
  var videoElement = document.querySelector(selector);
  if (!videoElement) {
    return undefined;
  }

  var snapshotCanvas = document.createElement('canvas');
  snapshotCanvas.width = videoElement.videoWidth;
  snapshotCanvas.height = videoElement.videoHeight;

  var snapshotContext = snapshotCanvas.getContext('2d');
  snapshotContext.drawImage(videoElement, 0, 0, videoElement.videoWidth, videoElement.videoHeight);

  var result;

  if (videoElement.paused) {
    result = null;
  } else {
    var averageColor = {r: 0, g: 0, b: 0};

    var imageData = snapshotContext.getImageData(0, 0, videoElement.videoWidth, videoElement.videoHeight).data;

    for (var index = 0; index < imageData.length; index += 4) {
      averageColor.r += imageData[index];
      averageColor.g += imageData[index + 1];
      averageColor.b += imageData[index + 2];
    }

    var total = imageData.length / 4;
    result = [Math.floor(averageColor.r / total),
      Math.floor(averageColor.g / total),
    Math.floor(averageColor.b / total)];
  }

  return result;
}
