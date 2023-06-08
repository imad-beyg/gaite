"use client"

import {useEffect, useRef} from 'react'

export const HeroAnimation = (props: any) => {
    const canvasRef = useRef(null)

    useEffect(() => {

        const canvas: any = canvasRef.current
        const context = canvas.getContext('2d')

        const vertices: any = [];

        // Effect Properties
        const vertexCount = 10000;
        const vertexSize = 3;
        const oceanWidth = 150;
        const oceanHeight = -80;
        const gridSize = 16;
        const waveSize = 16;
        const perspective = 200;

        // Common variables
        const depth = (vertexCount / oceanWidth) * gridSize;
        let frame = 0;
        const sin = Math.sin,
            cos = Math.cos,
            tan = Math.tan,
            PI = Math.PI;

        // Render loop
        const loop = function loop() {
            const rad = (sin(frame / 100) * PI) / 20;
            const rad2 = (sin(frame / 50) * PI) / 10;
            frame++;

            if (
                context.canvas.width !== context.canvas.offsetWidth ||
                context.canvas.height !== context.canvas.offsetHeight
            ) {
                context.canvas.width = canvas.width = context.canvas.offsetWidth;
                context.canvas.height = canvas.height = context.canvas.offsetHeight;
            }

            context.fillStyle = "white";
            context.fillRect(0, 0, canvas.width, canvas.height);
            context.save();
            context.translate(canvas.width / 2, canvas.height / 2);
            context.beginPath();
            vertices.forEach(function (vertex: any, i: number) {
                const ni = i + oceanWidth;
                let x = vertex[0] - (frame % (gridSize * 2));
                let z =
                    vertex[2] - ((frame * 2) % gridSize) + (i % 2 === 0 ? gridSize / 2 : 0);
                const wave =
                    cos(frame / 45 + x / 50) -
                    sin(frame / 20 + z / 50) +
                    sin(frame / 30 + (z * x) / 10000);
                let y = vertex[1] + wave * waveSize;
                const a = Math.max(0, 1 - Math.sqrt(Math.pow(x, 2) + Math.pow(z, 2)) / depth);
                let tx, ty, tz;
                y -= oceanHeight;

                // Transformation variables
                tx = x;
                ty = y;
                tz = z;

                // Rotation Y
                tx = x * cos(rad) + z * sin(rad);
                tz = -x * sin(rad) + z * cos(rad);
                x = tx;
                y = ty;
                z = tz;

                // Rotation Z
                tx = x * cos(rad) - y * sin(rad);
                ty = x * sin(rad) + y * cos(rad);
                x = tx;
                y = ty;
                z = tz;

                // Rotation X
                ty = y * cos(rad2) - z * sin(rad2);
                tz = y * sin(rad2) + z * cos(rad2);
                x = tx;
                y = ty;
                z = tz;
                x /= z / perspective;
                y /= z / perspective;
                if (a < 0.01) return;
                if (z < 0) return;
                context.globalAlpha = a;
                context.fillStyle = "hsl(".concat(`${180 + wave * 50}`, "deg, 50%, 0%)");
                context.fillRect(
                    x - (a * vertexSize) / 2,
                    y - (a * vertexSize) / 2,
                    a * vertexSize,
                    a * vertexSize
                );
                context.globalAlpha = 1;
            });
            context.restore();

            requestAnimationFrame(loop);
        };

        // Generating dots
        for (let i = 0; i < vertexCount; i++) {
            const x = i % oceanWidth;
            const y = 0;
            const z = (i / oceanWidth) >> 0;
            const offset = oceanWidth / 2;
            vertices.push([(-offset + x) * gridSize, y * gridSize, z * gridSize]);
        }

        loop();
    }, [])

    return (
        <>
            <canvas ref={canvasRef} {...props} />
        </>
    )
}