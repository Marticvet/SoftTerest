export function ce(tag, attributesObj, ...params){
   const element = document.createElement(tag);
   const text = params[0];

   if(params.length === 1 && typeof text !== 'object'){
      if(['input', 'textarea'].includes(tag)){
         element.value = text;
      }else{
         element.textContent = text;
      }
   }else{
      params.forEach(el => {
         element.appendChild(el);
      })
   }

   if(attributesObj !== undefined){
      Object.keys(attributesObj).forEach(key => {
         element.setAttribute(key, attributesObj[key])
      })
   }

   return element;
}