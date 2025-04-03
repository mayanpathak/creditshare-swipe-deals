
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CreditCard, Lock, Zap, TrendingUp, Shield, Users } from 'lucide-react';

const features = [
  {
    title: "Smart Matching",
    description: "AI-powered system connects buyers with the right card holders based on preferences and history.",
    icon: Zap,
    badge: "Exclusive"
  },
  {
    title: "Secure Escrow",
    description: "All payments are held securely until delivery is confirmed, protecting both parties.",
    icon: Lock,
    badge: "Safe"
  },
  {
    title: "Trust Score System",
    description: "Users build trust scores based on successful transactions, reviews, and verification level.",
    icon: Shield,
    badge: "Unique"
  },
  {
    title: "Reward Points",
    description: "Earn points with each transaction that can be redeemed for platform benefits and discounts.",
    icon: TrendingUp,
    badge: "New"
  },
  {
    title: "Verified Users",
    description: "All users go through KYC verification for enhanced security and trust.",
    icon: Users,
    badge: "Secure"
  },
  {
    title: "Multiple Card Support",
    description: "Card holders can register multiple credit cards to maximize earning opportunities.",
    icon: CreditCard,
    badge: "Flexible"
  }
];

const FeatureHighlights = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 -right-20 h-64 w-64 rounded-full bg-credit-primary/5 blur-3xl"></div>
      <div className="absolute bottom-1/4 -left-20 h-64 w-64 rounded-full bg-credit-primary/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Why Choose CreditShare</h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Our platform offers unique features designed to make sharing credit card benefits
            safe, easy, and beneficial for everyone involved.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-border hover:shadow-md transition-all hover:-translate-y-1 relative overflow-hidden group">
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors"></div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="p-3 rounded-lg bg-gray-100 text-gray-700">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="outline" className="bg-gray-50">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="mt-4">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
