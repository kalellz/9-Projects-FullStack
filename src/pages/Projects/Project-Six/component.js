import { useState } from "react";
import "../../global.scss";

export default function Component() {
    const [id, setId] = useState("13144")
    const [name, setName] = useState("Bruno de Oliveira")
    const [email, setEmail] = useState("boliveira@gmail.com")
    const [start, setStart] = useState("04/01/05")
    const [faixa, setFaixa] = useState("2.500,00")
  return (
    <tr className="Tr-Component">
        <th><span className="id">{id}</span></th>
        <th><span class="content">{name}</span></th>
        <th><span class="content">{email}</span></th>
        <th>{start}</th>
        <th>R$ {faixa}</th>
    </tr>
  );
}
