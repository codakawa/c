import classes from "./component.module.css"

function Component(props) {
    return (
        <div className={classes.secondText}>
            {props.text}
        </div>
    )
}

export default Component;