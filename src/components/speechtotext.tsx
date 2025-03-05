import React, { useState } from "react";
import * as SpeechSDK from "microsoft-cognitiveservices-speech-sdk";

const SpeechToText = () => {
  const [transcript, setTranscript] = useState<string>("");

  const startRecognition = () => {
    // Create the speech configuration
    const speechConfig = SpeechSDK.SpeechConfig.fromSubscription(
      process.env.REACT_APP_AZURE_SPEECH_KEY!,
      process.env.REACT_APP_AZURE_REGION!
    );

    // Create the audio configuration (using microphone input)
    const audioConfig = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();

    // Create the speech recognizer
    const recognizer = new SpeechSDK.SpeechRecognizer(speechConfig, audioConfig);

    // Start speech recognition
    recognizer.startContinuousRecognitionAsync();

    // Handle recognized speech
    recognizer.recognizing = (s, e) => {
      setTranscript(e.result.text);
    };

    // Handle recognition complete
    recognizer.recognized = (s, e) => {
      if (e.result.reason === SpeechSDK.ResultReason.RecognizedSpeech) {
        setTranscript(e.result.text);
      } else {
        setTranscript("Speech could not be recognized.");
      }
    };

    // Handle recognition error
    recognizer.canceled = (s, e) => {
      setTranscript(`Error: ${e.errorDetails}`);
    };
  };

  return (
    <div>
      <h3>Speech to Text</h3>
      <button onClick={startRecognition}>Start Speech Recognition</button>
      <p>Transcript: {transcript}</p>
    </div>
  );
};

export default SpeechToText;