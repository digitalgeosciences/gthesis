---
type: source
id: "142447"
title: "Optimizing Horizontal Well Length to Mitigate Injectivity Loss During Viscoelast. Polymer Flooding"
author: "Mohammed Ali Hussein Alameer"
year: 2023
department: "Petroleum Engineering"
degree: "MS"
supervisor: "Dr. Madhar Sahib Azad"
committee_members: []
source_file: "raw/142447 - Optimizing Horizontal Well Length to Mitigate Injectivity Loss During Viscoelast.pdf"
url: "https://eprints.kfupm.edu.sa/142447"
study_area: "Pelican Lake field (Canada), Matzen field (Austria), and Daqing field (China)"
keywords:
  - Polymer flooding
  - Viscoelastic polymer
  - Injectivity loss
  - Horizontal well
  - Shear thickening
  - Oil recovery
  - Well length optimization
  - Horizontal Well Length
  - Viscoelasticity
  - Injection Pressure
  - Well Optimization
techniques:
  - reservoir-simulation
  - petrophysics
  - mathematical-modeling
tags:
  - degree/ms
  - location/canada
  - location/austria
  - location/china
  - location/matzen-field
  - location/daqing-field
  - location/pelican-lake-field
  - technique/reservoir-simulation
  - technique/petrophysics
  - technique/mathematical-modeling
  - theme/reservoir-engineering
  - theme/eor
  - theme/petroleum-engineering
  - terminology/viscosity
  - terminology/injectivity
  - terminology/petrophysics
  - terminology/viscoelasticity
status: ingested
---

# Optimizing Horizontal Well Length to Mitigate Injectivity Loss During Viscoelast. Polymer Flooding

**Summary**: The thesis investigates the impact of horizontal well length on mitigating injectivity loss caused by the shear-thickening behavior of viscoelastic polymers (HPAM) in three distinct reservoir cases. By comparing vertical and horizontal injectors across varying polymer viscosities and thickening indices, it develops a correlation to determine optimal horizontal lengths that maintain high injectivity while preserving beneficial viscoelastic effects for improved oil recovery.

---

## Research Problem

Viscoelastic polymers like HPAM exhibit shear-thickening behavior in porous media, leading to significant injectivity loss and high injection pressures in vertical wells. While these polymers can improve residual oil saturation (Sor) reduction through viscoelasticity, their poor injectivity requires a strategy—such as horizontal well design—to balance the need for high viscosity with manageable injection pressure.

## Objectives

- Optimize the horizontal well length based on polymer solution viscoelasticity to achieve comparable or slightly higher injectivity than viscous polymer solutions.
- Determine the additional required horizontal well length to mitigate injectivity loss for three representative field conditions (Pelican Lake, Matzen, and Daqing) with varying polymer-oil viscosity ratios.
- Develop a correlation model that determines the optimum required horizontal well length to yield optimal injectivity in three oil reservoir conditions characterized by different magnitudes of polymer-oil viscosity ratio and polymer viscoelasticity.
- Determine the optimum horizontal well length to mitigate injectivity issues caused by polymer viscoelasticity.
- Evaluate the impact of polymer viscosity and elasticity on injection pressure and total oil recovery.
- Develop correlation models for different fields to predict required horizontal well lengths based on polymer properties.

## Methods

The study utilizes reservoir simulation (ECLIPSE) to evaluate injection performance. Three field cases were modeled with specific grid dimensions (5500 ft x 7000 ft). A 'base case' was established using a shear-thinning viscous polymer (N1 = 0.5). For the viscoelastic cases, three thickening indices were used: low (N2 = 1.173), medium (N2 = 1.6554), and high (N2 = 1.925). The study compared vertical vs. horizontal well orientations and varied horizontal lengths to find the point where injectivity matched or slightly exceeded the base case while maintaining a production rate of 500 BBL/Day.

## Data and Materials

