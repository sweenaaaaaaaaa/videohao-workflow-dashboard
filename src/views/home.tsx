// @ts-nocheck
import { useEffect } from 'react';
import { PageRoot } from '@/components/home/page-root';

const HOME_SCRIPTS = [
  '/home/scripts/jquery.min.js',
  '/home/scripts/jquery-migrate.min.js',
  '/home/scripts/swiper.min.js',
  '/home/scripts/swiper.animate.min.js',
  '/home/scripts/jquery.magnific-popup.min.js',
  '/home/scripts/wow.js',
  '/home/scripts/countUp.js',
  '/home/scripts/main.js?v=20260727-cat-chart',
];

function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const existing = document.querySelector(`script[data-home-script="${src}"]`);
    if (existing) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    script.dataset.homeScript = src;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(script);
  });
}

export function HomePage() {  
useEffect(() => {    
let cancelled = false;
    const globalWindow = window as typeof window & { __ytxyHomeScriptsLoaded?: boolean };
    const boot = async () => {
      if (globalWindow.__ytxyHomeScriptsLoaded) {
        window.dispatchEvent(new Event('resize'));
        window.dispatchEvent(new Event('scroll'));
        return;
      }

      for (const src of HOME_SCRIPTS) {
        if (cancelled) {
          return;
        }
        await loadScript(src);
      }

      globalWindow.__ytxyHomeScriptsLoaded = true;
      window.dispatchEvent(new Event('resize'));
      window.dispatchEvent(new Event('scroll'));
    };

    boot().catch((error) => {
      console.error(error);
    });

    return () => {
      cancelled = true;
    };
  }, []);

return (    
<>      
<PageRoot />      
<div key="3" className="right-float hidden-xs hidden-sm">        
<a          
className="goto-top"          
href="#"          
style={{            
display: 'block',          
}}        
>          
<i>            
<svg              
className="icon"              
style={{                
fill: 'currentColor',                
height: '1em',                
overflow: 'hidden',                
verticalAlign: 'middle',                
width: '1em',              
}}              
viewBox="0 0 1024 1024"              
version="1.1"              
xmlns="http://www.w3.org/2000/svg"              
p-id="8240"            
>              
<path                
d="M887.475 762.313 512 386.843l-375.474 375.47L73.947 699.74 512 261.687 950.053 699.74 887.475 762.313z"                
p-id="8241"              
/>            
</svg>          
</i>        
</a>      
</div>      
<div key="5" />      
<div        
key="6"        
id="_r_0_"        
data-base-ui-portal=""        
data-slot="toast-portal-anchored"      
>        
<div          
tabIndex="-1"          
role="region"          
aria-live="polite"          
aria-atomic="false"          
aria-relevant="additions text"          
aria-label="Notifications"          
data-slot="toast-viewport-anchored"          
className="outline-none"        
/>      
</div>      
<div key="7" id="_r_1_" data-base-ui-portal="" data-slot="toast-portal">        
<div          
tabIndex="-1"          
role="region"          
aria-live="polite"          
aria-atomic="false"          
aria-relevant="additions text"          
aria-label="Notifications"          
data-position="bottom-right"          
data-slot="toast-viewport"          
className="fixed z-50 mx-auto flex w-[calc(100%-var(--toast-inset)*2)] max-w-90 [--toast-inset:--spacing(4)] sm:[--toast-inset:--spacing(8)] data-[position*=top]:top-(--toast-inset) data-[position*=bottom]:bottom-(--toast-inset) data-[position*=left]:left-(--toast-inset) data-[position*=right]:right-(--toast-inset) data-[position*=center]:-translate-x-1/2 data-[position*=center]:left-1/2"        
/>      
</div>    
</>  
);
}
