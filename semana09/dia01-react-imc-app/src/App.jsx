import { useState } from "react";

export default function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);

  const handleWeight = (e) => {
    const value = e.target.value;
    setWeight(value);
  };
  const handleHeight = (e) => {
    const value = e.target.value;
    setHeight(value);
  };

  const bodyMassIndex = (weight / (height / 100) ** 2).toFixed(2);

  const bodyMassIndexResult = () => {
    if (bodyMassIndex < 18.5) {
      return "Bajo peso";
    } else if (bodyMassIndex >= 18.5 && bodyMassIndex <= 24.9) {
      return "Normal";
    } else if (bodyMassIndex >= 25 && bodyMassIndex <= 29.9) {
      return "Gordo para de comer";
    } else if (bodyMassIndex >= 30 && bodyMassIndex <= 34.9) {
      return "Obesidad grado 1";
    } else if (bodyMassIndex >= 35 && bodyMassIndex <= 39.9) {
      return "Obesidad grado 2";
    } else if (bodyMassIndex >= 40) {
      return "Obesidad grado 3";
    }
  }



  return (
    <section className="w-96 mx-auto bg-sky-400 rounded-md my-5">
      <h1 className="text-3xl font-bold text-center text-white p-5">
        IMC calculator
      </h1>
      <div className="bg-sky-200 p-5">
        <p className="font-bold">Weight: {weight} kg</p>
        <input
          type="range"
          className="w-full"
          min="50"
          max="200"
          onChange={handleWeight}
          value={weight}
        />

        <p className="font-bold">Height: {height} cm</p>
        <input
          type="range"
          className="w-full"
          min="50"
          max="200"
          onChange={handleHeight}
          value={height}
        />

        <p
          className="text-2xl font-bold 
            bg-orange-400 text-center p-5 mt-5"
        >
          TU IMC ES: {bodyMassIndex} 
        </p>

        <p
          className="text-lg font-bold 
            bg-orange-400 text-center p-5 mt-5"
        >
          TU ESTADO ES: {bodyMassIndexResult()}
        </p>
      </div>
    </section>
  );
}
