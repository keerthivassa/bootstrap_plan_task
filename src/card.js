import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'


function Card(props){
  return (
     
    
    <div class="col-md-6 col-lg-4">     
      <div class="card mt-3 mb-5 mb-lg-0 ">
          <div class="card-body">
              <h5 class="card-title text-muted text-uppercase text-center">{props.card.planName}</h5>
              <h6 class="card-price text-center">${props.card.price}<span class="period">/month</span></h6>
              <hr/>
              <ul class = "fa-ul ">
        {
            props.card.features.map((item) => {
        return (
          item.isEnabled? <li class="text-muted"> <FontAwesomeIcon icon={faXmark} /> {item.name} </li> : <li><FontAwesomeIcon icon={faCheck}/>{item.name}</li>
        
             ) })
        }
              </ul>
              <div class="d-grid">
                <a href="#" class="btn btn-primary text-uppercase">Button</a>
              </div>
              </div>
            </div>
            </div>
            
          
       
         
 
  );
          }
  
  export default Card;