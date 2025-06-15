import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { IconUploadImage } from "../../assets/icons";
import { Typography } from "../Typography";
import * as styles from "./FileUploader.css";

interface FileUploaderProps {
    onFileSelect: (file: File) => void;
    previewUrl?: string | null;
    maxDimensions?: { width: number; height: number };
    maxSize?: number;
    accept?: Record<string, string[]>;
}

export const FileUploader = ({
    onFileSelect,
    previewUrl,
    maxDimensions = { width: 1024, height: 1024 },
    maxSize = 5 * 1024 * 1024, // 5MB
    accept = {
        'image/png': ['.png'],
        'image/jpeg': ['.jpg', '.jpeg']
    }
}: FileUploaderProps) => {
    const [error, setError] = useState<string | null>(null);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        if (!file) return;

        const img = new Image();
        img.onload = () => {
            if (img.width > maxDimensions.width || img.height > maxDimensions.height) {
                setError(`Image dimensions must be below ${maxDimensions.width}x${maxDimensions.height}px`);
                return;
            }
            setError(null);
            onFileSelect(file);
        };
        img.src = URL.createObjectURL(file);
    }, [maxDimensions, onFileSelect]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept,
        maxSize,
        multiple: false,
        noClick: false,
        noKeyboard: false
    });

    return (
        <div className={styles.container}>
            <div
                {...getRootProps()}
                className={`${styles.dropzone} ${isDragActive ? styles.dropzoneActive : ''}`}
                role="button"
                tabIndex={0}
            >
                <input {...getInputProps()} />
                {previewUrl ? (
                    <>
                        <img
                            src={previewUrl}
                            alt="Preview"
                            className={styles.previewImage}
                        />
                        <div className={styles.overlay}>
                            <IconUploadImage className={styles.uploadIconWhite} />
                            <span className={styles.uploadTextWhite}>Change Image</span>
                        </div>
                    </>
                ) : (
                    <>
                        <IconUploadImage className={styles.uploadIcon} />
                        <span className={styles.uploadText}>
                            {isDragActive ? 'Drop image here' : '+ Upload Image'}
                        </span>
                    </>
                )}
            </div>
            <div>
                {error ? (
                    <Typography.Body color="red" size="small">
                        {error}
                    </Typography.Body>
                ) : (
                    <>
                        <Typography.Body color="gray" size="small">
                            Image must be below {maxDimensions.width}x{maxDimensions.height}px.
                        </Typography.Body>
                        <Typography.Body color="gray" size="small">
                            Use PNG or JPG format.
                        </Typography.Body>
                        <Typography.Body color="gray" size="small">
                            Max file size: {maxSize / (1024 * 1024)}MB
                        </Typography.Body>
                    </>
                )}
            </div>
        </div>
    );
}; 