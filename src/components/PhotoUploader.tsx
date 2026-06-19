import { useState } from 'react';
import { imageToDataUrl } from '../utils/imageToDataUrl';

type Props = { value: string | null; onChange: (dataUrl: string | null) => void };

export function PhotoUploader({ value, onChange }: Props) {
  const [error, setError] = useState('');
  async function handleFile(file: File | undefined) {
    setError('');
    if (!file) return;
    try {
      const dataUrl = await imageToDataUrl(file);
      onChange(dataUrl);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Foto tidak bisa dibaca.');
    }
  }
  return (
    <div className="photo-uploader">
      <label className="file-label">
        Upload foto lokal
        <input type="file" accept="image/jpeg,image/png,image/webp" onChange={(event) => void handleFile(event.target.files?.[0])} />
      </label>
      {value && <button type="button" className="ghost-button" onClick={() => onChange(null)}>Hapus foto</button>}
      {error && <p className="error-text" role="alert">{error}</p>}
    </div>
  );
}
