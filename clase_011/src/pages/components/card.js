
export default function Card(props){
      return(
        <>
        <h2>
        <span>
            Esto es un span {props.text}
        </span>
        {props.children}
        </h2>
        </>
      );
}