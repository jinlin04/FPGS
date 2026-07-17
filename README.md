<div align="center">

# FPGS: Flow-Free Prior-Guided Gaussian Mapping

### Flow-Free 3D Gaussian Mapping for Endoscopic Surgical Scene Reconstruction

[Author 1](#)<sup>1</sup>,
[Author 2](#)<sup>1</sup>,
[Author 3](#)<sup>2</sup>

<sup>1</sup>Affiliation 1  
<sup>2</sup>Affiliation 2

[Paper (Coming Soon)](#) |
[Project Page (Coming Soon)](#) |
[Video (Coming Soon)](#)

</div>

---

## Overview

This repository provides the implementation of **FPGS: Flow-Free Prior-Guided Gaussian Mapping** for monocular endoscopic surgical scene reconstruction.

FPGS redesigns the reconstruction backend of Free-SurGS by removing optical-flow-driven pose optimization and performing Gaussian mapping under fixed external camera geometry.

External camera poses and camera intrinsics are treated as fixed inputs. A first-frame depth prior is used only for Gaussian initialization, while subsequent mapping is optimized using RGB photometric supervision.

<!--
<p align="center">
  <img src="assets/overview.png" width="100%">
</p>
-->

---

## Method

FPGS restructures the original joint tracking-and-mapping pipeline into a fixed-geometry Gaussian mapping framework.

The reconstruction process consists of:

1. **External geometry preparation**  
   Camera intrinsics and per-frame camera poses are obtained from an upstream geometry estimation method and remain fixed during reconstruction.

2. **Gaussian initialization**  
   The first RGB frame and its depth prior are used to initialize the 3D Gaussian representation.

3. **RGB-only Gaussian mapping**  
   After initialization, Gaussian parameters are optimized using RGB photometric supervision. Optical-flow losses, projection-flow constraints, persistent depth supervision, and pose refinement are removed.

<!--
<p align="center">
  <img src="assets/pipeline.png" width="100%">
</p>
-->

---

## Visualization

### Gaussian Mapping Progress

The following video visualizes the reconstructed Gaussian representation at different optimization stages.

<!--
VIDEO_LINK_HERE
-->

### Reconstruction Results

<!--
<p align="center">
  <img src="assets/comparison.png" width="100%">
</p>
-->

---

## Installation

The implementation is based on Python and PyTorch.

```bash
git clone https://github.com/jinlin04/FPGS.git
cd FPGS

conda create -n fpgs python=3.10
conda activate fpgs

pip install -r requirements.txt
