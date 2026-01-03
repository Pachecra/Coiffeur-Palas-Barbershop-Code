import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { StyleAnalysisResult } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// Using gemini-3-pro-preview as requested for complex reasoning
const CHAT_MODEL = "gemini-3-pro-preview";
// Using gemini-2.5-flash-image for reliable image analysis per guidelines
const VISION_MODEL = "gemini-2.5-flash-image";

const SYSTEM_INSTRUCTION_CHAT = `Eres el asistente virtual de 'Coiffeur Palas & Barbershop' en Fuengirola. 
Tu nombre es Palas AI. Eres un barbero experto, elegante, profesional y con un tono sofisticado pero cercano.
Conoces las últimas tendencias de corte europeas (Fade, Taper, Textured Crop, Classic Scissor Cut).
Tu objetivo es asesorar brevemente y SIEMPRE intentar redirigir al usuario a reservar cita o llamar al teléfono +34 952 000 000.
Dirección: Paseo Marítimo Rey de España 124.
No des precios exactos, di 'desde 20€' o similares, invitándoles a ver la carta de servicios.
Responde en español neutro/premium.`;

export const sendMessageToGemini = async (message: string, history: {role: string, parts: {text: string}[]}[]): Promise<string> => {
  try {
    const chat = ai.chats.create({
      model: CHAT_MODEL,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION_CHAT,
        temperature: 0.7,
      },
      history: history
    });

    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text || "Disculpa, estoy atendiendo a un cliente. ¿Puedes repetir?";
  } catch (error) {
    console.error("Error in chat:", error);
    return "Lo siento, hubo un error de conexión. Por favor llama al salón directamente.";
  }
};

export const analyzeFaceShape = async (base64Image: string): Promise<StyleAnalysisResult> => {
  try {
    const prompt = `Actúa como un estilista de clase mundial. Analiza esta imagen de un rostro masculino.
    1. Identifica la forma del rostro (Ovalada, Cuadrada, Redonda, Diamante, Triángulo).
    2. Recomienda 3 cortes de cabello específicos que le queden bien a esa forma.
    3. Recomienda 1 producto de peinado (Cera mate, Pomada brillo, Polvo texturizante, etc.).
    
    Devuelve la respuesta ESTRICTAMENTE en este formato JSON, sin markdown:
    {
      "faceShape": "Nombre de la forma",
      "recommendations": ["Corte 1", "Corte 2", "Corte 3"],
      "productTip": "Nombre del producto y por qué"
    }`;

    // Clean base64 string if it has prefix
    const cleanBase64 = base64Image.replace(/^data:image\/(png|jpg|jpeg|webp);base64,/, "");

    const response = await ai.models.generateContent({
        model: VISION_MODEL,
        contents: {
            parts: [
                { inlineData: { mimeType: 'image/jpeg', data: cleanBase64 } },
                { text: prompt }
            ]
        },
        config: {
            temperature: 0.4,
            responseMimeType: "application/json" // Force JSON output
        }
    });

    const text = response.text || "{}";
    const json = JSON.parse(text);

    return {
      faceShape: json.faceShape || "No identificado",
      recommendations: json.recommendations || ["Corte Clásico", "Fade Bajo"],
      productTip: json.productTip || "Cera Mate de fijación media"
    };

  } catch (error) {
    console.error("Error analyzing image:", error);
    throw new Error("No pudimos analizar la imagen. Intenta con una foto más clara.");
  }
};