import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";

function HelloPage(){    
    return(        
        <div>            
        <HeaderComponent></HeaderComponent>            
        <br />            
        <div>                
        	Hello there, How are you?            
        </div>                
        <br />            
        <FooterComponent></FooterComponent>        
       </div>    
    )
}

export default HelloPage
