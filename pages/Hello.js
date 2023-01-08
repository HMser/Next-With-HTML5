import HeaderComponent from "../components/navbar";
import FooterComponent from "../components/footer";
import Log from "../components/Log";
import styles from '../styles/insta.css'
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
