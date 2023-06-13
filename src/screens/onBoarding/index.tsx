import BerberButton from '@/components/BerberButton';
import BerberText from '@/components/BerberText';
import {AuthStackParams} from '@/navigation/auth/AuthStack';
import {OnBoardingStackParams} from '@/navigation/onBoarding/OnBoardingStack';
import {colors, padding} from '@/theme';
import {scaledHeight, scaledWidth} from '@/utils/responsive';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View, StyleSheet, Dimensions, Image, FlatList} from 'react-native';

export type OnBoardingScreenParams = CompositeScreenProps<
  NativeStackScreenProps<OnBoardingStackParams, 'OnBoardingScreen'>,
  NativeStackScreenProps<AuthStackParams>
>;
const OnBoardingScreen: React.FC<OnBoardingScreenParams> = ({navigation}) => {
  const dimension = Dimensions.get('window');
  const carouselItems = [
    {
      id: 1,
      image: require('@/assets/images/onboarding1.png'),
      text: 'Kampanyalardan Haberdar Ol',
      description: 'Güncel kampayalarımız ile avantajlı fiyatlardan faydalan...',
    },
    {
      id: 2,
      image: require('@/assets/images/onboarding2.png'),
      text: 'Kolayca randevu hizmeti',
      description: 'Randevu hizmetinden faydalanarak zamandan kazan...',
    },
    {
      id: 3,
      image: require('@/assets/images/onboarding3.png'),
      text: 'Saç Modellerini Kaydet',
      description: 'Saç modellerini kaydet veya kayıtlı modellerden beğendiğini seçerek traş ol...',
    },
  ];

  const renderOnBoardingDot = (onBoardingIndex: number) => {
    return carouselItems.map((item, index) => (
      <View
        key={index.toString()}
        style={[
          styles.dotOnBoard,
          {
            backgroundColor: onBoardingIndex === index ? '#59949D' : '#efefef',
          },
        ]}
      />
    ));
  };

  return (
    <>
      <Image source={require('@/assets/images/m1.png')} style={[styles.image, {height: dimension.height, width: dimension.width}]} />
      <FlatList
        keyExtractor={(item, index) => index.toString()} //Add this line
        data={carouselItems}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
        renderItem={({item, index}) => {
          return (
            <View style={[styles.flatList, {width: dimension.width}]} key={index.toString()}>
              <Image source={item.image} style={styles.imageFlatlist} />
              <View style={{paddingHorizontal: scaledWidth(20)}}>
                <BerberText style={styles.textHead}>{item.text}</BerberText>
              </View>

              <View
                style={{
                  paddingHorizontal: scaledWidth(20),
                  paddingTop: scaledHeight(25),
                }}>
                <BerberText style={styles.textDescription}>{item.description}</BerberText>
              </View>
              <View style={[styles.dotView, {display: index !== 2 ? 'flex' : 'none'}]}>
                <View style={styles.dot}>{renderOnBoardingDot(index)}</View>
              </View>
              <View style={styles.buttonContainer}>
                <BerberButton onPress={() => navigation.navigate('AuthStack')} style={[styles.button, {display: index !== 2 ? 'none' : 'flex'}]}>
                  <BerberText style={styles.buttonTextStyle}>Kayıt Ol</BerberText>
                </BerberButton>
              </View>
            </View>
          );
        }}
      />
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  flatList: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  slider: {
    flex: 1,
    zIndex: 9999,
  },
  imageFlatlist: {
    alignSelf: 'center',
    width: scaledWidth(350),
    height: scaledHeight(350),
    marginRight: scaledWidth(20),
  },
  view: {
    alignItems: 'center',
  },
  text: {
    marginTop: scaledHeight(4),
    fontSize: scaledWidth(28),
    color: colors.black,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: scaledHeight(20),
  },
  button: {
    backgroundColor: colors.white,
    justifyContent: 'center',
    paddingHorizontal: padding[6],
    paddingVertical: padding[3],
    borderRadius: scaledWidth(28),
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonTextStyle: {
    color: colors.black,
    fontSize: scaledWidth(14),
  },
  image: {
    position: 'absolute',
    opacity: 0.9,
  },
  textHead: {
    fontSize: scaledHeight(24),
    fontWeight: '700',
    color: 'white',
  },
  textDescription: {
    fontSize: scaledHeight(14),
    color: '#efefef',
  },
  dotView: {
    alignContent: 'center',
    alignSelf: 'center',
    bottom: scaledHeight(140),
    position: 'absolute',
  },
  dot: {
    flexDirection: 'row',
  },
  dotOnBoard: {
    width: scaledWidth(10),
    height: scaledWidth(10),
    borderRadius: scaledWidth(5),
    marginRight: scaledWidth(20),
    borderColor: 'green',
    borderWidth: scaledWidth(0.8),
  },
});
export default OnBoardingScreen;
