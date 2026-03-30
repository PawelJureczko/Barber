# Product Requirements Document

**Product Name:** Razor Sznyt — Landing Page
**Version:** 0.1 — Draft
**Status:** Draft
**Author:** Generated via AI-assisted discovery
**Date:** 2026-03-30
**Last Updated:** 2026-03-30

---

## Spis treści

1. TL;DR
2. Problem Statement & Opportunity
3. Target Users & Beachhead Segment
4. Value Proposition & Competitive Positioning
5. Goals, North Star & Success Metrics
6. MVP Scope (MoSCoW)
7. Functional Requirements
8. User Stories & Acceptance Criteria
9. Non-Functional Requirements
10. Go-to-Market Considerations
11. Risks, Assumptions & Constraints
12. Dependencies
13. Timeline & Milestones
14. Open Questions & Decisions Log
15. Appendix

---

## 1. TL;DR

Razor Sznyt to barber shop w Knurowie działający od 16 sierpnia 2024, bez dotychczasowej obecności online. Celem projektu jest budowa efektownej, szybkiej strony-wizytówki (pure frontend, zero backendu), której jedynym zadaniem jest konwersja odwiedzającego w klienta — poprzez CTA kierujące do profilu Booksy. Strona ma pozycjonować się lokalnie jako "barber Knurów" i reprezentować markę na poziomie wizualnym znacznie powyżej lokalnej konkurencji. Sukces mierzony jest wzrostem liczby rezerwacji przez Booksy.

---

## 2. Problem Statement & Opportunity

### 2.1 The Job-to-be-Done

> "Kiedy mężczyzna z Knurowa lub okolic szuka dobrego barbera, chce szybko ocenić czy dany salon pasuje do jego stylu i standardów — żeby bez ryzyka umówić wizytę."

**Czym "zatrudniają" dziś zamiast strony Razor Sznyt?**
- Wyszukiwarka Google → wyniki konkurencji lub brak wyników dla Razor Sznyt
- Profil Booksy bezpośrednio — ale nie daje on wrażenia marki
- Facebook/Instagram salonu — nieprzystosowane do konwersji, brak CTA do rezerwacji

**Gdzie te rozwiązania zawodzą?**
Profil Booksy jest funkcjonalny, ale sterylny — nie buduje klimatu, nie opowiada historii, nie wywołuje emocji. Instagram buduje społeczność, ale nie konwertuje przypadkowego użytkownika szukającego barbera w Knurowie. Brak strony = brak wiarygodności w wynikach Google.

### 2.2 Cost of Inaction

| Perspektywa | Skutek braku strony |
|---|---|
| Użytkownik | Nie znajduje Razor Sznyt przy lokalnym wyszukiwaniu, trafia do konkurencji |
| Biznes | Utracone rezerwacje od klientów szukających online; brak możliwości skalowania w miarę wzrostu ekipy |
| Rynek / Konkurencja | Konkurenci z własną stroną wyglądają bardziej profesjonalnie, dostają ruch organiczny za darmo |

### 2.3 Dlaczego Teraz

1. **Salon istnieje rok** — jest już co pokazać: portfolio, zespół, charakter miejsca. Strona zbudowana bez treści jest słabsza niż strona z realnym contentem.
2. **Local SEO to wolna gra** — im wcześniej strona zaindeksuje się dla fraz "barber Knurów", tym trudniej będzie to odwrócić konkurencji.
3. **Rosnące oczekiwania konsumentów** — mężczyźni w każdym wieku coraz częściej szukają usług przez Google przed pierwszą wizytą. Brak strony = nieufność.

### 2.4 Market Opportunity

Knurów (~36 000 mieszkańców) + Gliwice/Rybnik jako rynek pobliski. [ESTIMATE] Potencjalna baza klientów: 5 000–10 000 mężczyzn w grupie wiekowej 15–65 lat w zasięgu komunikacyjnym. Celem jest dominacja lokalnego SEO, nie walka o ogólnopolski rynek.

