---
type: source
id: "141816"
title: "PASSIVE SEISMIC EVENT DETECTION IN THE GRONINGEN AREA USING DEEP LEARNING"
author: "Ahmed Shaheen"
year: 2021
department: "Geosciences"
degree: "MS"
supervisor: "U. Waheed"
committee_members:
  - "S. Mahmoud"
  - "M. Fehler"
source_file: "raw/141816 - PASSIVE SEISMIC EVENT DETECTION IN THE GRONINGEN AREA USING DEEP LEARNING.pdf"
url: "https://eprints.kfupm.edu.sa/id/eprint/141816/"
study_area: "Groningen area, Netherlands"
keywords:
  - Passive seismic event detection
  - Deep learning
  - Convolutional neural networks (CNN)
  - Low-magnitude earthquakes
  - Induced seismicity
  - Groningen gas field
  - convolutional neural network
  - borehole velocity sensors
  - G-Network
  - seismic event detection
  - Hydraulic fracturing
  - Carbon capture and storage (CCS)
  - Geothermal monitoring
techniques:
  - cnn
  - stalta
  - template-matching
  - autocorrelation
  - lsh
  - machine-learning-geoscience
  - neural-networks
  - convolutional-neural-networks
  - keras
  - python
  - tensorflow
tags:
  - degree/ms
  - location/groningen-area
  - location/groningen-field
  - technique/cnn
  - technique/microseismic-monitoring
  - technique/machine-learning-geoscience
  - technique/neural-networks
  - theme/earthquake-seismology
  - theme/applied-geophysics
  - theme/seismology
  - theme/microseismic-monitoring
  - terminology/earthquake-seismology
  - terminology/machine-learning
  - terminology/signal-to-noise-ratio
  - terminology/microseismic-monitoring
status: ingested
---

# PASSIVE SEISMIC EVENT DETECTION IN THE GRONINGEN AREA USING DEEP LEARNING

**Summary**: The thesis investigates the use of deep learning, specifically Convolutional Neural Networks (CNNs), to automatically detect low-magnitude earthquakes in the Groningen area of the Netherlands. The study compares CNN performance against traditional methods like STA/LTA and template matching, concluding that CNNs provide superior detection of uncataloged events with significantly fewer false alarms.

---

## Research Problem

The detection of low-magnitude earthquakes is critical for understanding larger earthquake mechanisms and has significant industrial applications in hydraulic fracturing, carbon capture and storage (CCS), and geothermal monitoring. Traditional methods like STA/LTA often struggle with high false alarm rates or missed detections due to their inability to distinguish coherent noise from weak signals.

## Objectives

- Develop a Convolutional Neural Network (CNN) to detect seismic events from shallow borehole stations.
- Train the CNN using multi-borehole records as single training examples to improve robustness against noise.
- Compare the performance of the proposed CNN against STA/LTA and template matching techniques.
- Train a CNN on borehole stations with multi-level geophones to detect seismic events.
- Utilize moveout patterns across different depth levels to distinguish between underground signals and surface noise.
- Compare the performance of the CNN against STA/LTA and template matching algorithms using two months of continuous records from five stations.
- Design a convolutional neural network (CNN) to detect low-magnitude seismic events using borehole velocity sensors.
- Utilize multi-level moveout patterns across four sensor levels to improve the differentiation between signal and noise.
- Evaluate the performance of the CNN against traditional STA/LTA and template matching techniques on continuous seismic records.
- Develop an automated method for detecting low-magnitude seismic events using deep learning.
- Evaluate the performance of convolutional neural networks (CNNs) in identifying small earthquakes.
- Apply these methods to data from the Groningen area to monitor induced seismicity.

## Methods

The study utilizes a Convolutional Neural Network (CNN) architecture, which includes convolutional layers for feature extraction and pooling layers to reduce dimensionality. The model is trained on data from the G-network in Groningen, specifically utilizing borehole sensors at depths of 50m, 100m, 150m, and 200m. The CNN is trained on a relatively small amount of labeled data to identify moveout patterns. Evaluation involves comparing the CNN's results against standard industry methods: STA/LTA (Short-Term Average/Long-Term Average) and template matching.

