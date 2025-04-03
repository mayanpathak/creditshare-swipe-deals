
import React, { useEffect, useRef } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious 
} from '@/components/ui/carousel';
import { 
  CreditCard, 
  ShoppingBag, 
  Package, 
  Wallet, 
  CheckCircle,
  Users,
  Shield
} from 'lucide-react';

const slides = [
  {
    title: "Create Your Account",
    description: "Sign up as a buyer or a credit card holder. Verify your phone number via OTP for enhanced security.",
    icon: Users,
    color: "bg-gray-200"
  },
  {
    title: "Browse & Place Orders",
    description: "Buyers can search for products with credit card discounts and place orders through our platform.",
    icon: ShoppingBag,
    color: "bg-gray-300"
  },
  {
    title: "Card Holders Accept Orders",
    description: "Credit card holders browse available orders and accept ones they can fulfill with their card discounts.",
    icon: CreditCard,
    color: "bg-gray-400"
  },
  {
    title: "Purchase & Delivery",
    description: "Card holders make the purchase and arrange for delivery to the buyer's address.",
    icon: Package,
    color: "bg-gray-500"
  },
  {
    title: "Verification & Payment",
    description: "Buyers verify receipt, then payment is released to the card holder including their service fee.",
    icon: Wallet,
    color: "bg-gray-600"
  },
  {
    title: "Build Trust Score",
    description: "Complete transactions successfully to build your trust score and unlock more opportunities.",
    icon: Shield,
    color: "bg-gray-700"
  },
  {
    title: "Repeat & Save More",
    description: "Continue using the platform to save money on purchases or earn by sharing your card discounts.",
    icon: CheckCircle,
    color: "bg-gray-800"
  }
];

interface PreviewSlideshowProps {
  id?: string;
}

const PreviewSlideshow = ({ id = "preview" }: PreviewSlideshowProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // If the URL has a hash matching this section's id, scroll to it
    if (window.location.hash === `#${id}` && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [id]);

  return (
    <section ref={sectionRef} id={id} className="py-24 bg-accent/10 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">How CreditShare Works</h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            See the step-by-step process of how our platform connects buyers with credit card holders
            to provide discounts without having a credit card.
          </p>
        </div>
        
        <div className="mx-auto max-w-5xl">
          <Carousel className="w-full">
            <CarouselContent>
              {slides.map((slide, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-4">
                    <div className="flex h-full flex-col items-center rounded-xl border bg-card p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                      <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full ${slide.color} text-white`}>
                        <slide.icon className="h-8 w-8" />
                      </div>
                      <h3 className="mb-2 text-xl font-bold">{slide.title}</h3>
                      <p className="text-muted-foreground">{slide.description}</p>
                      <div className="mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-credit-primary text-white">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-8">
              <CarouselPrevious className="static transform-none mx-2" />
              <CarouselNext className="static transform-none mx-2" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PreviewSlideshow;
