declare module "pdfobject" {
    interface PDFObjectOptions {
        id?: string;
        page?: number;
        pdfOpenParams?: { [param: string]: any };
        fallbackLink?: string;
        forcePDFJS?: boolean;
        PDFJS_URL?: string;
        height?: string;
        width?: string;
    }

    function embed(
        url: string,
        targetSelector: string,
        options?: PDFObjectOptions
    ): void;

    const PDFObject: {
        embed: typeof embed;
    };

    export = PDFObject;
}
