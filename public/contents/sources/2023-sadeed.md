---
type: source
id: "142656"
title: "Fully-Implicit Formulation of the Capacitance Resistance Model to Simulate Two-Phase Immiscible Flow"
author: "Ahmed Sadeed"
year: 2023
department: "Petroleum Engineering"
degree: "PhD"
supervisor: "Dr. Abeeb A. Awotunde"
committee_members: []
source_file: "raw/142656 - Fully-Implicit Formulation of the Capacitance Resistance Model to Simulate Two-P.pdf"
url: "https://eprints.kfupm.edu.sa/142656"
study_area: "Synthetic reservoir models and literature-based cases (UNISIM)"
keywords:
  - Capacitance-Resistance Model (CRM)
  - two-phase immiscible flow
  - finite-difference methods
  - producer-based representation
  - injector-producer pair
  - history matching
  - well production rates
  - time constant
  - inter-well connectivity
  - Capacitance Resistance Model
  - Finite-Difference Method
  - Two-Phase Flow
  - Water Flooding
  - Well Connectivity
  - Production Prediction
  - Capacitance Resistance Model (CRM)
  - Field Development Planning
  - Implicit Formulation
techniques:
  - groundwater-modeling
  - fmincon
  - mathematical-modeling
  - reservoir-simulation
  - finite-difference-modeling
  - matlaboptimizationfmincon
tags:
  - degree/phd
  - technique/groundwater-modeling
  - technique/matlab
  - technique/reservoir-simulation
  - technique/finite-difference-modeling
  - technique/mathematical-modeling
  - technique/petroleum-engineering
  - theme/reservoir-engineering
  - theme/petroleum-engineering
  - terminology/petrophysics
  - terminology/petrophysics
  - terminology/porosity
  - terminology/permeability
  - terminology/time-constant
  - terminology/inter-well-connectivity
  - terminology/petroleum-engineering
  - terminology/water-flooding
status: ingested
---

# Fully-Implicit Formulation of the Capacitance Resistance Model to Simulate Two-Phase Immiscible Flow

**Summary**: The thesis develops a fully-implicit finite-difference formulation of the Capacitance Resistance Model (CRM) to simulate two-phase immiscible flow. It introduces a producer-based representation (CRMP) and an injector-producer pair model (CRMIP), ultimately proposing a method to incorporate new wells into the CRM framework using a cosine-based approach.

---

## Research Problem

Existing CRM models often rely on single-phase equations or indirect fractional flow methods (like Koval or Gentil), which fail to accurately predict individual oil and water rates in immature water floods. Additionally, standard CRM models lack a mechanism to account for the addition of new wells during field development.

## Objectives

- Develop a two-phase CRM model to quantify the effect of injection rate on the production of individual oil and water phases.
- Implement finite-difference schemes to solve the ODEs representing the CRM models (CRMP and CRMIP).
- Evaluate the stability, consistency, and convergence of the resulting finite-difference solutions.
- Develop a method to incorporate new wells into the CRM model using a cosine-based approach.
- Develop a fully-implicit finite-difference solution for the two-phase Capacitance Resistance Model (TP-CRMIP).
- Evaluate and compare different methods for handling varying bottom hole pressures in CRM models.

## Methods

The study utilizes the finite-difference method (FDM) to solve the differential equations of the TP-CRMIP model. A Newton-Raphson iteration is used to solve the resulting non-linear system at each time step. The MATLAB function 'fmincon' is employed for history matching and optimizing parameters like inter-well connectivity, pore volume, and geometric constants. Three distinct methods are tested for handling varying bottom hole pressures (mean value, last known value, and unknown/optimized). A cosine-based correlation model is developed to predict the parameters of new wells based on their spatial coordinates relative to existing wells.

## Data and Materials

The study uses three synthetic cases: Case 1 (homogeneous reservoir with 3 injectors and 1 producer), Case 2 (heterogeneous reservoir with 4 injectors and 1 producer), and Case 3 (a realistic UNISIM model with 5 injectors and 4 producers). Data includes production rates, injection rates, and various reservoir properties like permeability (Kh, Kv), porosity (phi), and fluid properties (Co, Cw, Cf).

## Key Findings

- The explicit finite-difference scheme for the CRMP model was found to be conditionally stable (CFL condition: Δt/τ ≤ 1). ([[2023-sadeed|Sadeed, 2023, p. 25]])
- prediction_accuracy_case_1_p1_sa_crmp_0.96_f_val_0.96 ([[2023-sadeed|Sadeed, 2023]])
- text_content_of_finding_on_page_49_is_that_both_sa_crmp_and_fd_crmp_models_are_comparable_in_accuracy_for_case_1_with_mean_square_errors_being_nearly_identical. ([[2023-sadeed|Sadeed, 2023]])
- text_content_of_finding_on_page_53_is_that_the_fd_crmp_model_shows_a_good_history_match_and_prediction_for_case_2_with_rms_errors_comparable_to_sa_crmp. ([[2023-sadeed|Sadeed, 2023]])
- The fully-implicit finite-difference method was found to be unconditionally stable and computationally faster than the semi-analytical solution. ([[2023-sadeed|Sadeed, 2023, p. 45]])
- Optimizing the productivity index as an unknown parameter during history matching provided better performance compared to using mean or last known values for varying bottom hole pressures. ([[2023-sadeed|Sadeed, 2023, p. 61]])
- The TP-CRMIP model successfully matched individual oil and water rates, whereas the standard two-phase CRM (Fei Cao) failed to accurately predict phase rates despite matching total production. ([[2023-sadeed|Sadeed, 2023, p. 58]])
- In Case 1, the TP-CRMIP model achieved an RMSE of 7.28 for oil and 7.68 for prediction, significantly lower than the Fei Cao model's results. ([[2023-sadeed|Sadeed, 2023, p. 58]])
- The cosine-based correlation successfully predicted parameters for new wells with a total RMSE of 27.79 in Case 1, outperforming the logistic model (RMSE 70.54). ([[2023-sadeed|Sadeed, 2023, p. 103]])
- In Case 3 (UNISIM), the TP-CRMIP cosine-based model provided good prediction of phase rates with RMSE values as low as 4.99 for water rate in Producer 2. ([[2023-sadeed|Sadeed, 2023, p. 95]])
- The cosine-based model provided reasonable estimates of production rates compared to simulated rates in all three studied cases. ([[2023-sadeed|Sadeed, 2023, p. 119]])
- The newly developed cosine-based TP-CRMIP model serves as a fast and reliable tool for water flooding optimization and field development planning. ([[2023-sadeed|Sadeed, 2023, p. 119]])

## Limitations

Standard CRM models do not provide a straightforward way of incorporating new wells into the model; they also lack accurate estimation of individual phase rates unless coupled with empirical models like the Koval or Gentil methods.

## Recommendations and Future Work

- Apply the TP-CRMIP to horizontal and multilateral wells.
- Extend the work to three-phase flow (oil/water/gas).
- Incorporate a water influx model into the framework.
- Quantify the effects of capillary pressure.

## Related Concepts

- [[groundwater-modeling]]
- [[reservoir-simulation]]
- [[petrophysics]]
- [[reservoir-engineering]]
- [[petroleum-engineering]]
- [[porosity]]
- [[permeability]]
- [[time-constant]]
- [[inter-well-connectivity]]
- [[finite-difference-modeling]]
- [[mathematical-modeling]]
- [[water-flooding]]
