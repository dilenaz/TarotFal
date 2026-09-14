# Lunae — Tarot & Astroloji MVP

Tarot sembolizmini, kullanıcının soru bağlamı ve astrolojik bilgilerle bir araya getiren, hesap gerektirmeyen responsive web uygulaması.

## Çalıştırma

Bu proje bağımlılıksız bir Node.js web uygulamasıdır. VS Code geliştirme terminalinde `npm run dev` çalıştırın ve `http://localhost:3001` adresini açın. Normal sunucu için `npm start` ve `http://localhost:3000` kullanılır. Üretim AI ve astroloji sağlayıcılarını etkinleştirmek için `.env.example` dosyasını `.env` olarak kopyalayıp sunucu ortam değişkenlerini tanımlayın.

## Mevcut MVP

- 78 yapılandırılmış tarot kartı (22 Büyük Arkana, 56 Küçük Arkana)
- 6 yapılandırılabilir açılım ve pozisyonları
- Kriptografik rastgelelik ile tekrar etmeyen kart çekimi
- Soru bağlamı analizi, açılım önerisi ve hassas konu uyarıları
- Geçici doğum bilgisi / ilişki bağlamı akışı
- Tarot + astroloji sentezi için güvenli sonuç şablonu ve açıklanabilirlik alanı
- Mobil uyumlu, animasyonlu kullanıcı deneyimi

## Üretim mimarisi

Arayüz yerel API katmanını kullanır. Gerçek astrolojik transit, doğum haritası ve AI sentezi için sağlayıcı anahtarları sunucuda yapılandırılmalıdır:

```text
POST /api/question/analyze
GET  /api/spreads
POST /api/tarot/draw
POST /api/astrology/birth-chart
POST /api/astrology/synastry
GET  /api/astrology/transits
POST /api/interpretation
```

Astroloji verisi güvenilir bir ephemeris/astroloji sağlayıcısından alınmalı; model yalnızca sağlanan veriyi yorumlamalıdır. API anahtarları tarayıcıya gönderilmemeli, doğum verileri kalıcı olarak saklanmamalı ve hassas konular için sunucu tarafında ayrıca güvenlik kontrolleri uygulanmalıdır.
