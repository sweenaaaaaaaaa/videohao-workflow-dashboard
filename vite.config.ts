// vite.config.ts
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';
export default defineConfig({  
server: {    
port: 3000,  
},  
plugins: [    
tsConfigPaths({      
projects: ['./tsconfig.json'],    
    }),
    tanstackStart(),    
    // react's vite plugin must come after start's vite plugin    
    viteReact(),    
  ],  
  build: {    
sourcemap: process.env.SOURCE_MAPS === 'true' ? 'hidden' : false,
rollupOptions: {      
external(source) {        
if (source.startsWith('node:')) {          
return true;        
}        
return false;      
},    
},  
},
});
