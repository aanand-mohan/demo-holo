"use client";

import { useEffect, useRef, useState } from "react";

interface CanvasImageProps {
    src: string;
    alt: string;
    className?: string;
    width?: number; // Optional forced width
    height?: number; // Optional forced height
    intensity?: number; // Wave intensity
    speed?: number; // Wave speed
}

export default function CanvasImage({
    src,
    alt,
    className = "",
    width,
    height,
    intensity = 1.5,
    speed = 0.03,
}: CanvasImageProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [image, setImage] = useState<HTMLImageElement | null>(null);
    const requestRef = useRef<number>(0);
    const timeRef = useRef<number>(0);

    // 1. Load the image
    useEffect(() => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = src;
        img.onload = () => {
            setImage(img);
        };
    }, [src]);

    // 2. Animation Loop
    useEffect(() => {
        if (!image || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas size to match image or props
        // We use the intrinsic size for the canvas texturing, 
        // but CSS handles the display size.
        const renderWidth = width || image.naturalWidth;
        const renderHeight = height || image.naturalHeight;

        canvas.width = renderWidth;
        canvas.height = renderHeight;

        const animate = () => {
            timeRef.current += speed;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Wave effect: Draw vertical slices with sine offset
            // Optimization: Draw larger slices for better performance
            const sliceWidth = 2; // Width of each slice
            const totalSlices = renderWidth / sliceWidth;

            for (let i = 0; i < totalSlices; i++) {
                const x = i * sliceWidth;
                // Calculate Y offset based on sine wave
                // Math.sin(x_position * frequency + time) * amplitude
                const yOffset =
                    Math.sin(i * 0.05 + timeRef.current) * intensity;

                // Draw slice
                // drawImage(image, sy, sx, sWidth, sHeight, dx, dy, dWidth, dHeight)
                // Here we map the source image directly to the destination
                ctx.drawImage(
                    image,
                    (i * sliceWidth * image.naturalWidth) / renderWidth, // source x
                    0, // source y
                    (sliceWidth * image.naturalWidth) / renderWidth, // source width
                    image.naturalHeight, // source height
                    x, // dest x
                    yOffset, // dest y (with offset)
                    sliceWidth, // dest width
                    renderHeight // dest height
                );
            }

            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);

        return () => {
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
        };
    }, [image, width, height, intensity, speed]);

    return (
        <canvas
            ref={canvasRef}
            className={className}
            aria-label={alt}
            role="img"
            style={{ display: 'block' }} // Remove inline-block gap
        />
    );
}
