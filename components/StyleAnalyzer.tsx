import React, { useState, useRef, useCallback } from 'react';
import { Upload, Camera, Loader2, Sparkles, CheckCircle, AlertCircle, X } from 'lucide-react';
import { AnalysisState, StyleAnalysisResult } from '../types';
import { analyzeFaceShape } from '../services/geminiService';

const StyleAnalyzer: React.FC = () => {
  const [state, setState] = useState<AnalysisState>(AnalysisState.IDLE);
  const [image, setImage] = useState<string | null>(null);
  const [result, setResult] = useState<StyleAnalysisResult | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const processFile = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      setImage(base64);
      analyze(base64);
    };
    reader.readAsDataURL(file);
  };

  const analyze = async (base64: string) => {
    setState(AnalysisState.ANALYZING);
    try {
      const analysis = await analyzeFaceShape(base64);
      setResult(analysis);
      setState(AnalysisState.SUCCESS);
    } catch (error) {
      setState(AnalysisState.ERROR);
    }
  };

  const reset = () => {
    setImage(null);
    setResult(null);
    setState(AnalysisState.IDLE);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <section id="style-analyzer" className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#111]">
      <div className="container mx-auto px-6">
        
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/10 rounded-full bg-white/5 mb-4">
            <Sparkles size={14} className="text-yellow-400" />
            <span className="text-[10px] uppercase tracking-widest text-zinc-300">Powered by Gemini 3 Pro</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">AI Style Analyzer</h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Sube una selfie y deja que nuestra IA analice la geometría de tu rostro para recomendarte el corte perfecto.
          </p>
        </div>

        <div className="max-w-4xl mx-auto glass-panel rounded-2xl overflow-hidden min-h-[500px] flex flex-col md:flex-row">
          
          {/* Upload Area */}
          <div className={`flex-1 p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/10 transition-colors ${state === AnalysisState.IDLE ? 'bg-white/5 hover:bg-white/10 cursor-pointer' : 'bg-black/40'}`}
               onClick={() => state === AnalysisState.IDLE && fileInputRef.current?.click()}>
            
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
              accept="image/*" 
              className="hidden" 
            />

            {image ? (
              <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
                <img src={image} alt="Upload" className="max-h-[300px] max-w-full object-contain rounded-lg shadow-2xl" />
                {state === AnalysisState.ANALYZING && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center flex-col gap-3 backdrop-blur-sm rounded-lg">
                    <Loader2 className="animate-spin text-white w-10 h-10" />
                    <p className="text-white font-serif tracking-wide animate-pulse">Analizando facciones...</p>
                  </div>
                )}
                 {state !== AnalysisState.ANALYZING && (
                  <button onClick={(e) => { e.stopPropagation(); reset(); }} className="absolute top-2 right-2 p-2 bg-black/50 text-white rounded-full hover:bg-red-500/80 transition-colors">
                    <X size={20} />
                  </button>
                 )}
              </div>
            ) : (
              <div className="text-center group">
                <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/10">
                  <Camera className="w-8 h-8 text-zinc-400 group-hover:text-white" />
                </div>
                <h3 className="text-xl text-white font-medium mb-2">Sube tu foto</h3>
                <p className="text-sm text-zinc-500">Click para seleccionar o arrastra aquí</p>
              </div>
            )}
          </div>

          {/* Results Area */}
          <div className="flex-1 p-8 bg-[#0a0a0a]/50 flex flex-col justify-center">
            {state === AnalysisState.IDLE && (
              <div className="text-center text-zinc-600">
                <Upload className="w-12 h-12 mx-auto mb-4 opacity-20" />
                <p>El resultado aparecerá aquí</p>
              </div>
            )}

            {state === AnalysisState.ERROR && (
              <div className="text-center text-red-400">
                <AlertCircle className="w-12 h-12 mx-auto mb-4" />
                <p>Error al procesar la imagen.</p>
                <button onClick={reset} className="mt-4 text-sm underline">Intentar de nuevo</button>
              </div>
            )}

            {state === AnalysisState.SUCCESS && result && (
              <div className="animate-fade-in-up">
                <div className="mb-6">
                  <span className="text-xs text-zinc-500 uppercase tracking-widest">Forma del Rostro</span>
                  <h3 className="text-3xl font-serif text-white mt-1 capitalize">{result.faceShape}</h3>
                </div>

                <div className="mb-6">
                  <span className="text-xs text-zinc-500 uppercase tracking-widest block mb-3">Cortes Recomendados</span>
                  <ul className="space-y-3">
                    {result.recommendations.map((rec, i) => (
                      <li key={i} className="flex items-center gap-3 text-zinc-300 bg-white/5 p-3 rounded-md border border-white/5">
                        <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className="text-xs text-zinc-500 uppercase tracking-widest block mb-2">Tip de Producto</span>
                  <p className="text-sm text-zinc-400 italic border-l-2 border-white/20 pl-4 py-1">
                    "{result.productTip}"
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                   <a 
                    href="https://calendly.com" 
                    target="_blank"
                    className="block w-full text-center bg-white text-black py-3 font-bold uppercase text-sm hover:bg-zinc-200 transition-colors"
                  >
                    Reservar este estilo
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StyleAnalyzer;