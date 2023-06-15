import "./index.css";
import Button from "../button/Button" 

const Card = ({ data }) => {
    const onHandleClick = () => alert(data.todo);
    
return (
    <div className= {`Card ${data.completed}`} onClick={onHandleClick}>
<h3 className="todo__title">{data.todo}</h3> 
<Button item={data}/>
</div>  
);
};

export default Card;