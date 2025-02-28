
import { useRef, useEffect } from 'react';
import { useThreeScene } from '../hooks/useThreeScene';

interface ThreeViewerProps {
  modelPath: string;
}

const ThreeViewer = ({ modelPath }: ThreeViewerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isLoading, error } = useThreeScene({ modelPath, containerRef });

  return (
    <div className="relative w-full h-full">
      <div 
        ref={containerRef} 
        className="w-full h-full bg-gradient-to-b from-gray-50 to-gray-100"
      />
      
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
            <p className="mt-4 text-sm text-muted-foreground">Loading 3D model...</p>
          </div>
        </div>
      )}
      
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
              <span className="text-destructive text-2xl">!</span>
            </div>
            <p className="text-destructive font-medium">Error Loading Model</p>
            <p className="mt-1 text-sm text-muted-foreground max-w-xs">{error}</p>
          </div>
        </div>
      )}
      
      <div className="absolute bottom-4 left-4 text-xs text-muted-foreground bg-white/80 backdrop-blur-sm px-2 py-1 rounded-md">
        Drag to rotate • Scroll to zoom
      </div>
    </div>
  );
};

export default ThreeViewer;