---

## 3. Target Users & Beachhead Segment

### 3.1 Beachhead Segment

**Mężczyźni z Knurowa i okolic szukający barbera przez Google.**

To jedyny segment, który ma być podbity na starcie. Są intencyjni (aktywnie szukają), lokalnie dostępni i gotowi do rezerwacji. Zdobycie widoczności na frazę "barber Knurów" jest warunkiem koniecznym i wystarczającym dla pierwszej wersji strony.

### 3.2 Primary Persona

| Atrybut | Szczegół |
|---|---|
| Persona | "Marek", 28 lat, pracownik fizyczno-techniczny lub handlowiec |
| Lokalizacja | Knurów / Gliwice |
| Profil techniczny | Średni — używa smartfona, Google Maps, Instagrama |
| Job-to-be-Done | Znaleźć dobrego barbera blisko domu, którego styl i klimat mu odpowiada |
| Obecne rozwiązanie | Polecenia od znajomych lub przypadkowy salon "po drodze" |
| Frustracje | Nie wie czego się spodziewać w nowym miejscu; boi się złego strzyżenia; nie lubi dzwonić — woli zarezerwować online |
| Sukces wygląda tak | W 3 minuty ocenił salon wizualnie, uwierzył że tam trafi i zarezerwował wizytę |
| Częstotliwość | Co 3–6 tygodni |
| Research Basis | [ASSUMPTION — do walidacji przy pierwszych 20 rezerwacjach z nowej strony] |

**Cytat reprezentatywny:** *"Chcę wiedzieć jak wygląda to miejsce i czy ci chłopacy wiedzą co robią, zanim tam pojadę."*

### 3.3 Secondary Persona

**"Mama / Ojciec rezerwujący dla dziecka"** — rodzic szukający barbera dla syna, zwraca uwagę na atmosferę (czy jest przyjazna dla dziecka) i dostępność online rezerwacji. Profil Booksy odpowiada na potrzebę rezerwacji; strona musi komunikować "przyjazne dla wszystkich" wizualnie.

### 3.4 User Journey (przed stroną Razor Sznyt)

1. Mężczyzna wpisuje w Google "barber Knurów"
2. Widzi listę konkurentów — Razor Sznyt nie pojawia się lub jest na dole
3. Klika w profil Booksy (jeśli w ogórd trafia) — sucha strona, brak charakteru
4. Nie jest przekonany, szuka dalej lub odkłada decyzję
5. **→ UTRACONA REZERWACJA**

---

## 4. Value Proposition & Competitive Positioning

### 4.1 Core Value Proposition

> "Dla mężczyzny z Knurowa, który szuka barbera godnego zaufania, Razor Sznyt to nowoczesny barber shop, który łączy wysoki poziom rzemiosła z ludzką atmosferą — w przeciwieństwie do anonimowych salonów, gdzie jesteś tylko numerem w kolejce."

### 4.2 Competitive Comparison

| Wymiar | Razor Sznyt | Typowy lokalny fryzjer | Inny lokalny barber |
|---|---|---|---|
| Jakość strony www | Wysoka (cel) | Brak lub słaba | Niska–średnia |
| Atmosfera i klimat | Wysoka | Neutralna | Średnia |
| Rezerwacja online | Booksy | Telefon | Booksy/brak |
| Doradztwo fryzjerskie | Wysoka | Niska | Średnia |
| Local SEO | Wysoka (cel) | Niska | Niska |
| Komunikacja z klientem | Bezpośrednia, swobodna | Formalna | Różna |

### 4.3 Unfair Advantages

1. **Jakość wykonania strony** — w Knurowie praktycznie nikt z konkurencji nie ma strony na poziomie, który planujemy. To da natychmiastowy sygnał jakości.
2. **Early SEO mover** — zaindeksowanie teraz daje kilkumiesięczne wyprzedzenie przed potencjalnym działaniem konkurencji.
3. **Autentyczny content** — zdjęcia, klimat i charakter miejsca są realne, nie stockowe. To rzadkość w tej niszy lokalnie.

