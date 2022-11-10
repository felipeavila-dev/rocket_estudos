
interface ApiResult {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

interface Cep {
  cep: number;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export const findCep = async (cep: number): Promise<Cep | any> => {
      const result = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const cepData: ApiResult = await result.json();
      if(cepData.logradouro) {
        return {
          cep: cepData.cep,
          logradouro: cepData.logradouro,
          bairro: cepData.bairro,
          localidade: cepData.localidade,
          uf: cepData.uf
        };
      } else {
        return null;
      }
    return null;
}