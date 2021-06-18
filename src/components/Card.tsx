import React, { FC } from "react";
import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";

import colors from "../configs/colors";
import Feed from "../models/Feed";

interface CardProps extends Feed {
  onPress: (id: number) => void;
}

const Card: FC<CardProps> = ({
  id,
  category,
  artist,
  title,
  imageUri,
  price,
  onPress,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => onPress(id)}>
      <View style={styles.container}>
        <View style={styles.leftSection}>
          <Image style={styles.image} source={{ uri: imageUri }} />
        </View>
        <View style={styles.rightSection}>
          <Text style={styles.headerText}>{category}</Text>
          <View style={styles.textBlock}>
            <Text
              style={[
                styles.text,
                {
                  fontWeight: "800",
                },
              ]}
            >
              Artist: {artist}
            </Text>
            <Text style={styles.text}>Title: {title}</Text>
            <Text style={styles.text}>Price: {price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    height: 150,
    backgroundColor: colors.primary,
    borderColor: "#1F5057",
    borderWidth: 1,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.6,
    borderRadius: 10,
    margin: 10,
  },
  leftSection: {
    flex: 0.4,
    padding: 5,
  },
  rightSection: {
    flex: 0.6,
    padding: 5,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  headerText: {
    fontSize: 23,
    color: "white",
  },
  textBlock: {
    marginTop: 10,
    color: "white",
  },
  text: {
    color: "white",
  },
});
