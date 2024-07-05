import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const mealSchema = z.object({
  name: z.string().min(1, "Meal name is required"),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  calories: z.number().min(0, "Calories must be a positive number"),
  protein: z.number().min(0, "Protein must be a positive number"),
  carbohydrates: z.number().min(0, "Carbohydrates must be a positive number"),
  fats: z.number().min(0, "Fats must be a positive number"),
  micronutrients: z.string().optional(),
});

const FoodDiary = () => {
  const [meals, setMeals] = useState([]);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(mealSchema),
  });

  const onSubmit = (data) => {
    setMeals([...meals, data]);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl mb-4">Food Diary</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="mb-6">
        <div className="mb-4">
          <Label htmlFor="name">Meal Name</Label>
          <Input id="name" {...register("name")} />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div className="mb-4">
          <Label htmlFor="date">Date</Label>
          <Input id="date" type="date" {...register("date")} />
          {errors.date && <p className="text-red-500">{errors.date.message}</p>}
        </div>
        <div className="mb-4">
          <Label htmlFor="time">Time</Label>
          <Input id="time" type="time" {...register("time")} />
          {errors.time && <p className="text-red-500">{errors.time.message}</p>}
        </div>
        <div className="mb-4">
          <Label htmlFor="calories">Calories</Label>
          <Input id="calories" type="number" {...register("calories")} />
          {errors.calories && <p className="text-red-500">{errors.calories.message}</p>}
        </div>
        <div className="mb-4">
          <Label htmlFor="protein">Protein (g)</Label>
          <Input id="protein" type="number" {...register("protein")} />
          {errors.protein && <p className="text-red-500">{errors.protein.message}</p>}
        </div>
        <div className="mb-4">
          <Label htmlFor="carbohydrates">Carbohydrates (g)</Label>
          <Input id="carbohydrates" type="number" {...register("carbohydrates")} />
          {errors.carbohydrates && <p className="text-red-500">{errors.carbohydrates.message}</p>}
        </div>
        <div className="mb-4">
          <Label htmlFor="fats">Fats (g)</Label>
          <Input id="fats" type="number" {...register("fats")} />
          {errors.fats && <p className="text-red-500">{errors.fats.message}</p>}
        </div>
        <div className="mb-4">
          <Label htmlFor="micronutrients">Micronutrients</Label>
          <Textarea id="micronutrients" {...register("micronutrients")} />
        </div>
        <Button type="submit">Add Meal</Button>
      </form>
      <div>
        <h2 className="text-2xl mb-4">Saved Meals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {meals.map((meal, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{meal.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Date: {meal.date}</p>
                <p>Time: {meal.time}</p>
                <p>Calories: {meal.calories}</p>
                <p>Protein: {meal.protein}g</p>
                <p>Carbohydrates: {meal.carbohydrates}g</p>
                <p>Fats: {meal.fats}g</p>
                <p>Micronutrients: {meal.micronutrients}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodDiary;