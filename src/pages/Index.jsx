import { Button } from "@/components/ui/button";
import NutritionalInfo from "@/components/NutritionalInfo";

const Index = () => {
  const sampleData = {
    calories: 250,
    protein: 10,
    carbohydrates: 30,
    fats: 15,
    servingSize: "1 cup",
    micronutrients: [
      { name: "Vitamin A", value: "500 IU" },
      { name: "Vitamin C", value: "60 mg" },
      { name: "Calcium", value: "100 mg" },
      { name: "Iron", value: "2 mg" },
    ],
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl mb-4">Welcome to the Food Nutrition App</h1>
      <p className="mb-6">Capture food photos and get detailed nutritional information instantly.</p>
      <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[400px] mb-6" />
      <Button variant="primary" size="lg">Get Started</Button>
      <div className="mt-8">
        <NutritionalInfo data={sampleData} />
      </div>
    </div>
  );
};

export default Index;