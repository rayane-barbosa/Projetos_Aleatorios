import './head.css';


function Head(props){
    return(
        <div className='container'>
            <h1 className='page-title'>
                {props.name}
            </h1>
        </div>




    );
}
export default Head;