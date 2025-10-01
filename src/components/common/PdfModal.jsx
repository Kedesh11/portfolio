import React, { useEffect } from 'react';
import { MdClose } from 'react-icons/md';
import { useTranslation } from 'react-i18next';

const PdfModal = ({ open, onClose, src = '/Sevan.pdf' }) => {
  const { t } = useTranslation();

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose?.();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
        role="button"
        aria-label="Close"
      />

      {/* Modal content */}
      <div className="relative w-[95vw] h-[90vh] max-w-5xl bg-[#0f1115] border border-gray-700 rounded-lg shadow-2xl overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-3 border-b border-gray-700 bg-[#0b0d12]">
          <h3 className="text-gray-100 font-semibold">PDF</h3>
          <div className="flex items-center gap-2">
            <a
              href={src}
              download
              className="px-3 py-1 text-sm rounded-md border border-gray-600 bg-gray-800 hover:bg-gray-700 text-gray-100"
            >
              {t('resume.downloadCv')}
            </a>
            <button
              onClick={onClose}
              className="w-8 h-8 inline-flex items-center justify-center rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
              aria-label="Close"
              title="Close"
            >
              <MdClose size={20} />
            </button>
          </div>
        </div>
        <div className="flex-1 bg-black">
          {/* Use iframe for broadest support */}
          <iframe
            title="CV Preview"
            src={src}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default PdfModal;
