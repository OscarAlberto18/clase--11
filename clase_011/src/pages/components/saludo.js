import Card from "./card";

export default function Saludo(props) {

    return(
        <div>
            
            <h1>
                Esto es Saludo para: {props.texto}
            </h1>
            
            <Card text={props.text}>
                    {props.children} 
            </Card>
        </div>

    );
 
}