## Data and Materials

The study uses seismic records from the G-network in the Groningen area. Training data included 47 cataloged events between October 1, 2017, and February 28, 2018. Testing was performed on two months of continuous data across several stations (e.g., G-10, G-14, G-19) to evaluate the detection of both cataloged and uncataloged events.

## Key Findings

- The CNN detected 40 events with only 5 false alarms when tested on two months of continuous data. ([[2021-shaheen|Shaheen, 2021, p. 16]])
- STA/LTA produced 39 events but resulted in 917 false alarms during the same testing period. ([[2021-shaheen|Shaheen, 2021, p. 16]])
- The CNN detected 100% more uncataloged events compared to the template matching technique. ([[2021-shaheen|Shaheen, 2021, p. 16]])
- The use of entire borehole records as a single training example allows the network to distinguish between up-going moveout (genuine events) and down-going moveout (noise from above). ([[2021-shaheen|Shaheen, 2021, p. 16]])
- STA/LTA performance drops significantly in low Signal-to-Noise Ratio (SNR) data, failing to differentiate between time-varying noise and seismic events. ([[2021-shaheen|Shaheen, 2021, p. 20]])
- Template matching is limited by its inability to detect waveforms from sources different from the master event used for the template. ([[2021-shaheen|Shaheen, 2021, p. 20]])
- The G-network's multi-level geophone setup allows for the differentiation between seismic signals (arriving first at deeper sensors) and surface noise (arriving first at shallower sensors). ([[2021-shaheen|Shaheen, 2021, p. 43]])
- A CNN is capable of recognizing moveout patterns across different depth levels, which increases its resolution in detecting lower magnitude events without high false alarm rates. ([[2021-shaheen|Shaheen, 2021, p. 25]])
- The largest recorded event in the Groningen area occurred in 2012 with a magnitude (ML) of 3.6 near Huizinge. ([[2021-shaheen|Shaheen, 2021, p. 41]])
- Waveforms arriving at locations near the hypocenter have higher frequency content than those at more distant stations; for example, G-14 was 1.4 km away while G-59 was 31.7 km away. ([[2021-shaheen|Shaheen, 2021, p. 47]])
- The CNN demonstrated good results compared to STA/LTA and template matching even when trained on a relatively small amount of data. ([[2021-shaheen|Shaheen, 2021, p. 25]])
- The CNN achieved 100% classification accuracy on training, validation, and testing datasets. ([[2021-shaheen|Shaheen, 2021, p. 41]])
- The CNN identified 45 time-windows (40 events and 5 false alarms) from two months of continuous data. ([[2021-shaheen|Shaheen, 2021, p. 42]])
- The CNN detected 20 out of the 23 cataloged events during the two-month testing period. ([[2021-shaheen|Shaheen, 2021, p. 42]])
- The CNN identified 20 additional low-magnitude events not present in the official catalog. ([[2021-shaheen|Shaheen, 2021, p. 42]])

## Limitations

The primary limitation of the technique is that it requires data from at least two stations to make a final decision; when using only one station, the system produces many false alarms. Additionally, some events were not detected due to being too far away for the signal to reach the specific test stations.

## Recommendations and Future Work

The author suggests that adding more training labels (specifically those with diverse noise types like down-trending moveouts) would further improve the CNN's robustness and ability to distinguish between genuine events and event-like noises.

## Related Concepts

- [[cnn]]
- [[microseismic-monitoring]]
- [[earthquake-seismology]]
- [[groningen-area]]
- [[neural-networks]]
- [[machine-learning]]
- [[applied-geophysics]]
- [[machine-learning-geoscience]]
- [[signal-to-noise-ratio]]
- [[groningen-field]]
- [[seismology]]