Three reservoir cases: Matzen field (Austria, 8 TH sandstone), Daqing field (China, Songliao sandstone), and Pelican Lake field (Canada, Wabiskaw sandstone). Data included three polymer viscosity levels for each case (e.g., 300 cP, 100 cP, 30 cP) and four distinct shear-thickening data sets (N1=0.5, N2=1.173, 1.6554, 1.925).

## Key Findings

- Vertical wells using high thickening index polymers (N2 = 1.6554 and N2 = 1.925) reached the fracture pressure limit of 5000 psi, causing a decline in injection rate and oil recovery. ([[2023-alameer|Alameer, 2023, p. 65]])
- Optimized horizontal well designs successfully improved injectivity for viscoelastic polymers to values slightly higher than the thinning base case (N1). ([[2023-alameer|Alameer, 2023, p. 67]])
- Horizontal wells with optimized lengths reduced injection pressure to levels comparable to the thinning base case. ([[2023-alameer|Alameer, 2023, p. 68]])
- The Daqing field, having a high viscosity ratio of 30 (300 cP polymer/10 cP oil), yielded the highest recovery (2,557,628 BBL). ([[2023-alameer|Alameer, 2023, p. 72]])
- The Pelican Lake field, with a low viscosity ratio of 0.01 (30 cP polymer/3000 cP oil), yielded the lowest recovery (23,996 BBL). ([[2023-alameer|Alameer, 2023, p. 73]])
- Higher polymer viscosities required longer horizontal well lengths to mitigate high injection pressure; for example, in Daqing field, a 300 cP polymer required 1300 ft of horizontal length compared to 200 ft for a 3 cP polymer. ([[2023-alameer|Alameer, 2023, p. 74]])
- The staggered line geometry was found more favorable than the five-spot pattern, providing higher injectivity and lower injection pressure. ([[2023-alameer|Alameer, 2023, p. 61]])
- Horizontal well length requirements for mitigating injectivity loss increase significantly as polymer elasticity (thickening index) increases, especially at high polymer viscosities. ([[2023-alameer|Alameer, 2023, p. 76]])
- At low polymer viscosity (e.g., 2.5 cP), the effect of polymer viscoelasticity on injector horizontal length becomes insignificant because thickening behavior is only amplified when the viscosity itself is high. ([[2023-alameer|Alameer, 2023, p. 76]])
- In the Pelican Lake field, for a 300 cP polymer, the required horizontal length increased from 500 ft (N2=1.173) to 800 ft (N2=1.6554) and up to 1,300 ft (N1=1.925). ([[2023-alameer|Alameer, 2023, p. 86]])
- Producer orientation (vertical vs. horizontal) does not significantly influence the optimal injector horizontal length. ([[2023-alameer|Alameer, 2023, p. 79]])
- Horizontal producers resulted in higher oil recovery than vertical producers across all tested cases, though this may be partially due to simulator limitations in capturing microscopic effects. ([[2023-alameer|Alameer, 2023, p. 80]])
- Correlation models for Matzen (Eq. 4.2), Daqing (Eq. 4.3), and Pelican Lake (Eq. 4.4) were developed with R² values of approximately 1 to predict horizontal length based on viscosity and elasticity. ([[2023-alameer|Alameer, 2023, p. 88]])

## Limitations

The simulator used in the study could not fully capture microscopic oil recovery contributions from polymer viscoelasticity, potentially leading to an underestimation of total recovery. Additionally, the study did not optimize injectivity while simultaneously resolving viscosity's negative aspects.

## Recommendations and Future Work

The correlation models developed can be applied to other fields with different parameters, such as varying injection patterns or different reservoir characteristics, to optimize injector horizontal well length.

## Related Concepts

- [[reservoir-simulation]]
- [[viscosity]]
- [[injectivity]]
- [[petrophysics]]
- [[reservoir-engineering]]
- [[eor]]
- [[canada]]
- [[austria]]
- [[china]]
- [[mathematical-modeling]]
- [[viscoelasticity]]
- [[matzen-field]]
- [[daqing-field]]
- [[pelican-lake-field]]
