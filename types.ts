import { LucideIcon } from 'lucide-react';

export interface NavItem {
  id: string;
  label: string;
  icon?: LucideIcon;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  tech: string[];
  description: string;
  features: string[];
  featured: boolean;
  link?: string;
}

export interface Stat {
  value: string;
  label: string;
  sub: string;
}

export interface AdMetric {
  id: number;
  label: string;
  value: string;
  sub: string;
  icon: LucideIcon;
  trend?: string;
}

export interface CampaignData {
  name: string;
  status: 'Active' | 'Inactive';
  clicks: number;
  ctr: string;
  cpc: string;
  impressions: string;
  results: string;
  highlight?: 'best' | 'worst' | 'neutral';
}
