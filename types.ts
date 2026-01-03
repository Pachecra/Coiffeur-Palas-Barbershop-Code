export interface ServiceItem {
  name: string;
  price: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum AnalysisState {
  IDLE = 'IDLE',
  ANALYZING = 'ANALYZING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface StyleAnalysisResult {
  faceShape: string;
  recommendations: string[];
  productTip: string;
}