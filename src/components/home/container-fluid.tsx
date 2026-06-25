// @ts-nocheck
import { RENYI_COMPANY_NAME } from '@/lib/site-pages';
import { MenuBox } from './menu-box';
export const ContainerFluid = () => {  
return (    
<>      
<div className="container-fluid">        
<a          
href="/"          
title={RENYI_COMPANY_NAME}          
className="logo navbar-brand renyi-brand renyi-brand--zh"        
aria-label={`${RENYI_COMPANY_NAME} home`}
>          
<span className="renyi-brand__mark" aria-hidden="true" />
<span className="renyi-brand__title">{RENYI_COMPANY_NAME}</span>
</a>        
<div className="m-btn">          
<span />          
<span />          
<span />        
</div>        
<MenuBox />        
<ul className="top-block">          
<li className="item">            
<a className="a1" href="javascript:;">              
<span className="hidden-sm hidden-xs">语言选择</span>              
<i className="ifa ifa-arrow-down-bold hidden-sm hidden-xs" />            
</a>            
<div className="show-box">              
<div className="container-fluid">                
<div className="language">                  
<a href="/">中文</a>                  
<a href="/en/">English</a>                  
<a href="/ru/">русский язык</a>                  
<a href="/es/">Español</a>                
</div>              
</div>            
</div>            
</li>          
<li className="item hidden-sm hidden-xs">            
<a className="a2 right_btn" href="javascript:;">              
<span className="renyi-header-action-icon" aria-hidden="true" />            
</a>          
</li>        
</ul>        
<div className="menu-box-bg hide" />      
</div>    
</>  
);
};
