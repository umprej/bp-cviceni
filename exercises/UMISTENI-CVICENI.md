# Umístění cvičení v textu kapitol

Tento dokument popisuje, kam do textu jednotlivých kapitol vložit interaktivní cvičení jako `<iframe>`. Každé cvičení je samostatný HTML soubor ve složce `exercises/`.

## Formát zápisu

```
[CVIČENÍ: exXX-nazev.html]
```

Znamená: "Zde vlož iframe s daným souborem." V Moodle to bude:
```html
<iframe src="exercises/exXX-nazev.html" style="width:100%; border:none;" scrolling="no"></iframe>
```

Všechny soubory posílají `postMessage({ type: 'iframeResize', height })` pro automatické přizpůsobení výšky.

---

## Kapitola 1: Základní pojmy

### Po sekci "Operace s množinami" (za příkladem M ∩ N, M ∪ N, M − N)

> Příklad: Pro M = {1, 2, 3} a N = {2, 3, 4}: M ∩ N = {2, 3} ...

**[CVIČENÍ: ex01-mnozinove-operace.html]**
*Drag & drop: přiřadit M ∩ N, M ∪ N, M \ N ke správným výsledkům.*

---

### Po sekci "Potenční množina" (za příkladem P(M))

> Příklad: Pro M = {a, b} je P(M) = {∅, {a}, {b}, {a, b}} – tedy 4 podmnožiny.

**[CVIČENÍ: ex03-vennuv-diagram.html]**
*Interaktivní Vennův diagram — kliknutím na oblasti diagramu student vidí, které prvky patří kam. Propojuje operace s množinami s vizuální reprezentací.*

---

### Po sekci "Stromy" (za popisem kořenů, potomků, listů, hloubky, výšky)

> Stromy uvidíme jako derivační stromy ... a stavové stromy ...

**[CVIČENÍ: ex02-grafy-stromy-kviz.html]**
*Interaktivní stavba grafů — student klikáním staví uzly a hrany, systém v reálném čase analyzuje vlastnosti grafu (souvislost, cykly, strom) a plní konkrétní úkoly (K₃, strom se 4 uzly apod.).*

---

## Kapitola 2: Konečné automaty

### Po sekci "Jak automat pracuje" + "Formální definice" + "Konfigurace automatu" (za příkladem výpočtu nad slovem "ab")

> (q₀, ab) ⊢ (q₁, b) ⊢ (q₂, ε) ... Skončili jsme v q₂, ... slovo „ab" je přijato.

**[CVIČENÍ: ex04-simulator-dka.html]**
*Simulátor DKA — student si krokuje výpočet automatu přijímajícího slova s podřetězcem "ab".*

---

### Po sekci "Semafor" (praktický příklad automatu)

> Semafor je jeden z nejjednodušších automatů. ... Vždy je právě v jednom stavu a přechází jednoznačně.

**[CVIČENÍ: ex14-semafor.html]**
*Semafor jako konečný automat — student kliká na "Časový impuls" a vidí přechody zelená→žlutá→červená→zelená.*

---

### Po sekci "DKA vs. NKA" (za vysvětlením rozdílu mezi DKA a NKA)

> Klíčový fakt: DKA a NKA jsou stejně silné. ... Každý NKA se dá převést na DKA.

**[CVIČENÍ: ex05-dka-vs-nka.html]**
*NKA — vizualizace paralelních výpočtů: student zadá slovo a krokuje výpočet NKA, kde se větve rozdělují při nedeterminismu, umírají při uvíznutí, a slovo je přijato pokud alespoň jedna větev skončí v koncovém stavu.*

---

### Po sekci "Determinizace" (za příkladem podmnožinové konstrukce)

> Determinizace: ... Koncový stav DKA: {q₂}. Výsledný DKA přijímá stejný jazyk jako původní NKA.

**[CVIČENÍ: ex06-determinizace.html]**
*Krokování determinizace NKA na DKA pomocí podmnožinové konstrukce.*

---

### Po sekci "Automaty s výstupem: Mealy a Moore" (za srovnávací tabulkou)

> Oba typy jsou vzájemně převoditelné.

**[CVIČENÍ: ex07-mealy-moore.html]**
*Mealy/Moore — simulátor výstupu: student kliká na vstupní symboly (0/1) a vidí, jak detektor parity produkuje výstup krok za krokem, s přepínáním mezi Mealyho (výstup na přechodech) a Moorovým (výstup ze stavů) pohledem a porovnáním délek výstupů.*

---

### Po sekci "Jak zapisovat automaty — Tabulka přechodů" (za příkladem tabulky)

> Přehledná tabulka, kde řádky jsou stavy a sloupce jsou symboly...

**[CVIČENÍ: ex11-tabulka-prechodu.html]**
*Student sám vyplní tabulku přechodů pro DKA z cvičení 4. (Opakování — cvičení záměrně znovu použito v kontextu tabulkového zápisu.)*

---

## Kapitola 3: Formální jazyky a gramatiky

