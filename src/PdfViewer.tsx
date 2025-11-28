

import { useState } from "react";
import { Document, Page } from "react-pdf";
import pdf from "./assets/sample.pdf";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { pdfjs } from 'react-pdf';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function PdfViewer() {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoaded({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  return (
    <div style={{ 
      width: "100%", 
      maxWidth: 600, 
      margin: "0 auto",
      backgroundColor: "#f5f5f5", // Optional: Add background to see container
      padding: "10px"
    }}>
      <Document 
        file={pdf} 
        onLoadSuccess={onDocumentLoaded}
        loading={<div>Loading PDF...</div>}
        error={<div>Error loading PDF!</div>}
      >
        {/* Remove white space with CSS and proper scaling */}
        <div style={{
          display: "inline-block",
          border: "1px solid #ccc",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
        }}>
          <Page 
            pageNumber={pageNumber} 
            width={500} // Fixed width, height will scale automatically
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </div>
      </Document>

      <div style={{ 
        marginTop: "20px", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center",
        gap: "10px"
      }}>
        <button
          onClick={() => pageNumber > 1 && setPageNumber(pageNumber - 1)}
          disabled={pageNumber <= 1}
          style={{
            padding: "8px 16px",
            backgroundColor: pageNumber <= 1 ? "#ccc" : "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: pageNumber <= 1 ? "not-allowed" : "pointer"
          }}
        >
          Prev
        </button>
        
        <span style={{ margin: "0 10px" }}>
          Page {pageNumber} of {numPages}
        </span>
        
        <button
          onClick={() => pageNumber < numPages && setPageNumber(pageNumber + 1)}
          disabled={pageNumber >= numPages}
          style={{
            padding: "8px 16px",
            backgroundColor: pageNumber >= numPages ? "#ccc" : "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: pageNumber >= numPages ? "not-allowed" : "pointer"
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PdfViewer;