---

## 5. Goals, North Star & Success Metrics

### 5.1 North Star Metric

**North Star: Liczba kliknięć w przycisk CTA → Booksy (miesięcznie)**

**Dlaczego:** To jedyna akcja, która bezpośrednio przekłada się na wizytę. Wszystko inne (wejścia, czas na stronie) jest wskaźnikiem pośrednim.

### 5.2 Counter-Metrics

| Counter-Metric | Co chroni |
|---|---|
| Bounce rate (< 60%) | Przed sytuacją, gdzie strona przyciąga ruch, ale nie angażuje |
| Core Web Vitals (LCP < 2.5s) | Przed degradacją SEO i UX na słabszych połączeniach |

### 5.3 Three-Horizon Goals

| Horyzont | Cel | Metryka | Target | Timeframe |
|---|---|---|---|---|
| Launch (0–3 mies.) | Zaindeksowanie i pierwsze kliknięcia | Kliknięcia CTA / mies. | ≥ 50 | Kwiecień–Czerwiec 2026 |
| Traction (3–6 mies.) | Widoczność lokalna | Pozycja w Google na "barber Knurów" | Top 3 | Wrzesień 2026 |
| Scale (6–12 mies.) | Strona jako główny kanał pozyskania | % nowych klientów z Google | ≥ 30% | Marzec 2027 |

---

## 6. MVP Scope (MoSCoW)

**Filozofia scope'u:** Strona musi w ciągu 10 sekund odpowiedzieć na pytanie użytkownika: "Czy chcę tutaj przyjść?" i umożliwić mu natychmiastową rezerwację.

### Must Have (launch blocker)

| Feature | Opis | Effort | Impact |
|---|---|---|---|
| Hero section | Pełnoekranowy wstęp z nazwą, hasłem i głównym CTA → Booksy | M | H |
| CTA → Booksy | Widoczny przycisk "Umów wizytę" min. w hero + sticky/footer | L | H |
| Galeria / Portfolio | Zdjęcia prac, wnętrza — parallax effect | M | H |
| O nas / Klimat | Krótki opis filozofii salonu, atmosfery | L | H |
| Sekcja Team | 2 barberów (zdjęcie + imię + krótki opis) + 1 placeholder | L | H |
| Lokalizacja i godziny | Adres, godziny otwarcia, opcjonalnie mapa | L | H |
| Social media links | Facebook + Instagram w footerze i/lub nawigacji | L | M |
| SEO on-page | Meta title/description, Open Graph, LocalBusiness schema, sitemap.xml | M | H |
| GA4 | Śledzenie zdarzeń, w tym kliknięcia CTA | L | H |
| Responsive design | Pełna responsywność mobile-first | M | H |

### Should Have (wysoka wartość; można bez nich uruchomić)

| Feature | Opis | Uzasadnienie |
|---|---|---|
| Mapa Google Maps | Embed iframe (nie wymaga backendu) | Pomaga użytkownikom mobilnym, dodaje lokalny sygnał SEO |
| Sekcja Usługi | Karty/lista kategorii bez cen | Odpowiada na pytanie "co oferujecie" bez ujawniania stawek |
| Animacje i micro-interactions | Hover efekty, scroll animations | Wzmacnia wrażenie "efektowności" |

### Could Have (backlog)

- Opinie / testimonials (np. osadzone z Google Maps lub ręcznie wpisane cytaty)
- Cookie consent banner (wymagany przy GA4 dla RODO)
- Dark/light mode toggle

### Won't Have (explicite wykluczone z v1)

| Feature | Uzasadnienie |
|---|---|
| Cennik | Decyzja właściciela — może ograniczać elastyczność wyceny |
| System rezerwacji on-site | Booksy pełni tę rolę; duplikowanie go generuje tech debt |
| Blog / content marketing | Poza zakresem dla landing page |
| Backend / CMS | Pure frontend — zero infrastruktury serwerowej |
| Multi-language | Lokalny rynek, tylko PL |

