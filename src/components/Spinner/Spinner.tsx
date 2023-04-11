import { ISpinner } from "../../model/spinner";
import "./Spinner.style.scss";

const Spinner = ({ loading=false }:ISpinner) => {
    return loading ? (
        <div className="snipper">
            <span className="loader"></span>

        </div>

    ) : null
};

export default Spinner;