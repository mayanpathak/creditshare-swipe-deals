
import React from 'react';
import { Shield, Star, Award, CheckCircle, TrendingUp } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const TrustScoreExplainer = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Trust Score System</h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Our trust score system helps build confidence between buyers and card holders.
            Higher scores unlock more benefits and opportunities on the platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="rounded-xl bg-card p-8 shadow-sm border border-border">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                  <Shield className="h-12 w-12 text-credit-primary mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold">Trust Score: 85</h3>
                    <p className="text-muted-foreground">Very Good</p>
                  </div>
                </div>
                <span className="text-3xl font-bold text-credit-primary">85%</span>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Successful Transactions</span>
                    <span className="text-sm font-medium">95%</span>
                  </div>
                  <Progress value={95} className="h-2 bg-gray-200" indicatorClassName="bg-green-500" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">User Verification</span>
                    <span className="text-sm font-medium">100%</span>
                  </div>
                  <Progress value={100} className="h-2 bg-gray-200" indicatorClassName="bg-blue-500" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Communication Rating</span>
                    <span className="text-sm font-medium">80%</span>
                  </div>
                  <Progress value={80} className="h-2 bg-gray-200" indicatorClassName="bg-yellow-500" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Response Time</span>
                    <span className="text-sm font-medium">75%</span>
                  </div>
                  <Progress value={75} className="h-2 bg-gray-200" indicatorClassName="bg-orange-500" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Account Longevity</span>
                    <span className="text-sm font-medium">70%</span>
                  </div>
                  <Progress value={70} className="h-2 bg-gray-200" indicatorClassName="bg-purple-500" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <Star className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Multi-Factor Trust Score</h4>
                <p className="text-muted-foreground">Our trust score is calculated based on multiple factors including transaction history, verification level, and user reviews.</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                <CheckCircle className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">KYC Verification</h4>
                <p className="text-muted-foreground">Complete KYC verification to significantly increase your trust score and unlock premium features on the platform.</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Unlockable Benefits</h4>
                <p className="text-muted-foreground">Higher trust scores unlock benefits like lower fees, higher transaction limits, and priority matching with trusted users.</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Continuous Improvement</h4>
                <p className="text-muted-foreground">Your trust score is regularly updated based on your activity. Maintain consistent positive interactions to keep improving your score.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustScoreExplainer;
