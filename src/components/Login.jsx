import { supabase } from "../supabaseClient";

const Login = () => {

    const handleLogin = async () => {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
        })
    }

    return (
        <section className="login">
            <button onClick={handleLogin}>Iniciar</button>
            {/* <button onClick={handleLogout}>Cerrar</button> */}
        </section>
    );
}

export default Login;