const video = document.getElementById("webgazerVideoFeed");
const canvas = webgazer.getVideoElementCanvas();
// const collisionSVG = "collisionSVG";
// let labels = ["Cindy"];

// Promise.all([
//   faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
//   faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
//   faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
//   faceapi.nets.ssdMobilenetv1.loadFromUri("/models"),
// ]).then(startFaceRecognition);

window.saveDataAcrossSessions = true;
const LOOK_DELAY = 1000;
const LEFT_CUTOFF = window.innerWidth / 4;
const RIGHT_CUTOFF = window.innerWidth - window.innerWidth / 4;
let startLookTime = Number.POSITIVE_INFINITY;
let lookBox = null;
let xpadding = window.innerWidth / 6;
let boxPositions = [];
let demoPass = ["3", "6", "9"];
let passCount = 0;
let showPopUp = false;
let showingVideo = false;

let viz = d3
  .select("#container")
  .append("svg")
  .style("width", window.innerWidth - xpadding * 2)
  .style("height", window.innerHeight)
  // .style("outline", "solid red")
  .attr("position", "fixed")
  // .style("background", "black")
  .attr("transform", "translate(" + xpadding + ",0)");
let boxContainer = viz.append("g");
let singleBox = boxContainer
  .selectAll(".boxes")
  .data(d3.range(9))
  .enter()
  .append("g")
  .attr("class", "boxes");
singleBox
  .append("rect")
  .attr("fill", "#888")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", (window.innerWidth - xpadding) / 5)
  .attr("height", (window.innerWidth - xpadding) / 5);

singleBox
  .append("text")
  .text((d, i) => {
    return i + 1;
  })
  .attr("font-size", "4rem")
  .attr("fill", "white")
  .attr("x", (window.innerWidth - xpadding) / 5 / 2)
  .attr("y", (window.innerWidth - xpadding) / 5 / 2)
  .attr("width", 150)
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "central");

singleBox.attr("transform", (d, i) => {
  let x = (i % 3) * 350 + 30;
  let y = Math.floor(i / 3) * 300 + 30;
  boxPositions.push({
    xleft: x,
    xright: x + (window.innerWidth - xpadding) / 5,
    yleft: y,
    yright: y + (window.innerWidth - xpadding) / 5,
  });
  console.log(boxPositions);
  return "translate(" + x + "," + y + ")";
});
let unlockedMessageDiv = document.createElement("div");
unlockedMessageDiv.className = "unlockMessage";
document.body.appendChild(unlockedMessageDiv);
let messageDiv = document.createElement("div");
messageDiv.className = "message-content";
unlockedMessageDiv.appendChild(messageDiv);
let closeButton = document.createElement("span");
closeButton.className = "close";
closeButton.innerHTML = "&times;";
let message = document.createElement("p");
message.innerHTML = "Webgazer.js is loading ...";
message.innerHTML += "<br/>"
message.innerHTML += "Please wait for red dot to appear";
messageDiv.appendChild(closeButton);
messageDiv.appendChild(message);

