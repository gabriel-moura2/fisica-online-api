export interface Page {
  id: number;
  titulo: string;
  segmento: string;
  parentId?: number;
  autor?: number;
  data?: string;
  pagina?: {
    proxima: number;
    anterior: number;
  };
}