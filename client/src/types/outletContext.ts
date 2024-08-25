import { ChangeEvent, FormEvent } from "react";
import data from "./data"

type OutletContext = {
    data: data,
    handlers: {
        formSubmitHandler: (e: FormEvent)=>void;
        changeTopicHandler: (e: ChangeEvent<HTMLInputElement>)=>void;
        changeWordNumber: (e: ChangeEvent<HTMLInputElement>)=>void;
        changeStyleHandler: (opt: string)=>void;
    }
}
export default OutletContext