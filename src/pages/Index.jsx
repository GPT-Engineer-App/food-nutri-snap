import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl mb-4">Welcome to the Food Nutrition App</h1>
      <p className="mb-6">Capture food photos and get detailed nutritional information instantly.</p>
      <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[400px] mb-6" />
      <Button variant="primary" size="lg">Get Started</Button>
    </div>
  );
};

export default Index;