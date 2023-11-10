import React, { useState } from "react";
import cat from "../../assets/cat.avif";
// Componente Mouse que sigue la posición del ratón y proporciona la información a través de una "Render Prop"
function Mouse({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div style={{ height: "100vh" }} onMouseMove={handleMouseMove}>
      {render(position)}
    </div>
  );
}

// Componente Cat que utiliza la información del Mouse para renderizar algo cuando el ratón está cerca
export default function Cat() {
  return (
    <Mouse
      render={(mousePosition) => (
        <div>
          <img
            src={cat}
            alt='Cat'
            style={{
              position: "absolute",
              left: mousePosition.x,
              top: mousePosition.y,
            }}
          />
        </div>
      )}
    />
  );
}
