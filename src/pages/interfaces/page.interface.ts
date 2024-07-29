interface Url {
  titulo: string;
  url: string;
}

export interface Page {
  id: number;
  titulo: string;
  segmento: string;
  autor?: {
    nome: string;
    data: string;
  };
  pagina?: {
    proxima: number | Url;
    anterior: number | Url;
  };
  filhos?: number[] | Url[];
  paginaPai?: number;
}