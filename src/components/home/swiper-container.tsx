// @ts-nocheck
import { SwiperWrapper } from './swiper-wrapper';
export const SwiperContainer = () => {  
return (    
<>      
<div className="swiper-container swiper-container-horizontal">        
<SwiperWrapper />        
<div className="s-btn-prev hidden-lg hidden-md" />        
<div className="s-btn-next hidden-lg hidden-md" />      
</div>    
</>  
);
};