closeButton.onclick = function () {
  unlockedMessageDiv.style.display = "none";
  webgazer.resume();
};
window.onclick = function (event) {
  if (event.target == unlockedMessageDiv) {
    unlockedMessageDiv.style.display = "none";
    webgazer.resume();
  }
};
webgazer.showVideo(false);
webgazer
  .setGazeListener((data, timestamp) => {
    if (data == null) return;
    // console.log(timestamp)

    //box 1
    if (
      data.x >= boxPositions[0].xleft &&
      data.x <= boxPositions[0].xright &&
      data.y >= boxPositions[0].yleft &&
      data.y <= boxPositions[0].yright &&
      lookBox !== "1"
    ) {
      console.log(boxPositions[0]);
      console.log("1");
      startLookTime = timestamp;
      lookBox = "1";
    } else if (
      data.x >= boxPositions[1].xleft &&
      data.x <= boxPositions[1].xright &&
      data.y >= boxPositions[1].yleft &&
      data.y <= boxPositions[1].yright &&
      lookBox !== "2"
    ) {
      console.log(boxPositions[1]);
      console.log("2");
      startLookTime = timestamp;
      lookBox = "2";
    } else if (
      data.x >= boxPositions[2].xleft &&
      data.x <= boxPositions[2].xright &&
      data.y >= boxPositions[2].yleft &&
      data.y <= boxPositions[2].yright &&
      lookBox !== "3"
    ) {
      console.log("3");
      startLookTime = timestamp;
      lookBox = "3";
    } else if (
      data.x >= boxPositions[3].xleft &&
      data.x <= boxPositions[3].xright &&
      data.y >= boxPositions[3].yleft &&
      data.y <= boxPositions[3].yright &&
      lookBox !== "4"
    ) {
      console.log("4");
      startLookTime = timestamp;
      lookBox = "4";
    } else if (
      data.x >= boxPositions[4].xleft &&
      data.x <= boxPositions[4].xright &&
      data.y >= boxPositions[4].yleft &&
      data.y <= boxPositions[4].yright &&
      lookBox !== "5"
    ) {
      console.log("5");
      startLookTime = timestamp;
      lookBox = "5";
    } else if (
      data.x >= boxPositions[5].xleft &&
      data.x <= boxPositions[5].xright &&
      data.y >= boxPositions[5].yleft &&
      data.y <= boxPositions[5].yright &&
      lookBox !== "6"
    ) {
      console.log("6");
      startLookTime = timestamp;
      lookBox = "6";
    } else if (
      data.x >= boxPositions[6].xleft &&
      data.x <= boxPositions[6].xright &&
      data.y >= boxPositions[6].yleft &&
      data.y <= boxPositions[6].yright &&
      lookBox !== "7"
    ) {
      console.log("7");
      startLookTime = timestamp;
      lookBox = "7";
    } else if (
      data.x >= boxPositions[7].xleft &&
      data.x <= boxPositions[7].xright &&
      data.y >= boxPositions[7].yleft &&
      data.y <= boxPositions[7].yright &&
      lookBox !== "8"
    ) {
      console.log("8");
      startLookTime = timestamp;
      lookBox = "8";
    } else if (
      data.x >= boxPositions[8].xleft &&
      data.x <= boxPositions[8].xright &&
      data.y >= boxPositions[8].yleft &&
      data.y <= boxPositions[8].yright &&
      lookBox !== "9"
    ) {
      console.log("9");
      startLookTime = timestamp;
      lookBox = "9";
    } else {
      // console.log("middle")
      // startLookTime = Number.POSITIVE_INFINITY;
      // lookBox = null;
    }

    if (startLookTime + LOOK_DELAY < timestamp) {
      console.log("lookbox " + lookBox);
      console.log(demoPass);
      for (let i = 0; i < demoPass.length; i++) {
        if (lookBox == demoPass[i]) {
          passCount++;
          demoPass.splice(i, 1);
          console.log(demoPass);
        }
      }
    }
    if (demoPass.length == 0) {
      console.log("unlocked");
      if (showPopUp != true) {
        webgazer.pause();
        viz.transition().duration(1000).style("opacity", 0);
        // let unlockedMessageDiv = document.createElement("div");
        // unlockedMessageDiv.className = "unlockMessage";
        // document.body.appendChild(unlockedMessageDiv);
        // let messageDiv = document.createElement("div");
        // messageDiv.className = "message-content";
        // unlockedMessageDiv.appendChild(messageDiv);
        // let closeButton = document.createElement("span");
        // closeButton.className = "close";
        // closeButton.innerHTML = "&times;";
        // let message = document.createElement("p");
        unlockedMessageDiv.style.display = "block"
        message.innerHTML = "Unlocked! Demo complete.";
        // messageDiv.appendChild(closeButton);
        // messageDiv.appendChild(message);

        // closeButton.onclick = function () {
        //   unlockedMessageDiv.style.display = "none";
        //   webgazer.resume();
        // };
        // window.onclick = function (event) {
        //   if (event.target == unlockedMessageDiv) {
        //     unlockedMessageDiv.style.display = "none";
        //     webgazer.resume();
        //   }
        // };
        showPopUp = true;
      }
    }
  })
  .begin();
