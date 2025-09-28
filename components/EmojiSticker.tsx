import { ImageSourcePropType, View } from 'react-native';
import { Image } from 'expo-image';
import { Animated } from 'react-native-animated';

type Props = {
  imageSize: number;
  stickerSource: ImageSourcePropType;
};

export default function EmojiSticker({ imageSize, stickerSource }: Props) {
  return (
    <View style={{ top: -350 }}>
      <Animated.Image source={stickerSource as ImageSourcePropType}
      resizeMode="contain"
      style={{ width: imageSize, height: imageSize }} />
    </View>
  );
}
