 
import { useLocation ,Link} from "react-router-dom";
import '../detail/detail.css'


const Detail=( props )=>{
   const location=useLocation();
 
let data =location.state.data;
let breed=data.breeds[0];
console.log(breed);
   
    return(

        <>
        <div className="img-div"> 
        <img src={data.url } alt='cat images'/>
        </div>

        <div className="detail-box">
            {Object.keys(data.breeds).length!==0?<div className="informations-box"> 
                     <h4> Breed Name : {breed.name}</h4>
                     <br/>
                     <h4> Breed Origin : {breed.origin}</h4> 
                     <br/>
                     <h4> Breed Lifespan : {breed.life_span}</h4> 
                     <br/>
                     <h4> Breed Temperament : {breed.temperament}</h4> 
                     <br/>
                     <h4> Breed Affection level: {breed.affection_level}</h4> 
                     <br/>

                     

            </div>
            :<div className="information-box">
                <h1>No Information Available</h1>
                </div>
            }
        </div>
               <div className="backtohome-box">   <Link to='/' className="backtohome" > 
                 Return To Home Page
                 </Link>
                 </div>
                
        </>
    )

}
export default Detail