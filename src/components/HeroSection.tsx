
import React from 'react';
import { CreditCard, ShoppingCart, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-background pb-16 pt-20">
      {/* Background gradient */}
      <div className="absolute -top-24 left-1/2 h-[600px] w-[600px] -translate-x-1/2 transform rounded-full bg-credit-primary/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="relative z-10 flex flex-col items-center justify-between gap-12 lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
              <span className="hero-text">
                Unlock Credit Card Discounts
              </span>
              <br />
              Without a Credit Card
            </h1>
            
            <p className="mb-8 max-w-2xl text-xl text-muted-foreground lg:text-2xl">
              A secure marketplace connecting buyers with credit card holders. Save money on purchases while card holders earn for helping.
            </p>
            
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button size="lg" className="credit-gradient text-white" asChild>
                <Link to="/buyer">Start Buying</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/card-holder">Start Earning</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="animate-float relative mx-auto h-[400px] w-[350px]">
              {/* Credit card animation */}
              <div className="credit-card absolute left-0 top-0 h-64 w-96 rotate-12 bg-gradient-to-r from-credit-primary to-credit-vivid p-6 text-white">
                <div className="mb-6 space-y-4">
                  <div className="h-10 w-14 rounded-md bg-white/20"></div>
                  <div className="h-6 w-48 rounded-md bg-white/10"></div>
                </div>
                <div className="mb-6 h-8 w-16 rounded-md bg-white/20"></div>
                <div className="space-y-2">
                  <div className="h-4 w-full rounded-md bg-white/10"></div>
                  <div className="h-4 w-28 rounded-md bg-white/10"></div>
                </div>
              </div>
              
              {/* Multiple small circles */}
              <div className="absolute -right-4 top-1/3 h-20 w-20 rounded-full bg-credit-primary/20"></div>
              <div className="absolute -left-6 top-2/3 h-16 w-16 rounded-full bg-credit-vivid/20"></div>
              <div className="absolute bottom-0 right-1/4 h-28 w-28 rounded-full bg-purple-300/20"></div>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-1 gap-8 rounded-xl border border-border bg-card p-8 shadow-sm md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 rounded-full bg-primary p-4">
              <ShoppingCart className="h-8 w-8 text-credit-primary" />
            </div>
            <h3 className="mb-2 text-2xl font-bold">50,000+</h3>
            <p className="text-muted-foreground">Successful Purchases</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 rounded-full bg-primary p-4">
              <CreditCard className="h-8 w-8 text-credit-primary" />
            </div>
            <h3 className="mb-2 text-2xl font-bold">10,000+</h3>
            <p className="text-muted-foreground">Active Card Holders</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 rounded-full bg-primary p-4">
              <TrendingUp className="h-8 w-8 text-credit-primary" />
            </div>
            <h3 className="mb-2 text-2xl font-bold">₹25M+</h3>
            <p className="text-muted-foreground">Savings Generated</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
