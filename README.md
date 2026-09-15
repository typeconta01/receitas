# Semana Resolvida™ — Fanpage de vendas

Landing page de página única para o produto digital **Semana Resolvida™**.

## Como rodar

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## O que trocar antes de publicar

1. Link de checkout em `src/lib/constants.ts` (`CHECKOUT_URL`)
2. Depoimentos reais em `src/content/offer.ts`
3. E-mail de contato em `src/app/contato/page.tsx`
4. URL do site em `src/app/layout.tsx` (`metadataBase`)
5. Imagens e logo em `public/images/` se quiser versões finais

## Scripts

- `npm run dev` — ambiente local
- `npm run build` — build de produção
- `npm run start` — servir o build
