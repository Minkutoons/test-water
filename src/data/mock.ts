import { CreatorMetric, GiftPackage, SubscriptionTier, VideoPost } from '../types';

export const feedPosts: VideoPost[] = [
  {
    id: 'v1',
    creator: '@danceflare',
    title: '30-sec dance challenge remix 🔥',
    likes: 128400,
    comments: 4270,
    shares: 1900,
    tags: ['dance', 'challenge', 'viral']
  },
  {
    id: 'v2',
    creator: '@chefbyte',
    title: '3-ingredient street tacos in 20 sec 🌮',
    likes: 78500,
    comments: 1300,
    shares: 800,
    tags: ['food', 'quickrecipe', 'streetfood']
  },
  {
    id: 'v3',
    creator: '@fitnova',
    title: 'Core workout no equipment 💪',
    likes: 96300,
    comments: 2200,
    shares: 1400,
    tags: ['fitness', 'homeworkout', 'motivation']
  }
];

export const creatorMetrics: CreatorMetric[] = [
  { label: 'Monthly Ad Revenue', value: '$12,480' },
  { label: 'Subscription MRR', value: '$4,260' },
  { label: 'Live Gifts (30d)', value: '$3,920' },
  { label: 'Affiliate Sales', value: '$1,740' }
];

export const giftPackages: GiftPackage[] = [
  { id: 'g1', coins: 70, priceUsd: 0.99 },
  { id: 'g2', coins: 350, priceUsd: 4.99 },
  { id: 'g3', coins: 700, priceUsd: 9.99 },
  { id: 'g4', coins: 1400, priceUsd: 19.99 }
];

export const subscriptionTiers: SubscriptionTier[] = [
  {
    id: 's1',
    name: 'Fan',
    monthlyPriceUsd: 3.99,
    perks: ['Subscriber badge', 'Exclusive comments access']
  },
  {
    id: 's2',
    name: 'Super Fan',
    monthlyPriceUsd: 9.99,
    perks: ['All Fan perks', 'Weekly behind-the-scenes clips', 'Priority Q&A']
  }
];
