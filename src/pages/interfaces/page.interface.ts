export interface Page {
  id: number;
  titulo: string;
  segmento: string;
  parentId?: number;
  autor?: {
    nome: string;
    data: string;
  };
  pagina?: {
    proxima: number;
    anterior: number;
  };
}