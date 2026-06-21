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
  - Passive Seismic Event Detection
  - Deep Learning
  - Convolutional Neural Network
  - Low-magnitude earthquakes
  - Induced seismicity
  - Groningen gas field
  - CNN
  - Borehole stations
techniques:
  - cnn
  - stalta
  - template-matching
  - python
  - keras
  - signal-processing
tags:
  - degree/ms
  - location/groningen-area
  - technique/cnn
  - technique/machine-learning-geoscience
  - technique/signal-processing
  - theme/earthquake-seismology
  - theme/microseismic-monitoring
  - terminology/earthquake-seismology
  - terminology/microseismic-monitoring
  - terminology/signal-to-noise-ratio
status: ingested
---

# PASSIVE SEISMIC EVENT DETECTION IN THE GRONINGEN AREA USING DEEP LEARNING

**Summary**: The thesis evaluates a Convolutional Neural Network (CNN) for detecting low-magnitude earthquakes using data from borehole stations in the Groningen area. The study compares the CNN's performance against traditional methods like STA/LTA and template matching, concluding that the CNN provides superior detection robustness and accuracy.

---

## Research Problem

The challenge of reliably detecting low-magnitude induced earthquakes in the Groningen area caused by gas production, where traditional methods like STA/LTA and template matching struggle with high noise levels or limited applicability to diverse waveforms.

## Objectives

- Develop a CNN architecture capable of identifying seismic events from multi-level borehole stations.
- Utilize moveout patterns across different depths to distinguish between upward-propagating signals and downward-propagating surface noise.
- Evaluate the performance of the CNN against traditional methods (STA/LTA and template matching) on two months of continuous data.
- Develop a CNN architecture capable of identifying low-magnitude earthquakes from borehole station records.
- Assess the impact of multi-level borehole arrays on improving detection robustness.

## Methods

The study utilizes a 3D array structure for training, where each borehole station's four geophones are treated as channels in an image-like format. Data pre-processing includes de-trending, de-meaning, band-pass filtering (5-25 Hz), down-sampling from 200 Hz to 100 Hz, and data augmentation via time-shifting. The CNN architecture consists of three convolutional layers with ReLU activation, followed by max-pooling layers, a flattening layer, and two fully connected layers ending in a sigmoid output for binary classification (signal vs. noise). Training was performed using the Keras library in Python with the Adam optimizer and binary cross-entropy loss.

## Data and Materials

Data from 70 G-network borehole stations; 47 cataloged events between October 2017 and February 2018 for training; two months of continuous data from five specific stations (G09, G10, G14, G18, G19) for testing.

## Key Findings

- The CNN detected 40 events and only 5 false alarms on two months of continuous data. ([[2021-shaheen|Shaheen, 2021, p. 16]])
- STA/LTA produced 39 events but suffered from 917 false alarms on the same period. ([[2021-shaheen|Shaheen, 2021, p. 16]])
- The CNN detected 100% more uncataloged events compared to the template matching technique. ([[2021-shaheen|Shaheen, 2021, p. 16]])
- A band-pass filter of 5-25 Hz was found most suitable for removing ambient noise while preserving signal features. ([[2021-shaheen|Shaheen, 2021, p. 33]])
- The use of multi-level geophones allows the network to distinguish between upward moveout (genuine events) and downward moveout (surface noise). ([[2021-shaheen|Shaheen, 2021, p. 24]])
- The CNN achieved 100% classification accuracy on training, validation, and testing datasets, demonstrating no overfitting. ([[2021-shaheen|Shaheen, 2021, p. 60]])
- On two months of continuous data, the CNN picked 45 time-windows (40 events and 5 false alarms). ([[2021-shaheen|Shaheen, 2021, p. 62]])
- The CNN successfully identified 20 out of 23 cataloged events; the three missed were low-magnitude events (ML = 0.4, 0.5, & 0.7) whose epicenters were too far from the stations. ([[2021-shaheen|Shaheen, 2021, p. 62]])
- The CNN identified 20 additional uncataloged events of low magnitude. ([[2021-shaheen|Shaheen, 2021, p. 62]])
- STA/LTA detection precision did not exceed 67% on any threshold value, while the CNN achieved a precision of 88.9%. ([[2021-shaheen|Shaheen, 2021, p. 63]])
- Template matching detected only 10 uncataloged events, compared to the 20 identified by the CNN. ([[2021-shaheen|Shaheen, 2021, p. 64]])
- The CNN's ability to process multi-level borehole records allows it to recognize moveout patterns, significantly improving detection robustness over single-station methods. ([[2021-shaheen|Shaheen, 2021, p. 65]])

## Limitations

The primary limitation is the requirement of at least two stations to confirm an event; when using only one station, the system produces many false alarms. Additionally, some very low SNR events may not be picked if they are not well-represented in the training data.

## Recommendations and Future Work

Adding more training labels (specifically for various noise types and signal conditions) is suggested to further improve CNN robustness.

## Related Concepts

- [[cnn]]
- [[signal-processing]]
- [[earthquake-seismology]]
- [[microseismic-monitoring]]
- [[groningen-area]]
- [[machine-learning-geoscience]]
- [[signal-to-noise-ratio]]
