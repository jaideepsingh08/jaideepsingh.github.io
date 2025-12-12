import { cn } from '@/lib/utils';

interface ProtectedImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ProtectedImage = ({ src, alt, className }: ProtectedImageProps) => {
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    return false;
  };

  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault();
    return false;
  };

  return (
    <img
      src={src}
      alt={alt}
      className={cn(className)}
      onContextMenu={handleContextMenu}
      onDragStart={handleDragStart}
      draggable={false}
    />
  );
};

export default ProtectedImage;
