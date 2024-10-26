import { useEffect, useState } from "react";
import { formatDate } from "../helpers/formarDate";
import { supabase } from "../supabaseClient";

const Message = ({ message, date, email }) => {

    const [user, setUser] = useState("");

    const getSession = async () => {
        const { data } = await supabase.auth.getSession();
        setUser(data.session.user.email);
    }

    useEffect(() => {
        getSession()
    }, [])

    return (
        <div className={`card ${user === email ? "me" : ""}`}>
            <p>{message}</p>
            <span>{formatDate(date)}</span>
            <span className="user-email">{email.split('@')[0]}</span>
        </div>
    );
}

export default Message;