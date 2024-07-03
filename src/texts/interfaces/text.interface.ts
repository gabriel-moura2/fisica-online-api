export interface Text {
  id: number;
  titulo: string;
  conteudo: {
    id: number;
    titulo: string;
    conteudo: {
      tag: string;
      conteudo?: string;
    }[];
  }[];
};