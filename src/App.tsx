import { useForm } from "react-hook-form";
import './style.css'
function App() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  }; 

  const estado = watch("estado");
  const idade = watch("idade");


  return (
    <div className="App">
    <form onSubmit={handleSubmit(onSubmit)}>
    <label>Digite seu nome</label><br/>
    <input name="nome" ref={register({ required: true })} placeholder="Nome"/>
      {errors.nome && <p>Nome obrigatório</p>}<br/>

      <label>Qual sua cidade?</label> <br/>
      <input type="text" name="cidade" ref={register} placeholder="Cidade"/><br/>

      <label>Digite seu Email</label> <br/>
      <input type="email" name="email" ref={register({ required: true })} placeholder="Email"/><br/>
      {errors.email && <p>Email obrigatório</p>}<br/>

      <label>Qual sua idade?</label> <br/>
      <input type="text" name="idade" ref={register({ required: true })} placeholder="Idade"/><br/>
      {errors.idade && <p>Idade obrigatório</p>}<br/>
      {idade <= 18 && (
          <div>
            <p>Você é menor de idade</p>
            
          </div>
      )}

      <label>Qual seu estado cívil?</label> 
      

      <label>Solteiro</label>
      <input id="solteiro" name="estado" type="radio" ref={register({ required: true })} value="solteiro" />
      <label>Casado</label>
      <input id="casado" name="estado" type="radio" ref={register({ required: true })} value="casado" /><br/>
      {errors.estado && <p>Estado cívil obrigatório</p>}<br/>
      
      {estado === 'casado' && (
        <div>
          <label>Qual nome do cônjuge?</label>
          <input type="text" name="pais" ref={register} />
        </div>
        
      )}
      <button>Enviar</button>
    </form>
    </div>
  );
}

export default App;
