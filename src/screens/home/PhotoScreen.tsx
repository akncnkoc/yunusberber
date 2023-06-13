import IconSvgClose from '@/assets/svg/IconSvgClose';
import {HomeStackParams} from '@/navigation/home/HomeStack';
import {colors} from '@/theme';
import {scaledHeight, scaledWidth} from '@/utils/responsive';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Alert, TouchableOpacity, Image, FlatList, ScrollView} from 'react-native';
import {Swipeable} from 'react-native-gesture-handler';
import {ImageLibraryOptions, launchCamera, launchImageLibrary} from 'react-native-image-picker';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import IconSvgDeleteBigBox from '@/assets/svg/IconSvgDeleteBigBox';

type PhotoScreenParams = NativeStackScreenProps<HomeStackParams, 'PhotoScreen'>;
const PhotoScreen: React.FC<PhotoScreenParams> = () => {
  const [galleryPhotos, setGalleryPhotos] = React.useState<Array<string>>([]);
  const [selectedPhotos, setSelectedPhotos] = React.useState<Array<number>>([]);
  const [imagePreview, setImagePreview] = React.useState<string>('');
  const [selectDelete, setSelecetDate] = React.useState<number>(0);
  const handleImageUser = () => {
    Alert.alert(
      'Seçiniz',
      'Fotoğraf Yüklemek İçin Seçim Yapınız',
      [
        {
          text: 'Galeri',
          onPress: () => pickImageFromGalery(),
          style: 'default',
        },
        {
          text: 'Kamera',
          onPress: () => pickImageFromCamera(),
          style: 'default',
        },
      ],
      {
        cancelable: true,
        onDismiss: () => console.log('tratar deposit ...'),
      },
    );
  };
  // upload from galery
  const pickImageFromGalery = async () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
    };
    const result = await launchImageLibrary(options);
    if (result && result.assets && result.assets[0]) {
      setGalleryPhotos(prev => [...prev, result.assets[0].uri ?? '']);
      return;
    }
  };
  // Upload camera
  const pickImageFromCamera = async () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      quality: 1,
    };
    const result = await launchCamera(options);
    if (result && result.assets && result.assets[0]) {
      setGalleryPhotos(prev => [...prev, result.assets[0].uri ?? '']);
      return;
    }
  };

  const deleteImagesFromGallery = () => {
    let galleryFilterPhotos = [...galleryPhotos];
    let tempSelectedPhotos = [...selectedPhotos];
    galleryFilterPhotos = galleryFilterPhotos.filter((photo, index) => {
      if (!selectedPhotos.includes(index)) {
        tempSelectedPhotos = tempSelectedPhotos.filter(tempindex => tempindex == index);
        return true;
      }
    });

    setSelectedPhotos(tempSelectedPhotos);
    setGalleryPhotos(galleryFilterPhotos);
    setSelecetDate(0);
  };

  const handleImageLongPressAction = (index: number) => {
    if (selectedPhotos.length === 0) {
      setSelectedPhotos(prev => [...prev, index]);
    }
  };

  const deletePictures = () => {
    Alert.alert(
      'Seçim Yapınız',
      'Fotoğraf silmek istediğinize emin misiniz?',
      [
        {
          text: 'Evet',
          onPress: () => deleteImagesFromGallery(),
          style: 'default',
        },
        {
          text: 'Hayır',
          onPress: () => {},
          style: 'default',
        },
      ],
      {
        cancelable: true,
        onDismiss: () => console.log('tratar deposit ...'),
      },
    );
  };

  const selectPhoto = (index: number) => {
    if (selectedPhotos.length > 0) {
      if (selectedPhotos.findIndex((selectedPhotoIndex, _) => selectedPhotoIndex === index) === -1) {
        setSelectedPhotos(prev => [...prev, index]);
      } else {
        const tempSelectedPhotos = selectedPhotos.filter((selectedPhotoIndex, _) => index !== selectedPhotoIndex);
        setSelectedPhotos(tempSelectedPhotos);
      }
    } else {
      // büyütme işlemi için
      console.log(galleryPhotos.find((galleryPhoto, galleryIndex) => index == galleryIndex));

      setImagePreview(galleryPhotos.find((galleryPhoto, galleryIndex) => index == galleryIndex));
    }
  };

  const unSelectAllPhotos = () => {
    setSelectedPhotos([]);
  };

  useEffect(() => {
    if (selectedPhotos.length > 0) {
      setSelecetDate(1);
    } else {
      setSelecetDate(0);
    }
  }, [selectedPhotos]);

  return (
    <View style={styles.container}>
      {selectDelete === 1 && (
        <View style={styles.icons}>
          <TouchableOpacity onPress={() => deletePictures()}>
            <IconSvgDeleteBigBox />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => unSelectAllPhotos()} style={{paddingLeft: scaledWidth(60)}}>
            <IconSvgClose />
          </TouchableOpacity>
        </View>
      )}
      <ScrollView
        contentContainerStyle={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          paddingBottom: 120,
        }}
        horizontal={false}>
        {galleryPhotos.map((galleryPhoto, index) => (
          <TouchableOpacity
            onPress={() => selectPhoto(index)}
            onLongPress={() => handleImageLongPressAction(index)}
            key={index}
            style={{padding: 10, position: 'relative'}}>
            <Image
              style={styles.circleProfile}
              source={{
                uri: galleryPhoto,
              }}
              resizeMode={'cover'}
            />

            {selectedPhotos.findIndex((selectedPhotoIndex, _) => selectedPhotoIndex === index) !== -1 && (
              <BouncyCheckbox
                style={{
                  position: 'absolute',
                  zIndex: 9999,
                  top: scaledHeight(20),
                  right: scaledHeight(10),
                }}
                isChecked={true}
                fillColor={colors.mainColor}
                unfillColor="#FFFFFF"
                iconStyle={{
                  width: scaledHeight(18),
                  height: scaledHeight(18),
                }}
                innerIconStyle={{width: 23, height: 23}}
              />
            )}

            {selectedPhotos.length > 0 && selectedPhotos.findIndex((selectedPhotoIndex, _) => selectedPhotoIndex === index) === -1 && (
              <BouncyCheckbox
                style={{
                  position: 'absolute',
                  zIndex: 9999,
                  top: scaledHeight(20),
                  right: scaledHeight(10),
                }}
                isChecked={false}
                fillColor={colors.mainColor}
                unfillColor="#FFFFFF"
                iconStyle={{
                  width: 18,
                  height: 18,
                }}
                innerIconStyle={{width: 23, height: 23}}
              />
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
      {imagePreview && (
        <View
          style={{
            flex: 1,
            position: 'absolute',
            width: '100%',
            height: '100%',
            zIndex: 99999,
          }}>
          <TouchableOpacity
            style={{
              flex: 1,
              zIndex: 99999,
              left: '88%',
            }}
            onPress={() => setImagePreview('')}>
            <IconSvgClose />
          </TouchableOpacity>
          <Image
            source={{uri: imagePreview}}
            resizeMode="cover"
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              zIndex: 999,
            }}
          />
        </View>
      )}
      <TouchableOpacity style={styles.button} onPress={() => handleImageUser()}>
        <Text
          style={{
            backgroundColor: colors.mainColor,
            paddingHorizontal: scaledHeight(90),
            paddingVertical: scaledHeight(20),
            color: colors.white,
            fontWeight: '700',
            fontSize: scaledHeight(22),
            borderRadius: scaledWidth(40),
          }}>
          Fotoğraf Yükle
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    marginTop: scaledHeight(2),
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 40,
    overflow: 'hidden',
    bottom: scaledHeight(40),
  },
  circleProfile: {
    width: scaledHeight(100),
    height: scaledHeight(200),
  },
});
export default PhotoScreen;
