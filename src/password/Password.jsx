import { useState } from "react";
import "./Password.css";

export default function Password() {
    const [typeInput, setTypeInput] = useState("password");
    const [hurufKapitalValidationStyle, setHurufKapitalValidationStyle] = useState("text-red")
    const [angkaValidationStyle, setAngkaValidationStyle] = useState("text-red")

    console.log(typeInput);
    
    function handleChangeCheckbox(e) {
        console.log(e.target.checked);
        
        if (e.target.checked) {
            setTypeInput("text");
        } else {
            setTypeInput("password");
        }
    }

    function handleChangePassword(e) {
        const regexHurufKapital = /[A-Z]/
        if (regexHurufKapital.test(e.target.value)) {
            setHurufKapitalValidationStyle("text-green");
        } else {
            setHurufKapitalValidationStyle("text-red");
        }

        const regexAngka = /[0-9]/
        if (regexAngka.test(e.target.value)) {
            setAngkaValidationStyle("text-green");
        } else {
            setAngkaValidationStyle("text-red");
        }
    }

    return (
        <>
        <div>
            <input type={typeInput} onChange={handleChangePassword} />
            <input type="checkbox" onChange={handleChangeCheckbox} /> View Password
        </div>
        <div>
            <span className={hurufKapitalValidationStyle}>Mengandung huruf kapital</span> <span className={angkaValidationStyle}>, Mengandung angka</span>
        </div>
        </>
    );    
}