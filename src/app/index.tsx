
import { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";

import StudentCard from "../components/StudentCard";

const students = [
  { id: "s1", name: "Ana Cruz", course: "IT313", units: 21, isFullLoad: true },
  { id: "s2", name: "Bea Santos", course: "IT313", units: 15, isFullLoad: false },
  { id: "s3", name: "Cid Ramos", course: "IT313", units: 18, isFullLoad: true },
  { id: "s4", name: "Dex Alonzo", course: "IT313", units: 12, isFullLoad: false },
];

export default function StudentRoster() {
  const [reversed, setReversed] = useState(false);

  const displayedStudents = reversed
    ? [...students].reverse()
    : students;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>IT313 Student Roster</Text>

      <Text style={styles.count}>
        {`${students.length} students`}
      </Text>

      <Button
        title="Reverse Roster"
        onPress={() => setReversed(!reversed)}
      />

      {displayedStudents.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          course={student.course}
          units={student.units}
          isFullLoad={student.isFullLoad}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: "#F3F6FA",
    flexGrow: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  count: {
    fontSize: 16,
    marginBottom: 16,
  },
});
