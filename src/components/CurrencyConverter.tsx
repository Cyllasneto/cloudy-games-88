import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { useToast } from "./ui/use-toast";

interface ExchangeRates {
  USDBRL: {
    bid: string;
    create_date: string;
  };
  EURBRL: {
    bid: string;
    create_date: string;
  };
}

const CurrencyConverter = () => {
  const [brlAmount, setBrlAmount] = useState<string>("");
  const { toast } = useToast();
  
  const { data: rates, error } = useQuery({
    queryKey: ["exchange-rates"],
    queryFn: async () => {
      const response = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL");
      if (!response.ok) {
        throw new Error("Failed to fetch exchange rates");
      }
      return response.json() as Promise<ExchangeRates>;
    },
    refetchInterval: 600000, // 10 minutes in milliseconds
  });

  useEffect(() => {
    if (error) {
      toast({
        title: "Erro",
        description: "Não foi possível atualizar as cotações. Tente novamente mais tarde.",
        variant: "destructive",
      });
    }
  }, [error, toast]);

  const calculateConversion = (amount: string, rate: string) => {
    const numAmount = parseFloat(amount);
    const numRate = parseFloat(rate);
    if (isNaN(numAmount) || isNaN(numRate)) return "0.00";
    return (numAmount / numRate).toFixed(2);
  };

  return (
    <Card className="p-4 md:p-6 bg-white shadow-lg">
      <h2 className="text-xl md:text-2xl font-bold mb-4">Cotações e Conversor</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6">
        <div className="space-y-2 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold">Dólar (USD)</h3>
          <p className="text-lg md:text-xl">
            R$ {rates?.USDBRL.bid ? parseFloat(rates.USDBRL.bid).toFixed(2) : "---"}
          </p>
          <p className="text-xs md:text-sm text-gray-500">
            Última atualização: {rates?.USDBRL.create_date ? new Date(rates.USDBRL.create_date).toLocaleTimeString() : "---"}
          </p>
        </div>
        
        <div className="space-y-2 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold">Euro (EUR)</h3>
          <p className="text-lg md:text-xl">
            R$ {rates?.EURBRL.bid ? parseFloat(rates.EURBRL.bid).toFixed(2) : "---"}
          </p>
          <p className="text-xs md:text-sm text-gray-500">
            Última atualização: {rates?.EURBRL.create_date ? new Date(rates.EURBRL.create_date).toLocaleTimeString() : "---"}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold">Conversor</h3>
        <div className="space-y-2">
          <label className="block text-sm font-medium">Valor em Reais (BRL)</label>
          <Input
            type="number"
            value={brlAmount}
            onChange={(e) => setBrlAmount(e.target.value)}
            placeholder="Digite o valor em reais"
            className="w-full"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm font-medium mb-2">Em Dólar (USD)</p>
            <p className="text-lg">
              $ {rates?.USDBRL ? calculateConversion(brlAmount, rates.USDBRL.bid) : "0.00"}
            </p>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm font-medium mb-2">Em Euro (EUR)</p>
            <p className="text-lg">
              € {rates?.EURBRL ? calculateConversion(brlAmount, rates.EURBRL.bid) : "0.00"}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CurrencyConverter;