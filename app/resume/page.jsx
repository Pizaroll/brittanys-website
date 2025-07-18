"use client"

import { useState } from "react";
import { Document, Page } from "react-pdf"

export default function Resume() {

    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }){
      setNumPages(numPages);
    }

    return (
        // React pdf
        <div>
      <Document file="Brittany-Pizarro-Resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );





        // Basic text
    //     <p>
    //   Need a traditional resume format?{' '}
    //   <a href="/your-resume.pdf" download="your-resume.pdf">
    //     Download my resume as a PDF.
    //   </a>
    // </p>
    
}