import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import Card from "./card.js";

function App() {
  var cardDetails = [
    {
      planName: "Free",
      price: 0,
      features: [
        {
          name: "Single User",
        
        },
        {
          name: "5GB of Storage",
          
        },
        {
          name: "Unlimited Public Projects",
          
        },
        {
          name: "Community Access",
          
        },
		{
          name: "Unlimited Private Projects",
          isEnabled:"text-muted"
        },
		{
          name: "Dedicated Phone Support",
          isEnabled:"text-muted"
        },
		{
          name: "Free Subdomain",
          isEnabled:"text-muted"
        },
		{
          name: "Monthly status reports",
          isEnabled:"text-muted"
        },
		
      ],
    },
    {
      planName: "plus",
      price: 9,
      features: [
           {
          name: "Single User",
          
        },
        {
          name: "5GB of Storage",
        
        },
        {
          name: "Unlimited Public Projects",
          
        },
        {
          name: "community Access",
          
        },
		{
          name: "Unlimited Private Projects",
          
        },
		{
          name: "Dedicated Phone Support",
         
        },
		{
          name: "Free Subdomain",
          
        },
		{
          name: "Monthly status reports",
          isEnabled:"text-muted"
        },
      ],
    },
    {
      planName: "Pro",
      price: 49,
      features: [
          {
          name: "Single User",
        
        },
        {
          name: "5GB of Storage",
          
        },
        {
          name: "Unlimited Public Projects",
        
        },
        {
          name: "ommunity Access",
         
        },
		{
          name: "Unlimited Private Projects",
         
        },
		{
          name: "Dedicated Phone Support",
         
        },
		{
          name: "Free Subdomain",
          
        },
		{
          name: "Monthly status reports",
         
        },
      ],
    },
  ];
  return (
    
    <section class="pricing py-5">
    <div class="container">
      <div class="row">
       
      
        
      
           
      
      
         
          {cardDetails.map((card) => {
           
            return <Card card={card}></Card>;
          })}
          </div>
          </div>
        
      
      
      
    
      </section>
      
    
    
  );
}

export default App;
