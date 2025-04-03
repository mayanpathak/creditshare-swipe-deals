
import React from 'react';
import { Button } from '@/components/ui/button';

const MobileAppPromo = () => {
  return (
    <section className="py-24 bg-accent/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">CreditShare Mobile App</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Take CreditShare with you wherever you go. Our mobile app allows you to browse orders,
              accept requests, and track transactions on the move. Available for iOS and Android.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Button className="bg-black text-white hover:bg-gray-800">
                <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2" fill="currentColor">
                  <path d="M17.5642 12.0002C17.5642 11.5522 17.5642 11.1042 17.5642 10.5452C17.4532 10.5452 17.3422 10.5452 17.2312 10.5452C15.5672 10.5452 13.9032 10.5452 12.1282 10.5452C11.4592 10.5452 11.3482 10.4342 11.3482 9.76519C11.3482 8.10119 11.3482 6.43719 11.3482 4.77319C11.3482 4.21319 11.4592 4.10219 12.0192 4.10219C15.1192 4.10219 18.2192 4.10219 21.3192 4.10219C21.8792 4.10219 21.9902 4.21319 21.9902 4.77319C21.9902 8.87419 21.9902 12.9752 21.9902 17.0762C21.9902 17.6362 21.8792 17.7472 21.3192 17.7472C18.2192 17.7472 15.1192 17.7472 12.0192 17.7472C11.4592 17.7472 11.3482 17.6362 11.3482 17.0762C11.3482 15.4122 11.3482 13.7482 11.3482 12.0842C11.3482 11.5242 11.4592 11.3022 12.0192 11.3022C13.7942 11.3022 15.4582 11.3022 17.2312 11.3022C17.3422 11.3022 17.4532 11.3022 17.5642 11.3022C17.5642 11.5242 17.5642 11.7462 17.5642 12.0002Z" />
                  <path d="M6.1321 4.10217C6.6921 4.10217 7.1401 4.10217 7.6991 4.10217C7.6991 4.21317 7.6991 4.32417 7.6991 4.43517C7.6991 6.99117 7.6991 9.54717 7.6991 12.1032C7.6991 12.2142 7.6991 12.3252 7.6991 12.4362C7.5881 12.4362 7.4771 12.4362 7.3661 12.4362C5.5721 12.4362 3.7781 12.4362 1.9951 12.4362C1.8841 12.4362 1.7731 12.4362 1.6621 12.4362C1.6621 12.3252 1.6621 12.2142 1.6621 12.1032C1.6621 9.54717 1.6621 6.99117 1.6621 4.43517C1.6621 4.32417 1.6621 4.21317 1.6621 4.10217C2.2221 4.10217 2.6701 4.10217 3.1181 4.10217C3.1181 4.32417 3.1181 4.54617 3.1181 4.76817C3.1181 6.10217 3.1181 7.43617 3.1181 8.77017C3.1181 9.33017 3.1181 9.33017 3.6781 9.33017C4.2381 9.33017 4.7981 9.33017 5.3581 9.33017C5.8061 9.33017 5.9171 9.21917 5.9171 8.77117C5.9171 7.43717 5.9171 6.10317 5.9171 4.76917C6.0281 4.54617 6.0281 4.32417 6.1321 4.10217Z" />
                  <path d="M10.0141 19.8562C10.0141 18.7472 9.1211 17.7472 8.0111 17.7472C6.9021 17.7472 5.9021 18.6402 5.9021 19.7502C5.9021 20.8592 6.7951 21.8592 7.9051 21.8592C9.0151 21.7482 10.0141 20.9662 10.0141 19.8562Z" />
                  <path d="M7.9053 2.21519C7.9053 1.10619 6.9053 0.104187 5.7953 0.104187C4.6863 0.104187 3.6863 1.10619 3.6863 2.21519C3.6863 3.32419 4.6863 4.32419 5.7953 4.32419C6.9053 4.32419 7.9053 3.32419 7.9053 2.21519Z" />
                  <path d="M10.0142 4.32419C11.1232 4.32419 12.1232 3.32419 12.1232 2.21519C12.1232 1.10619 11.1232 0.104187 10.0142 0.104187C8.9052 0.104187 7.9052 1.10619 7.9052 2.21519C7.9052 3.32419 8.9052 4.32419 10.0142 4.32419Z" />
                  <path d="M0.002 19.856C0.002 20.965 1.002 21.965 2.112 21.965C3.222 21.965 4.222 20.965 4.222 19.856C4.222 18.747 3.222 17.747 2.112 17.747C1.002 17.747 0.002 18.747 0.002 19.856Z" />
                  <path d="M14.2331 19.856C14.2331 18.747 13.2331 17.747 12.1241 17.747C11.0151 17.747 10.0151 18.747 10.0151 19.856C10.0151 20.965 11.0151 21.965 12.1241 21.965C13.2331 21.965 14.2331 20.965 14.2331 19.856Z" />
                  <path d="M3.6863 4.32419C4.7953 4.32419 5.7953 3.32419 5.7953 2.21519C5.7953 1.10619 4.7953 0.104187 3.6863 0.104187C2.5773 0.104187 1.5773 1.10619 1.5773 2.21519C1.5773 3.32419 2.5773 4.32419 3.6863 4.32419Z" />
                </svg>
                App Store
              </Button>
              <Button className="bg-black text-white hover:bg-gray-800">
                <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2" fill="currentColor">
                  <path d="M3.609 3.092c-.478 0-.856.375-.856.852v16.108c0 .476.378.851.856.851l.017-.001 8.577-8.528-8.577-9.282h-.017z" />
                  <path d="M4.996 21.373L16.541 12.02 4.996 2.667h-.956a.484.484 0 00-.484.48v17.746c0 .265.216.48.484.48h.956z" />
                  <path d="M21.249 12.026c0-.296-.149-.592-.448-.777l-3.568-2.009L13.144 12l4.09 2.76 3.567-2.01c.299-.185.448-.48.448-.776v.052z" />
                  <path d="M16.615 8.551l-3.765-2.116-7.803 8.433 7.803 7.769 3.764-2.114c.897-.508 1.494-1.46 1.494-2.538V11.09c0-1.08-.597-2.03-1.493-2.538z" />
                </svg>
                Google Play
              </Button>
            </div>
            
            <div className="flex items-center justify-center md:justify-start mt-6 space-x-4">
              <div className="flex -space-x-2">
                <div className="h-8 w-8 rounded-full border-2 border-background bg-gray-300"></div>
                <div className="h-8 w-8 rounded-full border-2 border-background bg-gray-400"></div>
                <div className="h-8 w-8 rounded-full border-2 border-background bg-gray-500"></div>
              </div>
              <span className="text-sm text-muted-foreground">10,000+ Downloads</span>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="absolute -top-6 -left-6 h-64 w-64 rounded-full bg-credit-primary/5 blur-3xl z-0"></div>
            <div className="relative z-10 animate-float">
              <div className="relative mx-auto w-[280px]">
                <div className="rounded-[3rem] border-8 border-gray-800 bg-gray-800 shadow-xl">
                  <div className="absolute top-0 mx-auto w-1/3 h-6 bg-gray-800 rounded-b-xl left-1/3"></div>
                  <div className="h-[540px] rounded-[2.5rem] overflow-hidden border-2 border-gray-800">
                    <img 
                      src="https://randomuser.me/api/portraits/women/32.jpg" 
                      alt="CreditShare Mobile App" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppPromo;
