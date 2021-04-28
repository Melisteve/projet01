import React from 'react';



const SocialNetwork = () => {

    const anim = () => {
     let NavLinks = document.querySelectorAll('.social-network a');
     
     NavLinks.forEach(link =>{ //pour chaque icone de reseau social 
       link.addEventListener('mouseover',(e) =>{
           let attrX = e.offsetX ;
           let attrY = e.offsetY ;

           link.style.transform = 'translate(${attrX}px, ${attrY}px)';
       })
     })

  }
 return(
   <div className="social-network">
       <ul className="content">
         <a href="https://www.facebook.com" target="_blank" 
         rel="noopener noreferrer" className="hover"  onMouseOver={anim}>
             <li><i className="fab fa-facebook-f"></i></li>
         </a>

         <a href="https://www.twitter.com" target="_blank" 
         rel="noopener noreferrer" className="hover"  onMouseOver={anim}>
             <li><i className="fab fa-twitter"></i></li>
         </a>

         <a href="https://www.instagram.com" target="_blank" 
         rel="noopener noreferrer" className="hover" onMouseOver={anim}>
             <li><i className="fab fa-instagram" ></i></li>
         </a>

       </ul>
     
   </div>
 );
};
export default SocialNetwork;