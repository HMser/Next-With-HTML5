import HeaderComponent from "../components/common/Header/header";
import FooterComponent from "../components/common/Footer/footer";

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
