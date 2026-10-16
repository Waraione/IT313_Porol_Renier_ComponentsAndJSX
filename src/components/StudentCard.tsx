
import { StyleSheet, Text, View } from "react-native";

type StudentCardProps = {
  name: string;
  course: string;
  units: number;
  isFullLoad: boolean;
};

export default function StudentCard({
  name,
  course,
  units,
  isFullLoad,
}: StudentCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text>Course: {course}</Text>
      <Text>Units enrolled: {units}</Text>

      {isFullLoad && (
        <Text style={styles.fullLoad}>Full Load</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    marginVertical: 6,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#DDDDDD",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
  },
  fullLoad: {
    color: "green",
    fontWeight: "bold",
    marginTop: 8,
  },
});
