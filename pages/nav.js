let section = undefined;

function initiliaze(domElement) {
   section = domElement;
}

function getView(){
   return section;
}

const nav = {
   initiliaze,
   getView
}

export default nav;