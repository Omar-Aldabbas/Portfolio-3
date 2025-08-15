import  { useEffect, useState } from "react";
import "./style/ShapesBackground.css";

const SYMBOLS = ["<", ">", "<>", "#", "*", "⨝","↭"];

export const ShapesBackground = () => {
  const [shapes, setShapes] = useState([]);

  useEffect(() => {
    const tempShapes = [];
    for (let i = 0; i < 15; i++) {
      tempShapes.push({
        id: i,
        symbol: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
        size: Math.random() * 14 + 12,
        left: Math.random() * 100,
        duration: Math.random() * 6 + 2, 
        delay: Math.random() * 4,
        color: `var(--${["primary", "foreground", "muted"][Math.floor(Math.random() * 3)]})`,
      });
    }
    setShapes(tempShapes);
  }, []);

  return (
    <div className="background-shapes">
      {shapes.map((shape) => (
        <span
          key={shape.id}
          className="falling-symbol"
          style={{
            left: `${shape.left}vw`,
            fontSize: `${shape.size}px`,
            color: shape.color,
            animationDuration: `${shape.duration}s`,
            animationDelay: `${shape.delay}s`,
          }}
        >
          {shape.symbol}
        </span>
      ))}
    </div>
  );
};
