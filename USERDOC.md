# Uživatelská dokumentace pro VRMOD

Modul VRMOD slouží k zobrazení a zpřístupnění multimediálního obsahu. VRMOD je přístupný přes odkaz v horní liště aplikace [EMOD](https://github.com/iimcz/emod/blob/master/frontend/lm-naki/doc/DOC.md), jejíž instalace je podmínkou pro běh modulu VRMOD. 

VRMOD umožňuje zobrazovat multimediální obsah dokumentující jednotlivá představení ve struktuře definované editorem v aplikaci EMOD a ve formě webové stránky. Dále umožňuje zpřístupnit rekonstukce představení za pomoci interaktivních VR aplikací na PC a na mobilním zařízení. 

Samotný VRMOD nemá žádné uživatelem konfigurovatelné možnosti. Obsah prezentace je určen údaji a jejich metadaty uloženými v databázi aplikace EMOD. Zde, v aplikaci EMOD, uživatel může nastavovat tzv. metadatové klíče k jednotlivým digitálním objektům a ovlivnit tak způsob jejich zobrazování.

Je tedy možné definovat několik metadatových klíčů, které, pokud jsou nastaveny, mohou ovlivnit zobrazovaný obsah. Následující část popisuje, jaké datové struktury v EMOD jsou potřebné a které metadatové klíče jsou použity pro nastavení zobrazování obsahu.



## Zobrazený obsah
VRMOD zobrazuje **Datové Sady** (_Data Set - DS_ je hierarchický strom dat představující jedno číslo nebo představení), jehož data jsou uložena v databázi EMOD (viz také [dokumentace EMOD](https://github.com/iimcz/emod/blob/master/frontend/lm-naki/doc/DOC.md#struktura-ulo%C5%BEen%C3%BDch-dat)). VRMOD zobrazuje pro každou datovou sadu všechny **Skupiny Digitálních Objektů** (_Group of Digital Items - GDI_ je skupina fotografií nebo videí souvisejících s podobným tématem), které jsou sestaveny z tzv. **Digitálních Objektů** (_Digital Item - DI_ je každý mediální soubor představující obrázek, video, sled pohybových dat atd.). Digitální objekty se poté zobrazují způsobem podle typu (text, video, zvuk, obrázek, atd.). 

## Speciální metadata
K ovládání zobrazeného obsahu ve VRMOD lze použít několik metadatových klíčů. Každý klíč má název a hodnotu. Hodnotou může být text nebo číslo, případně jedna z hodnot 0, 1 označujících významy “nenastaveno”, “nastaveno” (viz také [dokumentace EMOD](https://github.com/iimcz/emod/blob/master/frontend/lm-naki/doc/DOC.md#ruční-zadávání-metadat)).


### Digitální objekty
U každého digitálního objektu (text, video, zvuk, obrázek, atd.) lze nastavit následující klíče.

Speciální klíče:

- **public** - Za zobrazitelné se považují pouze položky, které mají definovaný klíč export nastavený na hodnotu 1.
- **result** - Položky, které mají tento klíč definovaný a nastavený na hodnotu 1, jsou považovány za hlavní výsledky projektu a zobrazeny nahoře, mimo jeho skupiny. Jsou také zobrazeny ve svých skupinách.

Obecné klíče, které se zobrazují pro každou položku, jsou-li nastaveny:

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

Speciální klíče:

- **order** - pořadí - pokud je definováno, používá se pro řazení skupin digitálních objektů na webu.

Společné klíče:

- **description** - název představení

### Datová Sada
Název Datové Sady je určen jako obsah klíče **description** zřetězeného s obsahem klíče **part_name**.

Stejné klíče jako u digitálních objektů se zobrazí v horní části prezentační stránky pro Datovou Sadu.

## LaternaVR

Součástí prezentačního rozhraní VRMOD je prezentace rekonstruovaných částí představení v prostředí virtuální reality. LaternaVR umožňuje dvě formy prezentace: varianta pro PC a varianta pro mobilní telefon s OS Android. Obě varianty jsou dostupné v sekci LaternaVR přes stejnojmenný odkaz v horní liště modulu VRMOD. Mobilní aplikace LaternaVR je pak dostupná přes odkaz na službu GooglePlay v sekci LaternaVR. V této sekci jsou dostupné i odkazy ke stažení spustitelných PC verzí pro jednotlivá představení.

Po spuštení PC verze se zobrazí VR model scény s hledištěm a na jevišti se spustí příslušné představení. Uživatel si scénu může procházet na monitoru pomocí šipek na klávesnici nebo pomocí náhlavní VR soupravy příslušných ovladačů. V současnosti je tato verze přeložena pro soupravu HTC VIVE. Mobilní verze nabídne uživateli seznam představení a po výběru některého z nich se spustí příslušná prezentace. Uživatel si může vybrat zda scénu bude procházet v náhledu s jedním pohledem (podobně jako u PC verze na monitoru) nebo ve stereoskopické verzi pro brýle - tzv. CARDBOARD, které představují zjednodušenou variantu PC verze s náhlavní VR soupravou. Změna pozice uživatele ve scéně se pak realizuje zaměřením kurzoru, který je vidět v pohledu, na cílové místo po dobu několika sekund. Aplikace po té změní uživatelovu pozici.

Pozn. Veškerý obsah prezentovaný a zpřístupňovaný pomocí aplikace EMOD, modulu VRMOD nebo aplikací LaternaVR podléhá licenčním podmínkám, které určuje provozovatel aplikace. Proto pro přístup k obsahu je vyžadována autentikace.

