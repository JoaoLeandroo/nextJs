import style from './buttonGeneric.module.css'

export default function ButtonGenenric(props) {
    return(
        <button className={style.buttonG}>
            {props.buttonName}
        </button>
    )
}