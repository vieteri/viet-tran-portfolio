'use client';

import { useState } from 'react';
import { Printer } from 'lucide-react';

export default function CVPrintButton() {
  const [preparing, setPreparing] = useState(false);
  const [error, setError] = useState('');
  const print = async () => {
    setPreparing(true);
    setError('');
    try {
      await document.fonts.ready;
      window.print();
    } catch {
      setError('Please use your browser print menu to save the CV as a PDF.');
    } finally {
      setPreparing(false);
    }
  };
  return (
    <div>
      <button type="button" className="cv-print-button" onClick={print} disabled={preparing}><Printer size={17} aria-hidden="true" />{preparing ? 'Preparing...' : 'Print / save PDF'}</button>
      {error && <p role="alert">{error}</p>}
    </div>
  );
}
