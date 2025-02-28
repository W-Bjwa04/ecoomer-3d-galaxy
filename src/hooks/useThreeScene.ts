
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

interface UseThreeSceneProps {
  modelPath: string;
  containerRef: React.RefObject<HTMLDivElement>;
}

export const useThreeScene = ({ modelPath, containerRef }: UseThreeSceneProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const modelRef = useRef<THREE.Object3D | null>(null);
  const frameIdRef = useRef<number | null>(null);

  // Initialize scene
  useEffect(() => {
    if (!containerRef.current) return;
    
    try {
      // Create scene
      const scene = new THREE.Scene();
      const isDarkMode = document.documentElement.classList.contains('dark');
      scene.background = new THREE.Color(isDarkMode ? 0x1a1814 : 0xf8f8f2);
      sceneRef.current = scene;
      
      // Create camera
      const camera = new THREE.PerspectiveCamera(
        45, 
        containerRef.current.clientWidth / containerRef.current.clientHeight, 
        0.1, 
        1000
      );
      camera.position.set(0, 0, 5);
      cameraRef.current = camera;
      
      // Create renderer
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      containerRef.current.appendChild(renderer.domElement);
      rendererRef.current = renderer;
      
      // Create controls
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.maxPolarAngle = Math.PI / 1.5;
      controls.minDistance = 2;
      controls.maxDistance = 10;
      controlsRef.current = controls;
      
      // Add lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
      scene.add(ambientLight);
      
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
      directionalLight.position.set(5, 5, 5);
      directionalLight.castShadow = true;
      directionalLight.shadow.mapSize.width = 2048;
      directionalLight.shadow.mapSize.height = 2048;
      scene.add(directionalLight);
      
      const backLight = new THREE.DirectionalLight(0xffffff, 0.8);
      backLight.position.set(-5, 3, -5);
      scene.add(backLight);
      
      // Add spotlight for dramatic effect
      const spotLight = new THREE.SpotLight(0xffffff, 1);
      spotLight.position.set(0, 10, 0);
      spotLight.angle = Math.PI / 6;
      spotLight.penumbra = 0.2;
      spotLight.decay = 2;
      spotLight.distance = 50;
      spotLight.castShadow = true;
      scene.add(spotLight);
      
      // Create a subtle environment map
      const hemiLight = new THREE.HemisphereLight(0xffffff, 0x8d8d8d, 0.5);
      scene.add(hemiLight);
      
      // Add a simple circular platform for the food to rest on
      const platformGeometry = new THREE.CylinderGeometry(2, 2, 0.1, 32);
      const platformMaterial = new THREE.MeshStandardMaterial({ 
        color: isDarkMode ? 0x2c2c2c : 0xf0f0f0,
        roughness: 0.8,
        metalness: 0.2
      });
      const platform = new THREE.Mesh(platformGeometry, platformMaterial);
      platform.position.y = -1;
      platform.receiveShadow = true;
      scene.add(platform);
      
      // Handle resize
      const handleResize = () => {
        if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
        
        cameraRef.current.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
      };
      
      window.addEventListener('resize', handleResize);
      
      // Track theme changes
      const themeObserver = new MutationObserver(() => {
        if (!sceneRef.current) return;
        const isDarkMode = document.documentElement.classList.contains('dark');
        sceneRef.current.background = new THREE.Color(isDarkMode ? 0x1a1814 : 0xf8f8f2);
        
        if (platform) {
          platformMaterial.color.set(isDarkMode ? 0x2c2c2c : 0xf0f0f0);
        }
      });
      
      themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
      
      // Load model
      loadModel(modelPath);
      
      // Animation loop
      const animate = () => {
        frameIdRef.current = requestAnimationFrame(animate);
        
        if (controlsRef.current) {
          controlsRef.current.update();
        }
        
        if (modelRef.current) {
          modelRef.current.rotation.y += 0.002;
        }
        
        if (rendererRef.current && sceneRef.current && cameraRef.current) {
          rendererRef.current.render(sceneRef.current, cameraRef.current);
        }
      };
      
      animate();
      
      return () => {
        window.removeEventListener('resize', handleResize);
        themeObserver.disconnect();
        
        if (frameIdRef.current) {
          cancelAnimationFrame(frameIdRef.current);
        }
        
        if (rendererRef.current && containerRef.current) {
          containerRef.current.removeChild(rendererRef.current.domElement);
        }
        
        if (controlsRef.current) {
          controlsRef.current.dispose();
        }
        
        if (rendererRef.current) {
          rendererRef.current.dispose();
        }
      };
    } catch (err) {
      console.error('Failed to initialize three.js scene:', err);
      setError('Failed to initialize 3D viewer');
      setIsLoading(false);
    }
  }, [containerRef]);
  
  // Load model function
  const loadModel = (path: string) => {
    if (!sceneRef.current) return;
    
    setIsLoading(true);
    setError(null);
    
    const loader = new GLTFLoader();
    
    // Use the provided model path directly instead of the demo model
    const actualModelPath = path;
    
    console.log('Loading 3D model from path:', actualModelPath);
    
    loader.load(
      actualModelPath,
      (gltf) => {
        const model = gltf.scene;
        
        // Enable shadows for all meshes
        model.traverse((node) => {
          if (node instanceof THREE.Mesh) {
            node.castShadow = true;
            node.receiveShadow = true;
          }
        });
        
        // Center model
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        
        // Reset position
        model.position.set(-center.x, -center.y, -center.z);
        
        // Scale model to fit viewport
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 2 / maxDim;
        model.scale.set(scale, scale, scale);
        
        if (sceneRef.current) {
          // Remove previous model if it exists
          if (modelRef.current && sceneRef.current.getObjectById(modelRef.current.id)) {
            sceneRef.current.remove(modelRef.current);
          }
          
          sceneRef.current.add(model);
          modelRef.current = model;
        }
        
        setIsLoading(false);
      },
      (xhr) => {
        // Loading progress
        const progress = (xhr.loaded / xhr.total) * 100;
        console.log(`Loading model: ${Math.round(progress)}%`);
      },
      (error) => {
        console.error('Error loading model:', error);
        setError('Failed to load 3D model. Please check the model path and make sure your GLB files are in the public/models/ directory.');
        setIsLoading(false);
      }
    );
  };
  
  return { isLoading, error };
};
