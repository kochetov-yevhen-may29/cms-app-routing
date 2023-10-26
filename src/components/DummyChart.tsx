import React, { useRef, useEffect } from "react";

const DummyChart: React.FC = () => {
  const canvasRef: React.RefObject<HTMLCanvasElement> = useRef(null);

  const drawChart = (ctx: CanvasRenderingContext2D | null) => {
    if (!ctx) return;

    const data = [30, 45, 25];

    const colors = ["red", "green", "blue"];
    const total = data.reduce((acc, value) => acc + value, 0);

    let startAngle = 0;

    for (let i = 0; i < data.length; i++) {
      const segmentAngle = (Math.PI * 2 * data[i]) / total;
      ctx.fillStyle = colors[i];

      ctx.beginPath();
      ctx.moveTo(200, 100);
      ctx.arc(200, 100, 80, startAngle, startAngle + segmentAngle);
      ctx.lineTo(200, 100);
      ctx.fill();

      startAngle += segmentAngle;
    }
  };

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");

    if (ctx) {
      drawChart(ctx);
    }
  }, []);

  return (
    <article className="flex justify-center">
      <canvas
        ref={canvasRef}
        width={400}
        height={200}
        style={{ border: "1px solid black" }}
      ></canvas>
    </article>
  );
};

export default DummyChart;
