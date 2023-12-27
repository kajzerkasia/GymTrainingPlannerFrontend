import {ChangeEvent} from "react";

export function handleSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    console.log(data);
}
