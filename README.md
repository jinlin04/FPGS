# FPGS: Flow-Free Prior-Guided 3D Gaussian Mapping for Endoscopic Surgical Scene Reconstruction


Official implementation of FPGS, a flow-free fixed-geometry Gaussian mapping framework for endoscopic surgical scene reconstruction.


## Overview

Recent surgical 3D Gaussian Splatting approaches often integrate camera tracking and Gaussian mapping into a unified optimization pipeline. FPGS reformulates this process as a fixed-geometry Gaussian mapping framework.

Camera poses and intrinsics are provided by an upstream geometry module and treated as fixed inputs. A first-frame depth prior is used only for Gaussian initialization, while subsequent reconstruction is performed using RGB-only Gaussian optimization.

<p align="center">
<img src="assets/images/method-overview.webp" width="95%">
</p>


## Main Contributions

- Flow-free Gaussian mapping under fixed external camera geometry.
- Decoupling camera tracking from Gaussian scene optimization.
- First-frame depth prior used only for initialization.
- RGB-only optimization during subsequent reconstruction.


## Installation

```bash
git clone https://github.com/jinlin04/FPGS.git
cd FPGS
