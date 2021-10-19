import { useState } from "react"

const useInput=(handleValueValidity)=> {
    const [value, setValue] = useState("");
    const [isTouched , setIsTouched] = useState(false);

    let valueIsValid = handleValueValidity(value);

    const handleValueChange=(e)=>{
        setValue(e.target.value)
    }

    const handleValueBlurChange=()=>{
        setIsTouched(true);
    }

    return {
        value ,
        valueIsTouched : isTouched ,
        valueIsValid ,
        handleValueChange,
        handleValueBlurChange
    }
}

export default useInput;