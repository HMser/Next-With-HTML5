import HeaderComponent from "../components/navbar";
import FooterComponent from "../components/footer";
import ContactForm from "../components/Log";
function HelloPage(){    
    return(        
        <div>            
        <HeaderComponent></HeaderComponent>            
        <br />            
        <div>                
        	Hello there, How are you?            
        </div>                
        <br />   
<Log />         
        <FooterComponent></FooterComponent>        
       </div>    
    )
}

export default HelloPage
