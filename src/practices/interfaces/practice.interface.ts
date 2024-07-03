export interface Practice {
  id: number;
  exercicios: {
    id: number;
    titulo: string;
    descricao: {
      tag: string;
      conteudo?: string;
    }[];
    questoes?: any[];
    label?: string[];
    comentario?: string[];
    imagem?: string;
    estilo?: string;
    resposta?: number | boolean | boolean[] | number[];
  }[];
};