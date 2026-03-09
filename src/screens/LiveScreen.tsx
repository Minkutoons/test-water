import React, { useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { giftPackages } from '../data/mock';

export function LiveScreen() {
  const [walletCoins, setWalletCoins] = useState(420);
  const [selectedPack, setSelectedPack] = useState(giftPackages[1].id);

  const current = useMemo(
    () => giftPackages.find((p) => p.id === selectedPack) ?? giftPackages[0],
    [selectedPack]
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Live Gifting</Text>
      <Text style={styles.copy}>Let viewers buy coins and send gifts in real time.</Text>

      <View style={styles.balanceBox}>
        <Text style={styles.balanceLabel}>Wallet Balance</Text>
        <Text style={styles.balance}>{walletCoins} coins</Text>
      </View>

      <Text style={styles.section}>Coin Packages</Text>
      <View style={styles.packGrid}>
        {giftPackages.map((pack) => {
          const active = pack.id === selectedPack;
          return (
            <Pressable
              key={pack.id}
              onPress={() => setSelectedPack(pack.id)}
              style={[styles.pack, active && styles.packActive]}
            >
              <Text style={styles.packCoins}>{pack.coins} coins</Text>
              <Text style={styles.packPrice}>${pack.priceUsd.toFixed(2)}</Text>
            </Pressable>
          );
        })}
      </View>

      <Pressable style={styles.buyBtn} onPress={() => setWalletCoins((c) => c + current.coins)}>
        <Text style={styles.buyText}>Buy Selected Pack</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f0f10', padding: 16 },
  heading: { color: '#fff', fontSize: 26, fontWeight: '800' },
  copy: { color: '#a1a1aa', marginTop: 6 },
  balanceBox: {
    marginTop: 18,
    backgroundColor: '#1a1a1d',
    borderColor: '#2c2c33',
    borderWidth: 1,
    borderRadius: 14,
    padding: 14
  },
  balanceLabel: { color: '#cbd5e1' },
  balance: { color: '#86efac', fontSize: 22, fontWeight: '800', marginTop: 4 },
  section: { color: '#f5f5f5', fontWeight: '700', marginTop: 16, marginBottom: 10 },
  packGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  pack: {
    width: '48%',
    backgroundColor: '#1a1a1d',
    borderWidth: 1,
    borderColor: '#2c2c33',
    borderRadius: 12,
    padding: 12
  },
  packActive: {
    borderColor: '#22d3ee'
  },
  packCoins: { color: '#fff', fontWeight: '700' },
  packPrice: { color: '#fde68a', marginTop: 4 },
  buyBtn: {
    marginTop: 18,
    backgroundColor: '#22d3ee',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center'
  },
  buyText: {
    color: '#0a0a0a',
    fontWeight: '800'
  }
});
