import * as React from 'react';
import { useState } from "react";
import { StyleSheet, Text, View, Dimensions, Button } from "react-native";
import { Video, AVPlaybackStatus } from 'expo-av';
import * as FileSystem from "expo-file-system";
import { ScreenContainer } from "react-native-screens";


const { width, height } = Dimensions.get("window");

const TaskVideoScreen = () => {
  const [videoUrl, setVideoUrl] = useState(
    "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
  );
  //   const [buttonTitle, setButtonTitle] = useState("Download");
  //   const [progressValue, setProgressValue] = useState(0);
  //   const [totalSize, setTotalSize] = useState(0);

  //   function formatBytes(bytes, decimals = 2) {
  //     if (bytes === 0) return "0 Bytes";

  //     const k = 1024;
  //     const dm = decimals < 0 ? 0 : decimals;
  //     const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  //     const i = Math.floor(Math.log(bytes) / Math.log(k));

  //     return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  //   }
  //   async function downloadVideo() {
  //     setButtonTitle("Downloading");

  //     const callback = (downloadProgress) => {
  //       setTotalSize(formatBytes(downloadProgress.totalBytesExpectedToWrite));

  //       var progress =
  //         downloadProgress.totalBytesWritten /
  //         downloadProgress.totalBytesExpectedToWrite;
  //       progress = progress.toFixed(2) * 100;
  //       setProgressValue(progress.toFixed(0));
  //     };

  //     const downloadResumable = FileSystem.createDownloadResumable(
  //       videoUrl,
  //       FileSystem.documentDirectory + "small.mp4",
  //       {},
  //       callback
  //     );

  //     try {
  //       const { uri } = await downloadResumable.downloadAsync();
  //       console.log("Finished downloading to ", uri);
  //       setButtonTitle("Downloaded");
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   }

  return (
    <ScreenContainer>
      <View style={styles.container}>
        const video = React.useRef(null);
        const [status, setStatus] = React.useState({});
        <View style={styles.container}>
          <Video
            ref={video}
            style={styles.video}
            source={{
              uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
            }}
            useNativeControls
            resizeMode="contain"
            isLooping
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          />
          <View style={styles.buttons}>
            <Button
              title={status.isPlaying ? "Pause" : "Play"}
              onPress={() =>
                status.isPlaying
                  ? video.current.pauseAsync()
                  : video.current.playAsync()
              }
            />
          </View>
        </View>
        {/* <Button title={buttonTitle} onPress={downloadVideo}></Button>
        <Text> Size: {totalSize} </Text>
        <Text>Progress: {progressValue} %</Text> */}
      </View>
    </ScreenContainer>
  );
};

export default TaskVideoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