### Platformy przy launchu

| Platforma | Wymagana | Uwagi |
|---|---|---|
| Mobile (iOS/Android przeglądarki) | Tak | Priorytet — większość ruchu lokalnego to mobile |
| Desktop (Chrome, Firefox, Safari, Edge) | Tak | |
| Tablet | Tak | Obsłużony przez responsive design |

---

## 7. Functional Requirements

**Notacja:** **SHALL** = obowiązkowe; **SHOULD** = silnie zalecane; **MAY** = opcjonalne.

### 7.1 Nawigacja i struktura

| ID | Requirement | Priorytet |
|---|---|---|
| FR-001 | Strona SHALL być single-page (one-pager) z anchor navigation | Must Have |
| FR-002 | Nawigacja SHALL zawierać sticky header widoczny podczas scrollowania | Must Have |
| FR-003 | Przycisk CTA "Umów wizytę" SHALL być widoczny w nawigacji na desktop i jako floating button na mobile | Must Have |

### 7.2 Hero Section

| ID | Requirement | Priorytet |
|---|---|---|
| FR-010 | Hero SHALL wyświetlać nazwę salonu "Razor Sznyt", hasło reklamowe i główne CTA | Must Have |
| FR-011 | Hero SHALL ładować się w < 2.5s (LCP) mierzonym przez Lighthouse na symulowanym 4G | Must Have |
| FR-012 | CTA SHALL otwierać Booksy w nowej karcie (`target="_blank" rel="noopener"`) | Must Have |

### 7.3 Galeria

| ID | Requirement | Priorytet |
|---|---|---|
| FR-020 | Galeria SHALL wyświetlać minimum 6 zdjęć prac/wnętrza | Must Have |
| FR-021 | Galeria SHOULD implementować efekt parallax na scroll | Should Have |
| FR-022 | Zdjęcia SHALL być zoptymalizowane (format WebP, lazy loading, srcset) | Must Have |

### 7.4 Team

| ID | Requirement | Priorytet |
|---|---|---|
| FR-030 | Sekcja team SHALL wyświetlać karty dla 2 barberów + 1 placeholder "Wkrótce" | Must Have |
| FR-031 | Każda karta SHALL zawierać zdjęcie, imię i krótki opis (2–3 zdania) | Must Have |
| FR-032 | Placeholder karta MAY zawierać ikonę/ilustrację zamiast zdjęcia | Could Have |

### 7.5 Lokalizacja i kontakt

| ID | Requirement | Priorytet |
|---|---|---|
| FR-040 | Sekcja lokalizacji SHALL wyświetlać adres, godziny otwarcia i numer telefonu (jeśli publiczny) | Must Have |
| FR-041 | Strona SHOULD osadzać mapę Google Maps jako iframe (bez API key) | Should Have |
| FR-042 | Linki do Facebook i Instagram SHALL otwierać się w nowej karcie | Must Have |

### 7.6 SEO i analityka

| ID | Requirement | Priorytet |
|---|---|---|
| FR-050 | Strona SHALL zawierać `<title>` i `<meta description>` zoptymalizowane pod "barber Knurów" | Must Have |
| FR-051 | Strona SHALL implementować Open Graph tags dla poprawnego podglądu przy udostępnianiu w social media | Must Have |
| FR-052 | Strona SHALL zawierać structured data `LocalBusiness` (JSON-LD) z adresem, godzinami i kategorią | Must Have |
| FR-053 | Strona SHALL generować `sitemap.xml` | Must Have |
| FR-054 | Strona SHALL zawierać `robots.txt` zezwalający na indeksowanie | Must Have |
| FR-055 | GA4 SHALL śledzić zdarzenia kliknięć w każdy przycisk CTA → Booksy | Must Have |

### 7.7 Integracje

