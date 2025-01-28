import type { APIRoute } from 'astro';
import satori from 'satori';
import { html } from 'satori-html';
import { Resvg } from '@resvg/resvg-js';

export const get: APIRoute = async ({ params, request }) => {
  const searchParams = new URL(request.url).searchParams;
  const title = searchParams.get('title');

  const svg = await satori(
    html`<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 1200px; height: 630px; background-color: #f4f4f4;">
      <h1 style="font-size: 60px; font-weight: bold; color: #333;">${title}</h1>
    </div>`,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: await fetch('https://rsms.me/inter/font-files/Inter-Regular.woff').then((res) => res.arrayBuffer()),
          weight: 400,
          style: 'normal',
        },
      ],
    }
  );

  const resvg = new Resvg(svg);
  const pngBuffer = resvg.render().asPng();

  return new Response(pngBuffer, {
    headers: { 'Content-Type': 'image/png' },
  });
};
