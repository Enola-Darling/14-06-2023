import "./index.css";


const Card = ({ data }) => {
    const onHandleClick = () => alert(data.todo);
    
return (
    <div className="Card" onClick={onHandleClick}>
<h3 className="todo__title">{data.todo}</h3> 
<button className="Button">done</button>
</div>  
);
};

export default Card;