| Integracja | System | Kierunek | Protokół | Priorytet |
|---|---|---|---|---|
| Booksy CTA | booksy.com | Outbound (link) | HTML href | Must Have |
| Google Analytics 4 | GA4 | Outbound | JS snippet | Must Have |
| Google Maps | maps.google.com | Inbound embed | iframe | Should Have |
| Instagram | instagram.com | Outbound (link) | HTML href | Must Have |
| Facebook | facebook.com | Outbound (link) | HTML href | Must Have |

---

## 8. User Stories & Acceptance Criteria

### US-01: Pierwsza wizyta na stronie (onboarding)

> **As a** mężczyzna szukający barbera w Knurowie, **I want to** natychmiast zrozumieć czym jest Razor Sznyt i poczuć klimat miejsca, **so that** zdecyduję czy chcę zarezerwować wizytę.

**AC-FR-010-01**
- **Given:** Użytkownik otwiera stronę na smartfonie
- **When:** Strona się załaduje
- **Then:** W ciągu 3 sekund widoczne są: nazwa "Razor Sznyt", hasło i przycisk CTA bez konieczności scrollowania
- **Pass:** LCP ≤ 2.5s, CTA visible above the fold
- **Fail:** Hero nie mieści się w viewport lub ładuje > 4s

### US-02: Rezerwacja wizyty (core value flow)

> **As a** zdecydowany klient, **I want to** jednym kliknięciem przejść do Booksy i zarezerwować wizytę, **so that** nie muszę szukać danych kontaktowych ani dzwonić.

**AC-FR-012-01**
- **Given:** Użytkownik jest na dowolnej sekcji strony
- **When:** Klika przycisk "Umów wizytę"
- **Then:** Otwiera się nowa karta z profilem Razor Sznyt na Booksy
- **Pass:** Booksy otwiera się w nowej karcie, strona Razor Sznyt pozostaje otwarta
- **Fail:** Booksy otwiera się w tej samej karcie / link prowadzi do złego URL

**AC-GA-055-01**
- **Given:** GA4 jest skonfigurowany
- **When:** Użytkownik kliknie przycisk CTA
- **Then:** W GA4 rejestrowane jest zdarzenie `booksy_cta_click` z parametrem `location` (hero / nav / footer)
- **Pass:** Zdarzenie pojawia się w GA4 DebugView w ciągu 30s
- **Fail:** Brak zdarzenia lub błędny parametr

### US-03: Ocena zespołu

> **As a** potencjalny klient, **I want to** zobaczyć kto mnie ostrzyże, **so that** poczuję się pewniej przed pierwszą wizytą.

**AC-FR-031-01**
- **Given:** Użytkownik scrolluje do sekcji Team
- **When:** Sekcja się wyświetli
- **Then:** Widoczne są 2 karty barberów (zdjęcie + imię + opis) oraz 1 placeholder "Wkrótce"
- **Pass:** Wszystkie 3 karty renderują się poprawnie na mobile i desktop
- **Fail:** Brakuje którejkolwiek karty lub zdjęcie się nie ładuje

### US-04: Znalezienie adresu (lokalizacja)

> **As a** klient który chce przyjść po raz pierwszy, **I want to** szybko znaleźć adres i godziny otwarcia, **so that** zaplanowuję dojazd.

**AC-FR-040-01**
- **Given:** Użytkownik jest w sekcji Lokalizacja
- **When:** Scrolluje do niej lub klika link w nawigacji
- **Then:** Widoczny jest adres (ulica, miasto), godziny otwarcia (każdy dzień tygodnia) i mapa
- **Pass:** Dane są czytelne na mobile, adres jest klikalny (otwiera Google Maps)
- **Fail:** Godziny nie są aktualne lub adres nie jest klikalny

---

## 9. Non-Functional Requirements

### 9.1 Performance & Scalability

