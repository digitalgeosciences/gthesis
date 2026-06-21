---
type: technique
title: "Simulation"
aliases:
  - "conditional simulation"
  - "Turning Band"
canonical: true
equipment: "Not stated in source"
software: "Not stated in source"
output: "simulated grade maps"
tags:
  - technique/simulation
sources:
  - "raw/10032 - Geostatistical evaluation of the Hazam al-Jalamid phosphorite deposit, Northwest.pdf"
  - "raw/10257 - Factors affecting pseudo relative permeability curves.pdf"
  - "raw/10426 - Comparative study of computational methods for the solution of the two-dimension.pdf"
  - "raw/139078 - GLOBAL OPTIMIZATION STRATEGIES FOR WELL TEST IN SINGLE AND DUAL POROSITY RESERVO.pdf"
  - "raw/139717 - Optimization of Expanded-Solvent Steam Assisted Gravity Drainage Using Different.pdf"
  - "raw/141003 - MODELING OF HYDRATE PHASE TRANSITION USING THE MEAN SPHERICAL APPROXIMATION (MSA.pdf"
  - "raw/142439 - CHARACTERIZATION OF NMR DIFFUSION COUPLING PHENOMENA IN CARBONATE FORMATIONS UND.pdf"
  - "raw/142808 - Spontaneous Imbibition of Acidic Fluids in Sandstones and Carbonates A Core- and.pdf"
status: active
last_updated: 2026-06-18
---

# Simulation

**Summary**: A geostatistical method to generate multiple equally probable realizations of a spatial variable to quantify uncertainty.

---

## How It Is Used in the Thesis Collection

- [[1996-jarad|Jarad, 1996]] applied Turning Band technique to derive conditionally simulated values of P20s%.

- [[1992-al-otaibi|Al-Otaibi, 1992]] used simulation to model fluid displacement and evaluate pseudo relative permeability curves.

- [[1993-al-towailib|Al-Towailib, 1993]] used simulation to test various solution techniques on 2D and 3D problems.

- [[2013-al-nemer|Al-Nemer, 2013]] applied simulation to generate reservoir responses for both dual porosity and horizontal well scenarios.

- [[2015-moussa|Moussa, 2015]] performed simulations in MATLAB 2014 to compare algorithm performance across 22 benchmark functions.

- [[2019-suleiman-2|Suleiman, 2019]] used simulation based on SAFT-VR Mie and MSA to predict phase behavior.

- [[2023-al-boghail|AL-BOGHAIL, 2023]] used NMR simulation to evaluate the impact of fluid's diffusion coefficients on coupling independently of wettability.

- [[2023-pratama|PRATAMA, 2023]] applied a coupled hydro-chemical simulation to model porosity changes and compare them with experimental results.

## Instruments and Software



- [[1992-al-otaibi|Al-Otaibi, 1992]] used simulation to model fluid displacement and evaluate pseudo relative permeability curves.

- [[1993-al-towailib|Al-Towailib, 1993]] used simulation to test various solution techniques on 2D and 3D problems.

- [[2013-al-nemer|Al-Nemer, 2013]] applied simulation to generate reservoir responses for both dual porosity and horizontal well scenarios.

- [[2015-moussa|Moussa, 2015]] performed simulations in MATLAB 2014 to compare algorithm performance across 22 benchmark functions.

- [[2019-suleiman-2|Suleiman, 2019]] used simulation based on SAFT-VR Mie and MSA to predict phase behavior.

- [[2023-al-boghail|AL-BOGHAIL, 2023]] used NMR simulation to evaluate the impact of fluid's diffusion coefficients on coupling independently of wettability.

- [[2023-pratama|PRATAMA, 2023]] applied a coupled hydro-chemical simulation to model porosity changes and compare them with experimental results.

## Typical Workflow



## Key Results and Findings

- Simulation results showed more variability than the kriging results, particularly in identifying high-grade zones. ([[1996-jarad|Jarad, 1996, p. 157]])

- A commercial simulator was used on a CRAY2 supercomputer using the IMPES solution technique for 3000 cell models. ([[1992-al-otaibi|Al-Otaibi, 1992, p. 48]])

- Iterative methods were found to require less computer storage and be faster than direct methods for the 345 cell model, though direct methods were more reliable. ([[1993-al-towailib|Al-Towailib, 1993, p. 55]])

- Simulation allowed for the creation of controlled test cases with added noise to evaluate algorithm robustness. ([[2013-al-nemer|Al-Nemer, 2013, p. 102]])

- Simulations were conducted over 25 independent runs for each function to provide statistical results (best, median, worst). ([[2015-moussa|Moussa, 2015, p. 51]])

- The model accurately predicted the solubility of CO2 in NaCl solution with an average absolute deviation of 1.33%. ([[2019-suleiman-2|Suleiman, 2019, p. 151]])

- Model A provided a better representation of Silica Gel samples than Model B, despite having higher total porosity. ([[2023-al-boghail|AL-BOGHAIL, 2023, p. 94]])

- The simulation showed alignment with the experiments but exhibited an underestimation of the observed results for porosity change. ([[2023-pratama|PRATAMA, 2023, p. 132]])

## Methodological Variations Across Sources


## Technical Limitations and Open Questions


## Related Concepts

**Related Techniques**: 

**Applicable to Terminology**: 

**Used in Themes**: 
