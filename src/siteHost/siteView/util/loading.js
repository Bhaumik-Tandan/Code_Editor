import ReactLoading from 'react-loading';
import "./loading.css";
function Loading() {
    return (
        <div className="loading">
           <ReactLoading  type="spokes" color="red"/>
            <div>Loading</div>
        </div>
    )
}

export default Loading;
