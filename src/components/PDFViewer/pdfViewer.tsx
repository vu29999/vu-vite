// src/components/PDFViewer.tsx
import { useEffect } from "react";
import PDFObject from "pdfobject";

type PDFViewerProps = {
    url: string;
};

const PDFViewer: React.FC<PDFViewerProps> = ({ url }) => {
    useEffect(() => {
        PDFObject.embed(url, "#pdf-viewer", {
            height: "600px",
        });
    }, [url]);

    return <div id="pdf-viewer" />;
};

export default PDFViewer;
