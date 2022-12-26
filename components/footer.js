function FooterComponent() {    
	return (        
		<>
<footer>
  <div className="inside__footer">
    <p className="copyright">
      Design By  <a href="https://www.hmser.ml/"> HM </a>
      <br />
       {`© ${new Date().getFullYear()}`} StatusArea, All Rights Reserved.
      <br /> </p>
  </div>
</footer>
               </>
	)
}
export default FooterComponent
