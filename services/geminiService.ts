import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { Transaction, Account } from '../types';

let ai: GoogleGenAI | null = null;

const getAIClient = (): GoogleGenAI => {
  if (!ai) {
    if (!process.env.API_KEY) {
      throw new Error("API Key not found");
    }
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return ai;
};

export const generateFinancialAdvice = async (
  query: string, 
  contextData?: { accounts: Account[], transactions: Transaction[] }
): Promise<string> => {
  try {
    const client = getAIClient();
    
    let prompt = query;
    let systemInstruction = `You are "Maple", a helpful and secure AI Financial Assistant for the Government of Canada's Open Banking platform "MapleSync". 
    Your goal is to educate Canadians on the benefits of Open Banking (user control, lower fees, better innovation) and provide personalized financial insights.
    
    Key facts about Open Banking:
    - It allows secure sharing of financial data between banks and third parties.
    - It is established in the UK (CMA9), EU (PSD2), Australia (CDR), and Brazil.
    - Canada is currently developing its framework.
    - Benefits include: Aggregated dashboards, competitive loan offers, simplified payments.

    Keep answers concise, professional, yet approachable. Use Canadian spelling (e.g., Cheque, Colour).
    `;

    if (contextData) {
      systemInstruction += `
      
      CURRENT USER DATA CONTEXT:
      Accounts: ${JSON.stringify(contextData.accounts)}
      Recent Transactions: ${JSON.stringify(contextData.transactions)}
      
      Use this data to provide specific answers if the user asks about their finances.
      `;
    }

    const response: GenerateContentResponse = await client.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text || "I apologize, I couldn't generate a response at this moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently offline or experiencing issues connecting to the secure server. Please check your API key.";
  }
};
