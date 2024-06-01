import { useForm, SubmitHandler } from 'react-hook-form'
import './App.css'



type Inputs = {
  nome: string,
  email: string,
  tel: string
}
function App() {


  const {
    handleSubmit,
    register,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (e) => {
    console.log(e);
  }

  return (
    <>

      <form onSubmit={handleSubmit(onSubmit)}>
       
        <h1>Formulario - HookForm</h1>

        <div>
          <label>Nome:</label>
          <input {...register('nome')} />
        </div>

        <div>
          <label>Email:</label>
          <input {...register('email')} />
        </div>
        
        <div>
          <label>Telefone:</label>
          <input {...register('tel')} />
        </div>

        <button type='submit'>Enviar</button>
      </form>

    </>
  )
}

export default App
