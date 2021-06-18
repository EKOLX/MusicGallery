import React, { FC, useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBackspace, faSearch } from "@fortawesome/free-solid-svg-icons";

import colors from "../configs/colors";

interface SearchProps {
  onSearchPress: (text: string) => void;
  onClearPress: () => void;
}

const Search: FC<SearchProps> = ({ onSearchPress, onClearPress }) => {
  const [text, setText] = useState("");

  const onChangeTextHandler = (value: string) => {
    setText(value);
  };

  const onSubmitEditingHandler = () => {
    const temp = text;
    setText("");
    onSearchPress(temp);
  };

  const onClearPressHandler = () => {
    setText("");
    onClearPress();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for music..."
        placeholderTextColor="grey"
        value={text}
        onChangeText={onChangeTextHandler}
        onSubmitEditing={onSubmitEditingHandler}
      />
      <View style={styles.iconsContainer}>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity activeOpacity={0} onPress={onClearPressHandler}>
            <FontAwesomeIcon style={styles.icon} icon={faBackspace} size={19} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0} onPress={onSubmitEditingHandler}>
            <FontAwesomeIcon style={styles.icon} icon={faSearch} size={19} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    fontSize: 22,
    color: colors.secondary,
    backgroundColor: colors.primary,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  iconsContainer: {
    position: "absolute",
    right: 10,
    alignSelf: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  icon: {
    color: colors.secondary,
    marginLeft: 10,
  },
});
