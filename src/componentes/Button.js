import { StyleSheet, View, Pressable, Text } from 'react-native';
//Icons
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Button({ label, theme }) {

    if (theme === "primary") {
        return (
          <View
          style={[styles.buttonContainer, { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 }]}
          >
            <Pressable
              style={[styles.button, { backgroundColor: "#fff" }]}
              onPress={() => alert('Entrar')}
            >
              <FontAwesome
                name="picture-o"
                size={18}
                color="#800000"
                style={styles.buttonIcon}
              />
              <Text style={[styles.buttonLabel, { color: "#800000" }]}>{label}</Text>
            </Pressable>
        </View>
        );
      }
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => alert('Entrar')}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#800000',
    fontSize: 16,
  },
});
