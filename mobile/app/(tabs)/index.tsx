import { Image, StyleSheet, Platform, Pressable } from 'react-native';
import { Alert, Button, View } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/open-graph-logo-large-br.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Olá, Jorge</ThemedText>
        <HelloWave />
      </ThemedView>
        <ThemedText type="subtitle">
        </ThemedText><ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">
          <Pressable
            onPress={() => { router.push('/explore');

              console.log('You tapped the button!');
            }}
            style={{
              backgroundColor: "#841584",
              padding: 6,
              borderRadius: 100,
              alignItems: 'center',
              justifyContent: 'center',
              width: 38,
            }}
          >
            <ThemedText style={{ color: 'white', fontWeight: 'bold' }}>Pix</ThemedText>
          </Pressable></ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold"></ThemedText>

          <ThemedText type="defaultSemiBold">
            {Platform.select({

            })}
          </ThemedText>{' '}

        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Transferir</ThemedText>
        <ThemedText>

        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Meus cartões</ThemedText>
        <ThemedText>
          {' '}
          <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText>
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>

  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: '100%',
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});