| ID | Requirement | Metryka | Próg | Priorytet |
|---|---|---|---|---|
| NFR-001 | Czas ładowania strony (LCP) | Lighthouse / PageSpeed | ≤ 2.5s (4G sim.) | Must Have |
| NFR-002 | Lighthouse Performance Score | Lighthouse audit | ≥ 90 | Must Have |
| NFR-003 | Total page weight | Network tab | ≤ 1.5 MB (przed cache) | Must Have |
| NFR-004 | Dostępność (uptime) | CDN provider SLA | ≥ 99.9% | Must Have |

### 9.2 Security

| ID | Requirement | Standard | Priorytet |
|---|---|---|---|
| NFR-010 | Strona SHALL być serwowana wyłącznie przez HTTPS | OWASP | Must Have |
| NFR-011 | Zewnętrzne linki SHALL używać `rel="noopener noreferrer"` | OWASP | Must Have |
| NFR-012 | Brak formularzy = brak powierzchni ataku XSS/injection [INFERRED] | — | Must Have |

### 9.3 Compliance & Regulatory

| ID | Requirement | Regulacja | Priorytet |
|---|---|---|---|
| NFR-020 | GA4 wymaga cookie consent bannera zgodnego z RODO przed uruchomieniem śledzenia | RODO / ePrivacy | Must Have |
| NFR-021 | Strona SHALL zawierać link do Polityki Prywatności (minimalna) | RODO Art. 13 | Must Have |

### 9.4 Accessibility

| ID | Requirement | Standard | Priorytet |
|---|---|---|---|
| NFR-030 | Kontrast tekstu SHALL spełniać WCAG 2.1 AA (min. 4.5:1) | WCAG 2.1 SC 1.4.3 | Must Have |
| NFR-031 | Wszystkie interaktywne elementy SHALL być dostępne klawiaturą | WCAG 2.1 SC 2.1 | Must Have |
| NFR-032 | Wszystkie zdjęcia SHALL mieć atrybut `alt` | WCAG 2.1 SC 1.1.1 | Must Have |

### 9.5 SEO — Technical

| ID | Requirement | Priorytet |
|---|---|---|
| NFR-040 | Strona SHALL mieć Lighthouse SEO Score ≥ 95 | Must Have |
| NFR-041 | Strona SHALL ładować się bez JavaScript (SSG / static HTML) dla pełnej indeksowalności | Must Have |
| NFR-042 | Canonical URL SHALL być zdefiniowany | Must Have |

### 9.6 Data & Privacy

| Data Entity | Klasyfikacja | PII? | Retencja | Regulacja |
|---|---|---|---|---|
| GA4 analytics events | Confidential | Tak (IP anonymized) | 14 miesięcy (GA4 default) | RODO |
| Treść strony (tekst, zdjęcia) | Public | Nie | N/A | — |

---

## 10. Go-to-Market Considerations

### 10.1 Launch Motion

**Rekomendacja: Local SEO-led + Social amplification.**

Natychmiast po launchu: (1) zaktualizować Google Business Profile z linkiem do strony, (2) posty na Instagram i Facebook z linkiem, (3) zaktualizować link w bio na obu profilach. Ruch organiczny zacznie płynąć po 4–8 tygodniach od indeksacji.

### 10.2 Acquisition Channels

| Kanał | Uzasadnienie | Oczekiwana efektywność |
|---|---|---|
| Google Organic (Local SEO) | "Barber Knurów" — mała konkurencja, duży intent | Wysoka |
| Instagram / Facebook (organic) | Istniejąca baza followersów | Średnia |
| Google Maps / Business Profile | Kluczowy dla mobile search "barber blisko mnie" | Wysoka |
| WhatsApp/SMS od stałych klientów | Barberzy mogą wysyłać link do strony stałym klientom z prośbą o share | Średnia |

### 10.3 Tech Stack & Hosting

**Tech Stack: Astro + Tailwind CSS**
- Astro generuje czysty HTML (zero JS domyślnie) → najlepsze Core Web Vitals
- Tailwind CSS → nowoczesny design bez narzutu CSS

