import React, { useState } from 'react';
import { FileText, Download, Eye } from 'lucide-react';
import PDFViewer from './PDFViewer';

interface CVButtonProps {
  variant?: 'primary' | 'secondary' | 'hero';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const CVButton: React.FC<CVButtonProps> = ({ 
  variant = 'primary', 
  size = 'md',
  className = '' 
}) => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const pdfUrl = 'https://collection.cloudinary.com/df5jie5rz/8c0ba890fbd55e973512a62b49667432';

  const handleViewCV = async () => {
    setIsLoading(true);
    
    // Small delay to show loading state
    setTimeout(() => {
      setIsViewerOpen(true);
      setIsLoading(false);
    }, 300);
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'CV_Cesar_Betancourth.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getButtonClasses = () => {
    const baseClasses = 'inline-flex items-center justify-center gap-2 font-medium rounded-2xl transition-all duration-300 relative overflow-hidden group';
    
    const sizeClasses = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    };

    const variantClasses = {
      primary: 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105',
      secondary: 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 shadow-md hover:shadow-lg transform hover:-translate-y-1',
      hero: 'bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105 animate-pulse'
    };

    return `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-3 items-center">
        {/* Main CV Button */}
        <button
          onClick={handleViewCV}
          disabled={isLoading}
          className={getButtonClasses()}
          aria-label="Ver CV/Resume"
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 -top-[1px] -bottom-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          
          {isLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              <span>Cargando...</span>
            </>
          ) : (
            <>
              <Eye size={variant === 'hero' ? 24 : 20} />
              <span>Mira mi CV/Resume</span>
            </>
          )}
        </button>

        {/* Download Button (smaller, secondary) */}
        {variant !== 'hero' && (
          <button
            onClick={handleDownloadCV}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all duration-200 hover:scale-105"
            aria-label="Descargar CV"
            title="Descargar PDF"
          >
            <Download size={16} />
            <span className="hidden sm:inline">Descargar</span>
          </button>
        )}
      </div>

      {/* PDF Viewer Modal */}
      <PDFViewer
        isOpen={isViewerOpen}
        onClose={() => setIsViewerOpen(false)}
        pdfUrl={pdfUrl}
        title="CV - César Betancourth"
      />
    </>
  );
};

export default CVButton;