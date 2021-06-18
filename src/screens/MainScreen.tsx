import React, { FC } from "react";
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  ListRenderItem,
  View,
  Text,
  ActivityIndicator,
} from "react-native";

import Card from "../components/Card";
import Search from "../components/Search";
import colors from "../configs/colors";
import Feed from "../models/Feed";

interface MainScreenProps {
  feeds: Array<Feed>;
  loading: boolean;
  onSearchPress: (text: string) => void;
  onClearPress: () => void;
}

const MainScreen: FC<MainScreenProps> = ({
  feeds,
  loading,
  onSearchPress,
  onClearPress,
}) => {
  const renderItem: ListRenderItem<Feed> = ({ item }) => (
    <Card {...item} onPress={onCardPressHandler} />
  );

  const keyExtractor = (item: Feed) => item.id.toString();

  const onCardPressHandler = (id: number) => {
    console.log(id);
  };

  const renderBody = () => {
    if (feeds.length === 0) {
      return (
        <View style={styles.notFound}>
          <Text style={styles.notFoundText}>Nothing found...</Text>
        </View>
      );
    }

    if (loading) {
      return (
        <ActivityIndicator style={StyleSheet.absoluteFill} size={"large"} />
      );
    } else {
      return (
        <FlatList
          data={feeds}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        ></FlatList>
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Search onSearchPress={onSearchPress} onClearPress={onClearPress} />
      </View>
      {renderBody()}
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#000000",
  },
  search: {
    height: 50,
  },
  notFound: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  notFoundText: {
    fontSize: 33,
    color: colors.secondary,
  },
});
