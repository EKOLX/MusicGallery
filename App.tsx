import React, { useEffect, useState, useCallback } from "react";
import { StyleSheet, View } from "react-native";

import MainScreen from "./src/screens/MainScreen";
import Feed from "./src/models/Feed";
import { iTunesParser } from "./src/utils/iTunesParser";

const apiUrl = "https://itunes.apple.com/us/rss/topalbums/limit=100/json";
let allFeeds: Array<Feed> = [];

export default function App() {
  const [feeds, setFeeds] = useState<Array<Feed>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.text())
      .then((data) => {
        allFeeds = iTunesParser(data);
        setFeeds(allFeeds);
        setLoading(false);
      });
  }, []);

  const onSearchPressHandler = (value: string) => {
    setLoading(true);
    // Simulating API call
    new Promise<Array<Feed>>((resolve, reject) => {
      setTimeout(() => {
        const filtered = allFeeds.filter(
          (feed) =>
            feed.category.includes(value) ||
            feed.artist.includes(value) ||
            feed.title.includes(value)
        );
        resolve(filtered);
      }, 2000);
    }).then((data) => {
      setFeeds(data);
      setLoading(false);
    });
  };

  const onClearPressHandler = () => {
    setFeeds(allFeeds);
  };

  return (
    <View style={styles.container}>
      <MainScreen
        loading={loading}
        feeds={feeds}
        onSearchPress={onSearchPressHandler}
        onClearPress={onClearPressHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
