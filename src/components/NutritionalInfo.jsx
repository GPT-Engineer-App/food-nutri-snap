import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const NutritionalInfo = ({ data }) => {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const macronutrients = [
    { name: "Protein", value: data.protein },
    { name: "Carbohydrates", value: data.carbohydrates },
    { name: "Fats", value: data.fats },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Nutritional Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Calories: {data.calories}</h2>
          <h3 className="text-lg">Serving Size: {data.servingSize}</h3>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Macronutrients</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={macronutrients}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {macronutrients.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Micronutrients</h3>
          <ul>
            {data.micronutrients.map((micronutrient, index) => (
              <li key={index}>
                {micronutrient.name}: {micronutrient.value}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default NutritionalInfo;