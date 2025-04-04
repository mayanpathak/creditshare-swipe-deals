
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { RegisterRequest } from '@/types/api';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Eye, EyeOff, UserPlus, Mail, Lock } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  role: z.enum(['buyer', 'card_holder'], { 
    required_error: "Please select a user type" 
  })
});

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const { register: registerUser } = useAuth();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role: "buyer"
    }
  });

  const calculatePasswordStrength = (password: string) => {
    let strength = 0;
    
    if (password.length >= 8) strength += 20;
    if (password.match(/[A-Z]/)) strength += 20;
    if (password.match(/[a-z]/)) strength += 20;
    if (password.match(/[0-9]/)) strength += 20;
    if (password.match(/[^A-Za-z0-9]/)) strength += 20;
    
    setPasswordStrength(strength);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    form.setValue('password', password);
    calculatePasswordStrength(password);
  };

  const getStrengthColor = () => {
    if (passwordStrength <= 20) return "bg-red-500";
    if (passwordStrength <= 40) return "bg-orange-500";
    if (passwordStrength <= 60) return "bg-yellow-500";
    if (passwordStrength <= 80) return "bg-blue-500";
    return "bg-green-500";
  };

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      // Convert the form data to match RegisterRequest type
      const userData: RegisterRequest = {
        name: data.name,
        email: data.email,
        password: data.password,
        role: data.role // This matches our API types now
      };
      
      await registerUser(userData);
      navigate('/dashboard');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto py-12 px-4">
        <div className="max-w-md mx-auto">
          <Card className="border-2 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center justify-center text-2xl font-bold">
                <UserPlus className="mr-2 h-6 w-6" />
                Create Your Account
              </CardTitle>
              <CardDescription className="text-center">
                Join CreditShare and start saving money on your purchases today
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <Tabs defaultValue="buyer" className="mb-6" onValueChange={(value) => form.setValue('role', value as 'buyer' | 'card_holder')}>
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="buyer">I want to Save</TabsTrigger>
                      <TabsTrigger value="card_holder">I have a Credit Card</TabsTrigger>
                    </TabsList>
                    <TabsContent value="buyer">
                      <p className="text-sm text-muted-foreground mb-4">
                        Register as a buyer to find credit card holders and save on your purchases.
                      </p>
                    </TabsContent>
                    <TabsContent value="card_holder">
                      <p className="text-sm text-muted-foreground mb-4">
                        Register as a credit card holder to help buyers save while earning rewards.
                      </p>
                    </TabsContent>
                  </Tabs>

                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input 
                              placeholder="Enter your full name" 
                              {...field} 
                              className="pl-10"
                            />
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
                              <UserPlus className="h-5 w-5" />
                            </div>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input 
                              type="email" 
                              placeholder="Enter your email address" 
                              {...field} 
                              className="pl-10"
                            />
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
                              <Mail className="h-5 w-5" />
                            </div>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input 
                              type={showPassword ? "text" : "password"} 
                              placeholder="Create a password" 
                              {...field}
                              onChange={handlePasswordChange}
                              className="pl-10 pr-10"
                            />
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
                              <Lock className="h-5 w-5" />
                            </div>
                            <Button 
                              type="button"
                              variant="ghost" 
                              size="sm"
                              className="absolute inset-y-0 right-0 flex items-center pr-3" 
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                            </Button>
                          </div>
                        </FormControl>
                        <div className="mt-2 space-y-1">
                          <div className="flex items-center justify-between text-xs">
                            <span>Password strength:</span>
                            <span>
                              {passwordStrength <= 20 && "Very Weak"}
                              {passwordStrength > 20 && passwordStrength <= 40 && "Weak"}
                              {passwordStrength > 40 && passwordStrength <= 60 && "Medium"}
                              {passwordStrength > 60 && passwordStrength <= 80 && "Strong"}
                              {passwordStrength > 80 && "Very Strong"}
                            </span>
                          </div>
                          <Progress 
                            value={passwordStrength} 
                            className="h-1" 
                            indicatorClassName={getStrengthColor()}
                          />
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem className="hidden">
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="buyer" id="buyer" />
                              <Label htmlFor="buyer">Buyer</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="card_holder" id="card_holder" />
                              <Label htmlFor="card_holder">Card Holder</Label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full credit-gradient">
                    Create Account
                  </Button>
                </form>
              </Form>
            </CardContent>
            <CardFooter className="flex justify-center border-t pt-6">
              <p className="text-sm text-center">
                Already have an account?{' '}
                <Link to="/login" className="text-primary font-medium hover:underline">
                  Login
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignUp;
