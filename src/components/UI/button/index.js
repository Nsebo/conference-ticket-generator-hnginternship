
import buttonStyles from './styles.module.css'
const Button=({title,width,height,handleOnClick})=>{
    return <button style={{width:width,height:height}} onClick={handleOnClick} className={buttonStyles.button}>{title}</button>
}

export default Button;