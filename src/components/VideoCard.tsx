import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { VideoPost } from '../types';

type Props = {
  post: VideoPost;
};

const compact = (num: number) =>
  Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 }).format(num);

export function VideoCard({ post }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.creator}>{post.creator}</Text>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.tags}>#{post.tags.join(' #')}</Text>
      <View style={styles.row}>
        <Text style={styles.metric}>❤️ {compact(post.likes)}</Text>
        <Text style={styles.metric}>💬 {compact(post.comments)}</Text>
        <Text style={styles.metric}>🔁 {compact(post.shares)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1a1a1d',
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#2c2c33'
  },
  creator: {
    color: '#a7f3d0',
    fontWeight: '700',
    marginBottom: 6
  },
  title: {
    color: '#f5f5f5',
    fontSize: 16,
    fontWeight: '600'
  },
  tags: {
    color: '#93c5fd',
    marginTop: 6
  },
  row: {
    marginTop: 12,
    flexDirection: 'row',
    gap: 12
  },
  metric: {
    color: '#e4e4e7',
    fontWeight: '600'
  }
});