**Hosting: Netlify Free Tier**
- Automatyczne HTTPS, globalny CDN
- Deploy z GitHub w 1 kliknięcie
- 100GB bandwidth/mies. gratis

**Domain: razorsznyt.pl**
- Krótka, brandowa, łatwa do zapamiętania
- Rejestracja ~50 zł/rok przez domeny.pl lub OVH

### 10.4 Launch Sequence

| Faza | Kluczowe działania | Exit Criteria |
|---|---|---|
| Phase 1: Build | Implementacja, zdjęcia, treści | Lighthouse ≥ 90, wszystkie FR spełnione |
| Phase 2: Launch | Deploy na Netlify, domena, GSC, GA4 | Strona live na domenie, zaindeksowana |
| Phase 3: Amplification | Posty social media, link w bio, Google reviews | 50 kliknięć CTA w pierwszym miesiącu |

---

## 11. Risks, Assumptions & Constraints

### 11.1 Trzy najryzywniejsze założenia

| Założenie | Dlaczego ryzykowne | Test walidacyjny |
|---|---|---|
| Użytkownicy konwertują przez Booksy po wejściu na stronę | Strona może generować ruch, ale Booksy może być barierą | Sprawdź GA4 funnel: wejście → klik CTA → powrót bez rezerwacji |
| Zdjęcia dostarczone przez klienta są wystarczające jakościowo | Słabe zdjęcia zabiją wrażenie nawet przy świetnym designie | Ocena zdjęć przed startem — jeśli słabe, rekomendacja sesji fotograficznej |
| "Barber Knurów" ma wystarczający volume wyszukiwań | Miasto małe — może być < 100 wyszukiwań/mies. | Google Keyword Planner przed implementacją SEO |

### 11.2 Risk Register

| ID | Ryzyko | Prawdopod. | Impact | Score | Mitygacja |
|---|---|---|---|---|---|
| R-001 | Zdjęcia złej jakości — strona wygląda tanio | Średnie | Wysoki | 6 | Ocena zdjęć na wstępie; rekomendacja sesji foto |
| R-002 | Google nie indeksuje strony przez 2–3 mies. | Niskie | Wysoki | 4 | GSC submit URL; prawidłowy sitemap |
| R-003 | Konkurencja zrobi lepszą stronę | Niskie | Średni | 3 | Early launch advantage; jakość trudna do skopiowania szybko |
| R-004 | Booksy zmienia URL profilu | Niskie | Wysoki | 4 | Sprawdzaj co kwartał; update jest prosty |
| R-005 | Brak cookie bannera → kara RODO | Niskie | Wysoki | 5 | Wdrożyć banner przy GA4 (CookieYes free tier) |
| R-006 | Strona wolna przez nieskompresowane zdjęcia | Wysokie | Wysoki | 9 | **OBOWIĄZKOWA** optymalizacja: WebP, max 200KB/zdjęcie, lazy load |

### 11.3 Hard Constraints

- Pure frontend — zero backendu, zero serwera aplikacyjnego
- Implementacja solowa (jeden developer)
- Brak budżetu na płatne reklamy (SEO organic only)
- Zdjęcia dostarczone przez klienta (ograniczona kontrola jakości)

---

## 12. Dependencies

| ID | Dependency | Typ | Owner | Status |
|---|---|---|---|---|
| DEP-001 | Zdjęcia wysokiej jakości (salon, prace, barberzy) | Zewnętrzne | Właściciel salonu | Pending |
| DEP-002 | Teksty: hasło, opisy barberów, opis "O nas" | Zewnętrzne | Właściciel + Developer | Pending |
| DEP-003 | Rejestracja domeny (razorsznyt.pl) | Zewnętrzne | Developer/Właściciel | Pending |
| DEP-004 | Konto Netlify/Vercel | Techniczne | Developer | Pending |
| DEP-005 | GA4 Property + Measurement ID | Techniczne | Developer | Pending |
| DEP-006 | Potwierdzenie adresu i godzin otwarcia | Zewnętrzne | Właściciel salonu | Pending |

