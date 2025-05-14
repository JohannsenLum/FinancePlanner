import React, { useState, useEffect } from 'react';

const MarriagePlanning = ({ monthlyBudget }) => {
  const [currentAge, setCurrentAge] = useState(25);
  const [marriageAge, setMarriageAge] = useState(30);
  const [weddingScale, setWeddingScale] = useState('small');
  const [bridalPackage, setBridalPackage] = useState(3000);
  const [weddingBands, setWeddingBands] = useState(2000);
  const [dowry, setDowry] = useState(5000);
  const [solemnisation, setSolemnisation] = useState(1000);
  const [weddingBanquet, setWeddingBanquet] = useState(15000);
  const [weddingPhotography, setWeddingPhotography] = useState(3000);
  const [miscellaneousCosts, setMiscellaneousCosts] = useState(2000);
  const [honeymoon, setHoneymoon] = useState(5000);
  const [subsidiesFromAngBaos, setSubsidiesFromAngBaos] = useState(5000);
  const [totalCost, setTotalCost] = useState(0);
  const [costPerPerson, setCostPerPerson] = useState(0);

  // Load saved data from localStorage when the component mounts
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('marriagePlanningData'));
    if (savedData) {
      setCurrentAge(savedData.currentAge || 25);
      setMarriageAge(savedData.marriageAge);
      setWeddingScale(savedData.weddingScale);
      setBridalPackage(savedData.bridalPackage);
      setWeddingBands(savedData.weddingBands);
      setDowry(savedData.dowry);
      setSolemnisation(savedData.solemnisation);
      setWeddingBanquet(savedData.weddingBanquet);
      setWeddingPhotography(savedData.weddingPhotography);
      setMiscellaneousCosts(savedData.miscellaneousCosts);
      setHoneymoon(savedData.honeymoon);
      setSubsidiesFromAngBaos(savedData.subsidiesFromAngBaos);
      setTotalCost(savedData.totalCost);
      setCostPerPerson(savedData.costPerPerson);
    }
  }, []);

  // Function to save data manually when the Save button is clicked
  const saveDataToLocalStorage = () => {
    const data = {
      currentAge,
      marriageAge,
      weddingScale,
      bridalPackage,
      weddingBands,
      dowry,
      solemnisation,
      weddingBanquet,
      weddingPhotography,
      miscellaneousCosts,
      honeymoon,
      subsidiesFromAngBaos,
      totalCost,
      costPerPerson,
    };
    localStorage.setItem('marriagePlanningData', JSON.stringify(data));
    alert('Data saved successfully!');
  };

  const calculateTotalCost = () => {
    const total =
      bridalPackage +
      weddingBands +
      dowry +
      solemnisation +
      weddingBanquet +
      weddingPhotography +
      miscellaneousCosts +
      honeymoon -
      subsidiesFromAngBaos;
    setTotalCost(total);
    setCostPerPerson(total / 2);
  };

  const calculateAffordability = () => {
    const yearsToMarriage = marriageAge - currentAge;
    const monthlySavingsNeeded = totalCost / (yearsToMarriage * 12);
    const affordability = monthlyBudget >= monthlySavingsNeeded;

    return {
      monthlySavingsNeeded: monthlySavingsNeeded.toFixed(2),
      affordability: affordability ? 'Affordable' : 'Not Affordable',
    };
  };

  const affordability = calculateAffordability();

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-4">Marriage Planning</h2>
      <div className="space-y-4">
        <label className="block text-white">
          What is your current age?
          <input
            type="number"
            value={currentAge}
            onChange={(e) => setCurrentAge(parseInt(e.target.value))}
            className="mt-1 block w-full p-2 rounded-lg bg-white/10 text-white"
          />
        </label>
        <label className="block text-white">
          At what age do you want to be married?
          <input
            type="number"
            value={marriageAge}
            onChange={(e) => setMarriageAge(parseInt(e.target.value))}
            className="mt-1 block w-full p-2 rounded-lg bg-white/10 text-white"
          />
        </label>
        <label className="block text-white">
          What scale of wedding would you like?
          <select
            value={weddingScale}
            onChange={(e) => setWeddingScale(e.target.value)}
            className="mt-1 block w-full p-2 rounded-lg bg-white/10 text-white"
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
        <label className="block text-white">
          Bridal Package Cost
          <input
            type="number"
            value={bridalPackage}
            onChange={(e) => setBridalPackage(parseInt(e.target.value))}
            className="mt-1 block w-full p-2 rounded-lg bg-white/10 text-white"
          />
        </label>
        <label className="block text-white">
          Wedding Bands Cost
          <input
            type="number"
            value={weddingBands}
            onChange={(e) => setWeddingBands(parseInt(e.target.value))}
            className="mt-1 block w-full p-2 rounded-lg bg-white/10 text-white"
          />
        </label>
        <label className="block text-white">
          Dowry Cost
          <input
            type="number"
            value={dowry}
            onChange={(e) => setDowry(parseInt(e.target.value))}
            className="mt-1 block w-full p-2 rounded-lg bg-white/10 text-white"
          />
        </label>
        <label className="block text-white">
          Solemnisation Cost
          <input
            type="number"
            value={solemnisation}
            onChange={(e) => setSolemnisation(parseInt(e.target.value))}
            className="mt-1 block w-full p-2 rounded-lg bg-white/10 text-white"
          />
        </label>
        <label className="block text-white">
          Wedding Banquet Cost
          <input
            type="number"
            value={weddingBanquet}
            onChange={(e) => setWeddingBanquet(parseInt(e.target.value))}
            className="mt-1 block w-full p-2 rounded-lg bg-white/10 text-white"
          />
        </label>
        
        <button
          onClick={calculateTotalCost}
          className="bg-white/10 text-white py-2 px-4 rounded-lg hover:bg-white/20 transition duration-300"
        >
          Calculate Total Cost
        </button>

        <button
          onClick={saveDataToLocalStorage}
          className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300 ml-2"
        >
          Save Data
        </button>

        <p className="text-white">Total Cost: ${totalCost}</p>
        <p className="text-white">Cost per Person: ${costPerPerson.toFixed(2)}</p>
        <p className="text-white">Monthly Savings Needed: ${affordability.monthlySavingsNeeded}</p>
        <p className="text-white">Affordability: {affordability.affordability}</p>
      </div>
    </div>
  );
};

export default MarriagePlanning;
