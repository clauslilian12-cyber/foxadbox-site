# Setup Waitlist FoxAdBox

## Étapes Resend

1. Va sur https://resend.com → "Audiences" → "Create Audience" → nomme-la "FoxAdBox Waitlist"
2. Copie l'Audience ID → colle dans RESEND_AUDIENCE_ID
3. Va dans "API Keys" → crée une clé avec permission "Full access" → colle dans RESEND_API_KEY
4. Vérifie que le domaine foxadbox.com est bien vérifié dans "Domains"

## Variables d'environnement

```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxx
RESEND_AUDIENCE_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
NOTIFY_EMAIL=ton@email.com
NEXT_PUBLIC_SITE_URL=https://foxadbox.com
```

## Test local

```bash
# 1. Lance le dev server
npm run dev

# 2. Ouvre dans le navigateur
http://localhost:3000/api/waitlist/test

# 3. Si tout est ✅ → teste le formulaire
http://localhost:3000/waitlist
```

## Deploy

```bash
# Ajoute les env vars sur Vercel
vercel env add RESEND_API_KEY
vercel env add RESEND_AUDIENCE_ID
vercel env add NOTIFY_EMAIL

# Redéploie
vercel --prod
```

## Voir les inscrits

Dashboard Resend → Audiences → FoxAdBox Waitlist → Contacts
