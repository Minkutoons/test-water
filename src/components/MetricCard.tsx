import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CreatorMetric } from '../types';

export function MetricCard({ label, value }: CreatorMetric) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1a1a1d',
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: '#2c2c33'
  },
  label: {
    color: '#cbd5e1',
    marginBottom: 8
  },
  value: {
    color: '#fef08a',
    fontSize: 18,
    fontWeight: '800'
  }
});
