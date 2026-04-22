let audioCtx, analyser, dataArray, source;

async function setupAudio() {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioCtx.createAnalyser();
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    source = audioCtx.createMediaStreamSource(stream);
    source.connect(analyser);
    analyser.fftSize = 256;
    dataArray = new Uint8Array(analyser.frequencyBinCount);
}

function getAudioData() {
    analyser.getByteFrequencyData(dataArray);
    return dataArray; // This array is the "Seed" for the visuals
}
