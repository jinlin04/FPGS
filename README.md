# FPGS: Flow-Free Prior-Guided 3D Gaussian Mapping for Endoscopic Surgical Scene Reconstruction


Official implementation of FPGS, a flow-free fixed-geometry Gaussian mapping framework for endoscopic surgical scene reconstruction.


## Overview

Recent surgical 3D Gaussian Splatting methods often couple camera tracking and Gaussian mapping into a unified optimization pipeline.

FPGS reformulates this process as a fixed-geometry Gaussian mapping framework. Camera poses and intrinsics are provided by an upstream geometry module and treated as fixed inputs. A first-frame depth prior is used only for Gaussian initialization, while subsequent reconstruction is performed using RGB-only Gaussian optimization.


<p align="center">
<img src="assets/images/method-overview.webp" width="90%">
</p>


## Highlights

- Flow-free Gaussian mapping under fixed external camera geometry.
- Decoupled camera tracking from Gaussian scene optimization.
- First-frame depth prior used only for Gaussian initialization.
- RGB-only optimization during subsequent reconstruction.


## Installation

Clone this repository:

git clone https://github.com/jinlin04/FPGS.git

cd FPGS


## Requirements

- Python 3.10
- PyTorch 2.x
- CUDA 11.x / 12.x


## Data Preparation

The experiments are conducted on the SCARED dataset.

Required inputs:

- RGB images
- Camera intrinsics
- External camera poses
- First-frame depth prior


## Training

Example:

python train.py --config configs/scared.yaml


## Evaluation

FPGS is evaluated using:

- PSNR
- SSIM
- LPIPS

Efficiency is measured by:

- Training time
- Rendering FPS
- Peak GPU memory


## Citation

If you find this work useful, please cite:

Coming soon.


## Acknowledgement

This work is built upon the Free-SurGS framework.
