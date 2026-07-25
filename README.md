# FPGS: Flow-Free Prior-Guided 3D Gaussian Mapping for Endoscopic Surgical Scene Reconstruction


Official implementation of FPGS, a flow-free fixed-geometry Gaussian mapping framework for endoscopic surgical scene reconstruction.


## Overview


Recent surgical 3D Gaussian Splatting methods often jointly optimize camera tracking and Gaussian scene representation.

FPGS reformulates this process as a fixed-geometry Gaussian mapping framework. External camera poses and intrinsics are treated as fixed inputs, while Gaussian parameters are optimized using RGB photometric supervision.

The first-frame depth prior is only used for Gaussian initialization. After initialization, reconstruction is performed using RGB-only Gaussian optimization without optical-flow-based tracking.


<p align="center">
<img src="assets/images/method-overview.webp" width="95%">
</p>



## Highlights


- Flow-free Gaussian mapping under fixed external camera geometry.

- Decoupled camera tracking from Gaussian scene optimization.

- First-frame depth prior used only for Gaussian initialization.

- RGB-only optimization during subsequent reconstruction.



## Installation


Our implementation is tested with:

- Ubuntu 22.04
- Python 3.10
- PyTorch 2.x
- CUDA 11.x / 12.x
- NVIDIA GPU


Create the environment:


```bash
conda create -n fpgs python=3.10

conda activate fpgs

pip install -r requirements.txt
```



## Dataset Preparation


We evaluate FPGS on the SCARED dataset.


The required data structure is:


```text
dataset/
│
├── input/
│   └── RGB frames
│
├── intrinsics/
│   └── K.txt
│
├── poses/
│   └── camera poses
│
└── depth/
    └── first-frame depth prior
```


External camera poses and intrinsics are obtained from an upstream geometry module and treated as fixed inputs during reconstruction.



## Training


To train FPGS, please follow:


```bash
python train.py \
    -s /path/to/scared_scene \
    --model_path ./outputs/scared_scene \
    --visualize True \
    --port 8039 \
    --log True
```


Example:


```bash
python train.py \
    -s /path/to/scared_s01 \
    --model_path ./outputs/scared_s01 \
    --visualize True \
    --port 8039 \
    --log True
```


After training, checkpoints and rendered views are saved in:


```text
./outputs/
```


During reconstruction:

- Camera tracking optimization is disabled.
- External camera poses remain fixed.
- Gaussian parameters are optimized using RGB photometric loss.



## Evaluation


To evaluate reconstruction results:


```bash
python train.py \
    -s /path/to/scared_scene \
    --model_path ./outputs/scared_scene \
    --test True \
    --start_checkpoint ./outputs/scared_scene/chkpnt29999.pth
```


Example:


```bash
python train.py \
    -s /path/to/scared_s09 \
    --model_path ./outputs/scared_s09 \
    --test True \
    --start_checkpoint ./outputs/scared_s09/chkpnt29999.pth
```


The reconstruction quality is evaluated using:

- PSNR ↑
- SSIM ↑
- LPIPS ↓


The efficiency is evaluated using:

- Rendering FPS
- Training time
- Peak GPU memory consumption



## Qualitative Results


<p align="center">
<img src="assets/images/qualitative-main.webp" width="95%">
</p>


Comparison with Free-SurGS:


<p align="center">
<img src="assets/images/qualitative-freesurgs.webp" width="95%">
</p>



## Efficiency Comparison


<p align="center">
<img src="assets/images/efficiency.webp" width="95%">
</p>



## Visualization


The reconstructed Gaussian scene can be visualized using the provided visualization tools.


<p align="center">
<img src="assets/images/visualization.webp" width="90%">
</p>


Demo video:


<p align="center">
<video width="90%" controls>
<source src="assets/demo.mp4" type="video/mp4">
</video>
</p>



## Acknowledgement


This project is based on:

- 3D Gaussian Splatting
- Free-SurGS


We thank the authors for their open-source contributions.



## Citation


If you find this work useful, please cite:


```bibtex
@article{fpgs2026,
  title={FPGS: Flow-Free Prior-Guided 3D Gaussian Mapping for Endoscopic Surgical Scene Reconstruction},
  author={},
  journal={IEEE Transactions on Medical Imaging},
  year={2026}
}
```
