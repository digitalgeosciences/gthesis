---
type: technique
title: "Non Linear Regression"
aliases:
  - "least squares"
canonical: true
equipment: "Not stated in source"
software: "Not stated in source"
output: "optimized parameters (k, b, $\beta$)"
tags:
  - technique/non-linear-regression
  - theme/petroleum-engineering
sources:
  - "raw/10112 - Incorporating the effects of gas slippage and non-darcy flow in the measurement .pdf"
  - "raw/10396 - Compositional gradient calculations for a Saudi Arabian gas condensate reservoir.pdf"
  - "raw/10399 - Application of neural network to the determination of well-test interpretation m.pdf"
  - "raw/136249 - DETERMINATION OF MATRIX AND FRACTURE PERMEABILITIES IN WHOLE CORES USING PRESSUR.pdf"
  - "raw/138990 - OPTIMIZATION OF DRILLING PARAMETERS USING SPECIFIC ENERGY IN REAL TIME.pdf"
  - "raw/139677 - NUMERICAL MODELING OF TURBULENT GAS FLOW IN POROUS MEDIA A FRACTIONAL DIFFUSION .pdf"
  - "raw/140167 - Utilizing Field Data to Understand the Effect of Drilling Parameters and Mud Rhe.pdf"
  - "raw/140616 - An Empirical Correlation of Permeability for the Khuff formation..pdf"
  - "raw/140732 - Transient Wellbore Pressurization Correlation &amp; HIPPS Response Time in Multi.pdf"
  - "raw/9956 - Application of pulse-decay technique to characterize whole cores..pdf"
status: active
last_updated: 2026-06-20
---

# Non Linear Regression

**Summary**: A mathematical method to find the best fit for a set of data points by minimizing the sum of squared differences.

---

## How It Is Used in the Thesis Collection

- [[2000-khan|Khan, 2000]] applied non-linear-regression via the DRNLIN subroutine to analyze experimental data.

- [[2001-al-subai|Al-Subai, 2001]] used non-linear regression to match laboratory-measured PVT data for critical pressure, temperature, and Acentric Factor.

- [[2001-sultan|SULTAN, 2001]] applied non-linear-regression to determine final reservoir parameters after neural network identification.

- [[2009-bajaalah|BAJAALAH, 2009]] applied non-linear-regression to analyze pressure pulse decay data via a developed computer program.

- [[2013-khamis|Khamis, 2013]] applied non-linear regression to determine coefficients for ROP and coefficient of friction models.

- [[2015-alloush|Alloush, 2015]] used non-linear regression (Levenberg-Marquardt) to estimate permeability and beta coefficients.

- [[2017-al-abduljabbar|Al-AbdulJabbar, 2017]] applied non-linear regression via XLSTAT to model complex relationships in drilling data.

- [[2017-hasan|Hasan, 2017]] employed non-linear regression to develop and refine the permeability correlation.

- [[2018-homoud|Homoud, 2018]] applied non-linear regression to determine coefficients a and b in the quadratic pressure equation.

- [[2000-hamid|Hamid, 2000]] used non-linear regression to estimate permeability and Klinkenberg factors from experimental results.

## Instruments and Software



- [[2001-al-subai|Al-Subai, 2001]] used non-linear regression to match laboratory-measured PVT data for critical pressure, temperature, and Acentric Factor.

- [[2001-sultan|SULTAN, 2001]] applied non-linear-regression to determine final reservoir parameters after neural network identification.

- [[2009-bajaalah|BAJAALAH, 2009]] applied non-linear-regression to analyze pressure pulse decay data via a developed computer program.

- [[2013-khamis|Khamis, 2013]] applied non-linear regression to determine coefficients for ROP and coefficient of friction models.

- [[2015-alloush|Alloush, 2015]] used non-linear regression (Levenberg-Marquardt) to estimate permeability and beta coefficients.

- [[2017-al-abduljabbar|Al-AbdulJabbar, 2017]] applied non-linear regression via XLSTAT to model complex relationships in drilling data.

- [[2017-hasan|Hasan, 2017]] employed non-linear regression to develop and refine the permeability correlation.

- [[2018-homoud|Homoud, 2018]] applied non-linear regression to determine coefficients a and b in the quadratic pressure equation.

- [[2000-hamid|Hamid, 2000]] used non-linear regression to estimate permeability and Klinkenberg factors from experimental results.

## Typical Workflow



## Key Results and Findings

- Used to estimate k, b, and $\beta$ from pressure pulse decay results. ([[2000-khan|Khan, 2000, p. 57]])

- Successfully matched saturation pressures, Z-factors, and liquid dropout data for four out of five wells. ([[2001-al-subai|Al-Subai, 2001, p. 61]])

- Used to provide accurate parameter estimates once the flow regimes were identified by the neural networks. ([[2001-sultan|SULTAN, 2001, p. 29]])

- The computer program uses non-linear regression to estimate matrix and fracture permeabilities from experimental data. ([[2009-bajaalah|BAJAALAH, 2009, p. 127]])

- The ROP model for Well 1 achieved a correlation coefficient of 0.864 using non-linear regression. ([[2013-khamis|Khamis, 2013, p. 79]])

- The Levenberg-Marquardt algorithm was shown to be more robust than standard Newton methods when the Hessian matrix is near singular. ([[2015-alloush|Alloush, 2015, p. 29]])

- Used for cases where linear models result in high errors or when data shows high curvature. ([[2017-al-abduljabbar|Al-AbdulJabbar, 2017, p. 47]])

- Non-linear regression provided reasonable results for predicting permeability. ([[2017-hasan|Hasan, 2017, p. 149]])

- The correlation factor for coefficient 'a' was 0.98, indicating high accuracy in predicting the curve shape. ([[2018-homoud|Homoud, 2018, p. 62]])

- The least squares method was used to solve the system of equations for both single and two-parameter cases. ([[2000-hamid|Hamid, 2000, p. 54]])

## Methodological Variations Across Sources


## Technical Limitations and Open Questions


## Related Concepts

**Related Techniques**: 

**Applicable to Terminology**: 

**Used in Themes**: 
