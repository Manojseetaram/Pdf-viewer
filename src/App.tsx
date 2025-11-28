

import "./App.css";


import { pdfjs } from 'react-pdf';
import PdfViewer from "./PdfViewer";


// Using jsDelivr CDN
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function App() {
  return(
    <div>
    
    <PdfViewer/>
    </div>
  )
}

export default App;