### Po sekci "Regulární výrazy" (za tabulkou příkladů výrazů)

> Regulární výrazy = konečné automaty ... Ke každému výrazu existuje automat a naopak.

**[CVIČENÍ: ex08-regex-lab.html]**
*Laboratoř regulárních výrazů — student zadá formální regex, testuje slova, vidí generovaná slova délky 0–5.*

---

### Po sekci "Derivace — jak gramatika generuje slovo" (za příkladem derivace S ⇒ aA ⇒ abS ...)

> Tato gramatika generuje jazyk {(ab)ⁿ | n ≥ 0} = {ε, ab, abab, ababab, …}

**[CVIČENÍ: ex10-derivace.html]**
*Krokování derivace v regulární gramatice + kvíz na rozpoznání generovaného jazyka.*

---

### Po sekci "Chomského klasifikace gramatik" (za přehledovou tabulkou Typ 3/2/1/0)

> Tvoří hierarchii: Typ 3 ⊂ Typ 2 ⊂ Typ 1 ⊂ Typ 0.

**[CVIČENÍ: ex09-chomsky-hierarchie.html]**
*Seřazení typů gramatik přetažením od nejrestriktivnější k nejobecnější.*

---

### Po sekci "Klasifikace jazyků" (za příklady regulárních, bezkontextových, kontextových jazyků)

> Rekurzivně spočetné jazyky (typ 0) – nejobecnější třída.

**[CVIČENÍ: ex13-klasifikace-pravidel.html]**
*Pískoviště gramatických pravidel — student píše vlastní přepisovací pravidla a systém je automaticky klasifikuje v Chomského hierarchii s vysvětlením, proč pravidlo patří do daného typu. Vizuální přehled distribuce pravidel.*

---

## Kapitola 4: Převody mezi KA, RG, RV

### Po sekci "Převod regulární gramatiky na konečný automat" (za příkladem převodu)

> Převod na NKA: ... tabulka přechodů ...

**[CVIČENÍ: ex11-tabulka-prechodu.html]**
*Sestavení tabulky přechodů — praktické procvičení převodu. (Opakované použití je záměrné — student si upevní dovednost v novém kontextu.)*

---

### Po sekci "Převod regulárního výrazu na konečný automat" (za Thompsonovou konstrukcí)

> Výsledný NKA s ε-přechody pak můžeme převést na DKA pomocí determinizace.

**[CVIČENÍ: ex08-regex-lab.html]**
*Laboratoř regulárních výrazů — student si vyzkouší výrazy z příkladů a vidí, která slova spadají do jazyka. (Opakované použití v kontextu převodů.)*

---

### Po sekci "Převod konečného automatu na regulární výraz" (za příkladem eliminace stavů)

> Výsledný regulární výraz: a*b(a + ba*b)*

**[CVIČENÍ: ex12-regex-jazyk.html]**
*Přiřazení regulárních výrazů k jazykovým popisům — student procvičí čtení a interpretaci výrazů.*

---

### Na konci kapitoly (za shrnutím)

> A vždy máme jistotu, že to jde převést na kterýkoli z ostatních zápisů.

**[CVIČENÍ: ex06-determinizace.html]**
*Krokování determinizace — opakované použití na konci kapitoly pro upevnění klíčového algoritmu.*

---

## Shrnutí rozmístění

| Cvičení | Soubor | Umístění |
|---------|--------|----------|
| 1 | ex01-mnozinove-operace.html | Kap. 1 — po operacích s množinami |
| 2 | ex02-grafy-stromy-kviz.html | Kap. 1 — po stromech (interaktivní stavba grafů) |
| 3 | ex03-vennuv-diagram.html | Kap. 1 — po potenční množině |
| 4 | ex04-simulator-dka.html | Kap. 2 — po formální definici a konfiguraci |
| 5 | ex05-dka-vs-nka.html | Kap. 2 — po DKA vs. NKA (vizualizace paralelních výpočtů NKA) |
| 6 | ex06-determinizace.html | Kap. 2 — po determinizaci + Kap. 4 konec |
| 7 | ex07-mealy-moore.html | Kap. 2 — po Mealy/Moore (simulátor výstupu s porovnáním) |
| 8 | ex08-regex-lab.html | Kap. 3 — po regulárních výrazech + Kap. 4 po RV→KA |
| 9 | ex09-chomsky-hierarchie.html | Kap. 3 — po Chomského klasifikaci |
| 10 | ex10-derivace.html | Kap. 3 — po derivaci |
| 11 | ex11-tabulka-prechodu.html | Kap. 2 — po tabulce přechodů + Kap. 4 po RG→KA |
| 12 | ex12-regex-jazyk.html | Kap. 4 — po KA→RV |
| 13 | ex13-klasifikace-pravidel.html | Kap. 3 — po klasifikaci jazyků (pískoviště pravidel) |
| 14 | ex14-semafor.html | Kap. 2 — po příkladu semaforu |
