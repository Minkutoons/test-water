import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { VideoCard } from '../components/VideoCard';
import { feedPosts } from '../data/mock';

export function FeedScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.heading}>For You</Text>
        <Text style={styles.sub}>Short videos + creator growth</Text>
      </View>
      <FlatList
        contentContainerStyle={styles.listContent}
        data={feedPosts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <VideoCard post={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f0f10' },
  headerRow: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 6
  },
  heading: {
    color: '#fafafa',
    fontWeight: '800',
    fontSize: 28
  },
  sub: {
    color: '#a1a1aa',
    marginTop: 2
  },
  listContent: {
    padding: 16,
    paddingBottom: 30
  }
});
