import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function Box(props) {
    // This reference will give us direct access to the mesh
    const meshRef = useRef();
    
    // Set up state for the hovered and active state
    // const [hovered, hover] = useState(false);
    // const [active, setActive] = useState(false);

    // Subscribe this component to the render loop, which executes code on every frame
    useFrame((state, delta) => {
        // Rotate the mesh slightly on the X and Y axes for animation
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.5; // Rotate slowly
            meshRef.current.rotation.y += delta * 0.5;
        }
    });

    // Return the mesh (3D object)
    return (
        <mesh
            {...props}
            ref={meshRef}
            // onClick={(event) => setActive(!active)}
            // onPointerOver={(event) => hover(true)}
            // onPointerOut={(event) => hover(false)}
            scale={1} // Set the size of the box
        >
            {/* Define the geometry (shape) */}
            <boxGeometry args={[1, 1, 1]} /> 
            
            {/* Define the material (appearance). 
               Use 'wireframe: true' for a background look. */}
            <meshBasicMaterial 
                color="#8a2be2" // Blue Violet
                wireframe={true}
            />
        </mesh>
    );
}

export default Box;