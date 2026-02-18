export interface ArquivoUpload {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  size: number;
  destination: string;
  filename: string;
  path: string;
}

export interface IArmazenamentoServico {
  salvarArquivo(arquivo: ArquivoUpload): Promise<string>;
  deletarArquivo(caminho: string): Promise<void>;
  obterUrlPublica(caminho: string): string;
  validarTipoArquivo(mimetype: string): boolean;
  validarTamanhoArquivo(tamanho: number): boolean;
}