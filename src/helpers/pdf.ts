//---------------------------------------------------------------------------------------------------------------------------------

import CV_Javier_Gonzalez_PDF from './CV_-_Javier_González.pdf';

//---------------------------------------------------------------------------------------------------------------------------------

const downloadPDF: () => void = (): void => {
    const link = document.createElement('a');
    link.href = CV_Javier_Gonzalez_PDF;
    link.download = 'CV_Javier_González.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

export { downloadPDF }; 