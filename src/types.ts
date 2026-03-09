export type VideoPost = {
  id: string;
  creator: string;
  title: string;
  likes: number;
  comments: number;
  shares: number;
  tags: string[];
};

export type CreatorMetric = {
  label: string;
  value: string;
};

export type GiftPackage = {
  id: string;
  coins: number;
  priceUsd: number;
};

export type SubscriptionTier = {
  id: string;
  name: string;
  monthlyPriceUsd: number;
  perks: string[];
};
