import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function ConverteMoeda() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [valorConvertido, setValorConvertido] = useState('');

  const onSubmit = async (data) => {
    try {
      const response = await axios.get(
        `https://economia.awesomeapi.com.br/json/all/USD-BRL`
      );
      const cotacao = response.data.USD.bid;
      const valorEmDolares = parseFloat(data.valor);
      const valorEmReais = valorEmDolares * parseFloat(cotacao);

      setValorConvertido(valorEmReais.toFixed(2));
    } catch (error){
      console.error(error);
    }
  };
    
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input 
      type="text" 
      placeholder="Digite o valor em dólares" 
      {...register('valor', {required: true, pattern: /^[0-9]+(\.[0-9]{1,2})?$/ })}
      />
      {errors.valor && <p>Valor inválido </p>}
      <input type="submit" value="Converter" />
      {valorConvertido && <p>Valor convertido em reais: R$ {valorConvertido} </p>}
      
    </form>
  );
}


