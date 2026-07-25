# FPGS: Flow-Free Prior-Guided 3D Gaussian Mapping for Endoscopic Surgical Scene Reconstruction


Official implementation of FPGS, a flow-free fixed-geometry Gaussian mapping framework for endoscopic surgical scene reconstruction.


## Overview


Recent surgical 3D Gaussian Splatting approaches often jointly optimize camera tracking and Gaussian scene representation.

FPGS reformulates this process as a fixed-geometry Gaussian mapping framework. External camera poses and intrinsics are treated as fixed inputs, while Gaussian parameters are optimized using RGB photometric supervision.

The first-frame depth prior is only used for Gaussian initialization. After initialization, reconstruction is performed with RGB-only optimization without optical-flow-based tracking.


<p align="center">
<img src="assets/images/method-overview.webp" width="95%">
</p>


## Highlights


- Flow-free Gaussian mapping under fixed external camera geometry.

- Decoupled camera tracking from Gaussian optimization.

- First-frame depth prior used only for initialization.

- RGB-only Gaussian optimization during reconstruction.


## Installation


Our code is tested with:

- Ubuntu 22.04
- Python 3.10
- PyTorch 2.x
- CUDA 11.x / 12.x
- NVIDIA GPU


Create environment:


```bash
conda create -n fpgs python=3.10

conda activate fpgs

pip install -r requirements.txt
