# Uživatelská dokumentace pro VRMOD

## Obsah
1. [Výběr zobrazeného obsahu](#výběr-zobrazeného-obsahu)
2. [Řízení zobrazování pomocí metadatových klíčů](#řízení-zobrazování-pomocí-metadatových-klíčů)
    1. [Digitální objekty](#digitální-objekty)
        1. [Speciální klíče](#speciální-klíče)
        2. [Obecné klíče](#obecné-klíče)
    2. [Skupina Digitálních Objektů](#skupina-Digitálních-objektů)
        1. [Speciální klíče](#speciální-klíče)
        2. [Obecné klíče](#obecné-klíče)
    3. [Datová Sada](#datová-sada)
3. [Laterna VR](#laterna-vr)
    1. [Verze pro PC](#verze-pro-pc)
    2. [Mobilní verze](#mobilní-verze)

***

Modul VRMOD slouží k zobrazení a zpřístupnění multimediálního obsahu spravovan0ho prostřednictvím aplikace [EMOD](https://github.com/iimcz/emod/blob/master/frontend/lm-naki/doc/DOC.md) (jejíž instalace je podmínkou pro běh modulu VRMOD). Z této aplikace je VRMOD přístupný přes odkaz v horní liště. 

VRMOD umožňuje zobrazovat multimediální obsah dokumentující jednotlivá představení ve struktuře definované editorem v aplikaci EMOD ve formě webové stránky. Dále umožňuje zpřístupnit rekonstukce představení za pomoci interaktivních VR aplikací na PC a na mobilním zařízení. 

![VRMOD Screenshot][VRMODSC1]

Samotný VRMOD nemá žádné uživatelem konfigurovatelné možnosti. Obsah prezentace je určen údaji a jejich metadaty uloženými v databázi aplikace EMOD. Zde, v aplikaci EMOD, uživatel může nastavovat tzv. metadatové klíče k jednotlivým digitálním objektům a ovlivnit tak způsob jejich zobrazování.

Je tedy možné definovat několik metadatových klíčů, které, pokud jsou nastaveny, mohou ovlivnit zobrazovaný obsah. Následující část popisuje, jaké datové struktury v EMOD jsou potřebné a které metadatové klíče jsou použity pro nastavení zobrazování obsahu.

## Výběr zobrazeného obsahu
VRMOD zobrazuje **Datové Sady** (_Data Set - DS_ je hierarchický strom dat představující jedno číslo nebo představení), jehož data jsou uložena v databázi EMOD (viz také [dokumentace EMOD](https://github.com/iimcz/emod/blob/master/frontend/lm-naki/doc/DOC.md#struktura-ulo%C5%BEen%C3%BDch-dat)). VRMOD zobrazuje pro každou datovou sadu všechny **Skupiny Digitálních Objektů** (_Group of Digital Items - GDI_ je skupina fotografií nebo videí souvisejících s podobným tématem), které jsou sestaveny z tzv. **Digitálních Objektů** (_Digital Item - DI_ je každý mediální soubor představující obrázek, video, sled pohybových dat atd.). Digitální objekty se poté zobrazují způsobem podle typu (text, video, zvuk, obrázek, atd.). 

## Řízení zobrazování pomocí metadatových klíčů
K ovládání zobrazeného obsahu ve VRMOD lze použít několik metadatových klíčů. Každý klíč má název a hodnotu. Hodnotou může být text nebo číslo, případně jedna z hodnot 0, 1 označujících významy “nenastaveno”, “nastaveno” (viz také [dokumentace EMOD](https://github.com/iimcz/emod/blob/master/frontend/lm-naki/doc/DOC.md#ruční-zadávání-metadat)).
Následuje pois klíčů, které ovlivňují zobrazení na úrovni Digitálních objektů a Skupin digitálních objektů.

### Digitální objekty
U každého digitálního objektu (text, video, zvuk, obrázek, atd.) lze nastavit následující klíče.

#### Speciální klíče

- **public** - Za zobrazitelné se považují pouze položky, které mají definovaný klíč export nastavený na hodnotu 1. 
Nastavit hodnotu klíče **public**, a tím zpřístunit digitální objekt v rámci webové prezentace VRMOD, lze i zakliknutím checkboxu na levé straně položky zobrazující tento digitální objekt v seznamu DI v aplikaci EMOD. V EMODu menu vlevo nahoře - položka _Digital Items_ - nalevo příslušné položky v seznamu - pravý checkbox.
- **result** - Položky, které mají tento klíč definovaný a nastavený na hodnotu 1, jsou považovány za hlavní výsledky projektu a zobrazeny nahoře, mimo jeho skupiny. Jsou také zobrazeny ve svých skupinách.

#### Obecné klíče

Jedná se o klíče, které se zobrazují pro každou položku, jsou-li nastaveny:

- **description** - název představení
- **topic** - popis tématu představení
- **part_name** - název zdokumentované části představení
- **name** - seznam autorů a jejich rolí (Jan Novák, choreograf; Jana Novák, režisér)
- **subject** - seznam účinkujících (Jan Novák, tanečník; Jana Novák, tanečník)
- **date** - datum realizace
- **abstract** - krátký text komentující obsah dat
- **place** - místo realizace
- **publisher** - instituce jako realizátor představení
- **length** - délka představení


### Skupina Digitálních Objektů
Vytvořená skupina digitálních objektů může mít definované následující metadatové klíče.

#### Speciální klíče

- **order** - pořadí - pokud je definováno, používá se pro řazení skupin digitálních objektů na webu.

#### Obecné klíče

- **description** - název představení

### Datová Sada
Název Datové Sady je vytvořen jako obsah klíče **description** zřetězeného s obsahem klíče **part_name**.
Stejné klíče jako u digitálních objektů se zobrazí v horní části prezentační stránky pro Datovou Sadu.

## Laterna VR

Součástí prezentačního rozhraní VRMOD je prezentace rekonstruovaných částí představení v prostředí virtuální reality. LaternaVR umožňuje dvě formy prezentace: varianta pro PC a varianta pro mobilní telefon s OS Android. Obě varianty jsou dostupné v sekci LaternaVR přes stejnojmenný odkaz v horní liště modulu VRMOD. Mobilní aplikace LaternaVR je pak dostupná přes odkaz na službu GooglePlay v sekci LaternaVR. V této sekci jsou dostupné i odkazy ke stažení spustitelných PC verzí pro jednotlivá představení.

### Verze pro PC

Po spuštení PC verze se zobrazí VR model scény s hledištěm a na jevišti se spustí příslušné představení. Uživatel si scénu může procházet na monitoru pomocí šipek na klávesnici nebo pomocí náhlavní VR soupravy příslušných ovladačů. V současnosti je tato verze přeložena pro soupravu HTC VIVE. 

### Mobilní verze 

Mobilní aplikaci LaternaVR lze vyhledat pomocí služby GooglePlay na mobilním zařízení s operačním systémem Android. Vzhledem k nadstandardním požadavkům na výkon a paměťovým nárokům je aplikace zobrazena jen uživatelům s odpovídajícím zařízením. 

Po spuštění je uživatel vyzván k zadání hesla a následně jsou mu zpřístupněny rekonstrukce jednotlivých tanečních čísel. Data těchto představení si aplikace stahuje na telefon až po jejím zvolení. Pro tato data je potřeba úložiště o velikosti přibližně 200MB. Rychlost spouštění představení závisí na konkrétním připojení k internetu.

Po výběru představení je uživatel vyzván, aby potvrdil stažení dat k představení. Následně po stažení, které může trvat několik minut, je zobrazeno tlačítko spustit a volba "Virtuální realita". Nezatržením této volby je zvolen celoobrazovkový režim prezentace a naopak zatržením je zvolen stereoskopický režim pro CARDBOARD. Po spuštění prezentace má uživatel k dispozici ovládání, které se pro oba režimy liší. V celoobrazovkovém režimu se představení spustí automaticky a zobrazí se dva ovládací prvky ve funkci joystiků. Levý pro pohyb vpřed, vzad, vlevo a vpravo. Pravý pro pohyb nahoru, dolů, otáčení vlevo a vpravo. Představení lze opustit standardním tlačítkem "zpět" mobilního zařízení.

V režimu CARDBOARD má uživatel k dispozici malý kurzor (malý bílý bod) jehož nasměrováním a podržením na místě po dobu cca 1s se spustí akce. Pro spuštění představení je potřeba kurzor namířit na ikonu klapky umístěnou v nadhledu a podržením kurzoru na místě. Namířením na ikonu běžící postavy, která je umístěna rovněž v nadhledu lze zapnout režim teleportace. Kurzor se promění v malou ikonu postavy a jejím namířením na příslušné místo ve scéně a podržením je uživatel přemístěn na toto místo. Představení lze opustit standardním tlačítkem "zpět" mobilního zařízení.


Pozn. Veškerý obsah prezentovaný a zpřístupňovaný pomocí aplikace EMOD, modulu VRMOD nebo aplikací LaternaVR podléhá licenčním podmínkám, které určuje provozovatel aplikace. Proto pro přístup k obsahu je vyžadována autentikace.

***
© 2019 ČVUT FEL, Katedra počítačové grafiky a interakce


[VRMODSC1]: /vrmod/src/assets/vrmod_screeshot.jpg
