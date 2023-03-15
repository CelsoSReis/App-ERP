import { StyleSheet, Image } from 'react-native';

export default function ImageView({ placeholderImageSource }) {
  return (
    <Image source={placeholderImageSource} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 180,
    height: 180,
  },
});
