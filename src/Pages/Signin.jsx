import Input from './../Components/Input';
import { useForm } from "react-hook-form";


function Signin(){
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const submitHandler = (data) =>{
        console.log("data", data)
    }
    
    return(
        <main className="form-container">
            <form className="form" action="POST" onSubmit={handleSubmit(submitHandler)}>
                <h4 className='form-title'>Crea Tu Cuenta</h4>
                <Input name="user" label="Usuario:" type="text" register={{...register("user", { required: true })}}/>
                <Input name="name" label="Nombre:" type="text" register={{...register("name")}}/>
                <Input name="lastname" label="Apellido:" type="text" register={{...register("lastname")}}/>
                <Input name="email" label="Mail:" type="email" register={{...register("email", { required: true })}}/>
                <Input name="password1" label="Contraseña:" type="password" register={{...register("password1", { required: true })}}/>                
                <Input name="password2" label="Repita contraseña:" type="password" register={{...register("password2", { required: true })}}/>
                <button className='btn' type='submit'>Ingresar</button>                       
            </form>
        </main>
    )

}

export default Signin;