function showVideo() {
  if (showingVideo == false) {
    webgazer.showVideo(true);
    showingVideo = true;
  } else {
    webgazer.showVideo(false);
  }
}
// async function startFaceRecognition() {
//   let label = "Cindy";
//   let img = await faceapi.fetchImage("cindy-g-li.jpg");
//   webgazer.getVideoElementCanvas().appendChild(img)
//   let fullFaceDescription = await faceapi.detectSingleFace(img)
//   console.log(fullFaceDescription)
//   // const results = await faceapi
//   //   .detectAllFaces(img)
//   //   .withFaceLandmarks()
//   //   .withFaceDescriptors();
//   // console.log(results);
//   // if (!results.length) {
//   //   return;
//   // }
//   // const faceMatcher = new faceapi.FaceMatcher(results);
//   // const singleResult = await faceapi
//   //   .detectSingleFace(video)
//   //   .withFaceLandmarks()
//   //   .withFaceDescriptor();
//   // if (singleResult) {
//   //   const bestMatch = faceMatcher.findBestMatch(singleResult.descriptor);
//   //   console.log(bestMatch.toString());
//   // }
//   // document.body.appendChild(img);
//   // const labeledFaceDescriptors = await loadLabeledImages();
//   // console.log(labeledFaceDescriptors);
//   // const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors, 0.6);
//   // console.log(faceMatcher)
//   // const displaySize = { width: video.width, height: video.height };
//   // // faceapi.matchDimensions(canvas, displaySize);
//   // const detections = await faceapi
//   //   .detectAllFaces(video)
//   //   .withFaceLandmarks()
//   //   .withFaceDescriptors();
//   // const resizedDetections = faceapi.resizeResults(detections, displaySize);
//   // const results = resizedDetections.map((d) =>
//   //   faceMatcher.findBestMatch(d.descriptor)
//   // );
//   // results.forEach((result, i) => {
//   //   // const box = resizedDetections[i].detection.box;
//   //   // const drawBox = new faceapi.draw.DrawBox(box, { label: result.toString() });
//   //   // drawBox.draw(canvas);
//   //   console.log(result.toString())
//   // });
//   // const detections = await faceapi
//   //   .detectSingleFace(img)
//   //   .withFaceLandmarks()
//   //   .withFaceDescriptor();
//   // // faceapi.LabeledFaceDescriptors(label, detections)
//   // console.log(faceapi.LabeledFaceDescriptors(label, detections));
// }

// function startVideo() {
//   navigator.getUserMedia(
//     { video: {} },
//     (stream) => (video.srcObject = stream),
//     (err) => console.error(err)
//   );
// }
// async function start() {
//   console.log(faceapi.nets);
//   console.log("hi");

//   document.body.append("Loaded");
//   let fullFaceDescriptions = await faceapi
//     .detectAllFaces(input)
//     .withFaceLandmarks()
//     .withFaceDescriptors();
// }

// function loadLabeledImages() {
//   return Promise.all(
//     labels.map(async (label) => {
//       let img = await faceapi.fetchImage("cindy-g-li.jpg");
//       const descriptions = [];
//       const detections = await faceapi
//         .detectSingleFace(img)
//         .withFaceLandmarks()
//         .withFaceDescriptor();
//       // descriptions.push(detections.descriptor);
//       console.log(detections);
//       console.log(detections.descriptor);
//       return label;
//       // return new faceapi.LabeledFaceDescriptors(label, descriptions);
//     })
//   );
// }
// video.addEventListener('play', () => {
//   // const canvas = faceapi.createCanvasFromMedia(video)
//   // document.body.append(canvas)
//   // const displaySize = { width: video.width, height: video.height }
//   // faceapi.matchDimensions(canvas, displaySize)
//   setInterval(async () => {
//     const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
//     const resizedDetections = faceapi.resizeResults(detections, displaySize)
//     canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
//     faceapi.draw.drawDetections(canvas, resizedDetections)
//     faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
//     faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
//   }, 100)
// })
