# Projekt összefoglaló

Ez a weboldal egy hálózati témájú tanulóoldal, amelyet 3 fős csapat készített. A főoldalról két tanulnivaló téma (OSI modell és DHCP), valamint a csapattagok bemutatkozó oldalai érhetők el.

## Az oldalak felépítése

- **Üdvözlő oldal:** köszöntő szöveg, linkek a két témához és a három csapattaghoz.
- **DHCP oldal:** rövid ismertető a DHCP-ről és egy ábra a folyamatáról.
- **OSI modell oldal:** rövid ismertető az OSI modellről és az OSI–TCP/IP összehasonlító ábra.
- **Bemutatkozó oldalak:** minden tagnak egy (név, hobby, kedvenc sport, kedvenc állat képpel).

## Témák röviden

### DHCP (Dynamic Host Configuration Protocol)

A DHCP automatikusan kiosztja a hálózati beállításokat (IP-cím, alhálózati maszk, alapértelmezett átjáró, DNS-szerver) a hálózatra csatlakozó eszközöknek, így nem kell kézzel beállítani őket. A kiosztás időben korlátozott, ezt bérleti időnek (lease) hívjuk. A folyamat négy lépésből áll:

1. **Discover:** a kliens szórással keres egy DHCP-szervert.
2. **Offer:** a szerver felajánl egy IP-címet.
3. **Request:** a kliens kéri a felajánlott címet.
4. **Acknowledge (Ack):** a szerver jóváhagyja, és a kliens használhatja a címet.

### OSI modell (Open Systems Interconnection)

Az OSI modell a hálózati kommunikációt 7 rétegre bontja, hogy a különböző gyártók eszközei egymással együtt tudjanak működni. A rétegek felülről lefelé:

| # | Réteg | Feladata röviden |
|---|-------|------------------|
| 7 | Alkalmazási | a felhasználói programok hálózati szolgáltatásai (HTTP, DNS) |
| 6 | Megjelenítési | adatformátum, titkosítás, tömörítés |
| 5 | Munkamenet | kapcsolatok felépítése és fenntartása |
| 4 | Szállítási | megbízható adatátvitel (TCP, UDP) |
| 3 | Hálózati | útválasztás, IP-címzés |
| 2 | Adatkapcsolati | keretek, MAC-címzés |
| 1 | Fizikai | bitek átvitele a fizikai közegen |

A **TCP/IP modell** ennek egyszerűsített változata, 4 réteggel: hálózati hozzáférés, internet, szállítási és alkalmazási réteg.

## Csapat

| Tag | Feladat |
|-----|---------|
| Kis Hunor | főoldal + bemutatkozó oldal |
| Sátori Péter | DHCP oldal + bemutatkozó oldal |
| Vereczkei Kristóf | OSI modell oldal + bemutatkozó oldal |