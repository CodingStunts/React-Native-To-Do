import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text styles={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#FF8000",
    opacity: 0.8,
    borderRadius: 7,
    marginRight: 15,
  },
  itemText: {
    maxWidth: "80%",
  },
  circular: {
    width: 15,
    height: 15,
    borderColor: "#FF8000",
    borderWidth: 3,
    borderRadius: 10,
  },
});

export default Task;