---

## 13. Timeline & Milestones

| Milestone | Opis | Exit Criteria | Szacowany czas |
|---|---|---|---|
| M0: Kickoff | PRD zatwierdzony, tech stack wybrany | Ten dokument zaakceptowany | Gotowe |
| M1: Content gathering | Zdjęcia, teksty, dane salonu zebrane | Wszystkie DEP-001 do DEP-006 resolved | 3–7 dni od M0 |
| M2: Design & Build | Implementacja Astro + Tailwind, wszystkie sekcje | Lighthouse ≥ 90, wszystkie FR implemented | 5–10 dni od M1 |
| M3: Launch | Deploy, domena, GSC, GA4 | Strona live na domenie, zaindeksowana | 1–2 dni od M2 |
| M4: Post-launch (30 dni) | Monitoring GA4, korekty SEO | 50 kliknięć CTA, brak błędów | 30 dni od M3 |

### 13.2 Out of Scope dla v1

- Cennik online
- System opinii on-site
- Blog / artykuły
- Wersja angielska
- Formularz kontaktowy

---

## 14. Open Questions & Decisions Log

| ID | Pytanie | Status |
|---|---|---|
| OQ-001 | Czy mapa Google Maps ma być wdrożona w v1? | **Resolved: NIE — odłożona na v2** |
| OQ-002 | Czy na stronie ma być numer telefonu? | **Resolved: TAK — 572 216 680** |
| OQ-003 | Adres i godziny otwarcia | **Resolved: Batorego 4, 44-194 Knurów. Pon 12–20, Wt–Pt 10–20, Sob 9–17, Nd zamknięte** |
| OQ-004 | Tagline | **Resolved: "Precyzja w każdym cięciu."** |
| OQ-005 | Czy zdjęcia wymagają sesji fotograficznej, czy istniejące wystarczą? | Open — placeholdery na start |
| OQ-006 | Rejestracja domeny — kto płaci, kto rejestruje? | Open |

---

## 15. Appendix

### A. Tech Stack Recommendation

**Astro + Tailwind CSS** — najlepsza opcja dla pure-frontend landing page z maksymalnymi wynikami Lighthouse i SEO.

| Kryterium | Astro | Next.js | Pure HTML/CSS |
|---|---|---|---|
| Szybkość (Core Web Vitals) | ★★★★★ | ★★★★ | ★★★★★ |
| SEO out-of-the-box | ★★★★★ | ★★★★ | ★★★★★ |
| Developer experience | ★★★★ | ★★★★★ | ★★★ |
| Nadmiarowość dla landing page | Idealne | Za duże | OK |

### B. Glossary

| Term | Definicja |
|---|---|
| CTA | Call-to-Action — przycisk/link zachęcający do działania |
| LCP | Largest Contentful Paint — metryka Google mierząca czas ładowania |
| Core Web Vitals | Zestaw metryk Google wpływających na ranking SEO |
| LocalBusiness schema | Dane strukturalne JSON-LD informujące Google o lokalizacji firmy |
| GSC | Google Search Console |
| GA4 | Google Analytics 4 |
| One-pager | Strona z jedną stroną z sekcjami przewijalnymi |
| Parallax | Efekt wizualny gdzie tło porusza się wolniej niż foreground |
| WebP | Nowoczesny format obrazów — ~30% lżejszy niż JPEG |

### C. Key Links

| Resource | URL |
|---|---|
| Booksy profile | https://booksy.com/pl-pl/253466_razor-sznyt_barber-shop_12841_knurow#ba_s=seo |
| Instagram | https://www.instagram.com/razor_sznyt/ |
| Facebook | https://www.facebook.com/p/Razor-Sznyt-61563316386455/ |

### D. Revision History

| Version | Data | Autor | Opis |
|---|---|---|---|
| 0.1 | 2026-03-30 | AI-assisted discovery | Initial draft |
