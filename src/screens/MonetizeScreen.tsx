import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { MetricCard } from '../components/MetricCard';
import { creatorMetrics, subscriptionTiers } from '../data/mock';

export function MonetizeScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.heading}>Monetization Hub</Text>
      <Text style={styles.sub}>Track earnings and optimize creator income channels.</Text>

      <View style={styles.grid}>
        {creatorMetrics.map((metric) => (
          <MetricCard key={metric.label} {...metric} />
        ))}
      </View>

      <Text style={styles.sectionTitle}>Subscription Tiers</Text>
      {subscriptionTiers.map((tier) => (
        <View style={styles.tierCard} key={tier.id}>
          <Text style={styles.tierName}>
            {tier.name} • ${tier.monthlyPriceUsd.toFixed(2)}/mo
          </Text>
          {tier.perks.map((perk) => (
            <Text key={perk} style={styles.perk}>
              • {perk}
            </Text>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f0f10' },
  content: { padding: 16, paddingBottom: 34 },
  heading: { color: '#fff', fontSize: 26, fontWeight: '800' },
  sub: { color: '#a1a1aa', marginTop: 4, marginBottom: 14 },
  grid: { gap: 10 },
  sectionTitle: {
    color: '#f5f5f5',
    fontSize: 20,
    fontWeight: '800',
    marginTop: 18,
    marginBottom: 10
  },
  tierCard: {
    backgroundColor: '#1a1a1d',
    padding: 14,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#2c2c33',
    marginBottom: 10
  },
  tierName: { color: '#fef08a', fontWeight: '700', marginBottom: 6 },
  perk: { color: '#e4e4e7', marginBottom: 3 }
});
