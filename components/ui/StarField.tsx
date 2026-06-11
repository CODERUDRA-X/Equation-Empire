"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  pz?: number;
  px: number;
  py: number;
}

interface StarFieldProps {
  starCount?: number;
  speed?: number;
  className?: string;
}

export default function StarField({
  starCount = 200,
  speed = 0.4,
  className = "",
}: StarFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const starsRef = useRef<Star[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;

    function resize() {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    function initStars() {
      starsRef.current = Array.from({ length: starCount }, () => ({
        x: Math.random() * width - width / 2,
        y: Math.random() * height - height / 2,
        z: Math.random() * width,
        px: 0,
        py: 0,
      }));
    }

    function moveStars() {
      starsRef.current.forEach((star) => {
        star.pz = star.z;
        star.z -= speed;
        if (star.z <= 0) {
          star.x = Math.random() * width - width / 2;
          star.y = Math.random() * height - height / 2;
          star.z = width;
          star.pz = width;
        }
      });
    }

    function drawStars() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      starsRef.current.forEach((star) => {
        const sx = (star.x / star.z) * width + cx;
        const sy = (star.y / star.z) * height + cy;
        const px = (star.x / (star.pz ?? star.z)) * width + cx;
        const py = (star.y / (star.pz ?? star.z)) * height + cy;

        const size = Math.max(0.1, (1 - star.z / width) * 2.5);
        const brightness = Math.floor((1 - star.z / width) * 255);
        const alpha = (1 - star.z / width) * 0.9;

        // Draw tail
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(sx, sy);
        ctx.strokeStyle = `rgba(${brightness}, ${Math.floor(brightness * 0.8)}, 255, ${alpha * 0.4})`;
        ctx.lineWidth = size * 0.5;
        ctx.stroke();

        // Draw star dot
        ctx.beginPath();
        ctx.arc(sx, sy, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${brightness}, ${Math.floor(brightness * 0.9)}, 255, ${alpha})`;
        ctx.fill();
      });
    }

    let frameId: number;
    function animate() {
      moveStars();
      drawStars();
      frameId = requestAnimationFrame(animate);
    }

    resize();
    initStars();
    animate();
    animRef.current = frameId!;

    const handleResize = () => {
      resize();
      initStars();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [starCount, speed]);

  return (
    <canvas
      ref={canvasRef}
      id="starfield"
      className={className}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
