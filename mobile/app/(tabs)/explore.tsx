import { StyleSheet, Image, Platform, Pressable } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { router } from 'expo-router';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
          source={require('@/assets/images/open-graph-logo-large-br.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Pix</ThemedText>
      </ThemedView>
      <ThemedText><ThemedText type="subtitle">
          <Pressable
            onPress={() => { router.push('http://www.nubank.com.br');

              console.log('You tapped the button!');
            }}
            style={{
              backgroundColor: "#841584",
              padding: 6,
              borderRadius: 100,
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <ThemedText style={{ color: 'white', fontWeight: 'bold' }}>Ler QR Code</ThemedText>
          </Pressable></ThemedText></ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText>
        </ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold"></ThemedText>{' '}
        </ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold"></ThemedText>
        </ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold"></ThemedText>
          <ThemedText type="defaultSemiBold"></ThemedText>
          <Pressable
            onPress={() => { router.push('http://www.bmw.com');

              console.log('You tapped the button!');
            }}
            style={{
              backgroundColor: "#841584",
              padding: 6,
              borderRadius: 100,
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <ThemedText style={{ color: 'white', fontWeight: 'bold' }}>Pix Copia e Cola </ThemedText>
          </Pressable>
          <ThemedText type="defaultSemiBold"></ThemedText>
          <ThemedText style={{ fontFamily: 'SpaceMono' }}>
          </ThemedText>
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <ThemedText type="link"></ThemedText>
        </ExternalLink>
      {Platform.select({
        ios: (
          <ThemedText>
            <ThemedText type="defaultSemiBold"></ThemedText>{' '}

          </ThemedText>
        ),
      })}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  reactLogo: {
    height: '100%',
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

