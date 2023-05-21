import React from 'react';
import { useForm } from 'react-hook-form';

function FormularioConversor() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Digite o Valor a ser convertido" {...register("Digite o Valor a ser convertido", {required: true, maxLength: 80})} />

      <input type="submit" />
    </form>
  );
}

export default FormularioConversor;