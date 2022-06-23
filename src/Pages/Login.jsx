import Input from './../Components/Input';
import { useForm } from "react-hook-form";


function Login(){
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const submitHandler = (data) =>{
        console.log("data", data)
    }

    return(
        <main className="form-container">
            <form className="form" action="POST" onSubmit={handleSubmit(submitHandler)}>
                <h4 className='form-title'>Ingresar</h4>
                <Input name="user" label="Usuario:" type="text" register={{...register("user", { required: true })}}/>
                <Input name="password" label="Contraseña:" type="password"register={{...register("password", { required: true })}}/>         
                <button className='btn' type='submit'>Ingresar</button>                       
            </form>
        </main>
    )

}

export default Login;