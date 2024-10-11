# Format Core

This is a package that contains the base types for many of the translations and
optimizations that can be done through other packages that use this one.

It will also be used be optimizers and utilities to simplify meshes and repair
them in the future.

## Meshes

Any type that consists of Verticies, Faces, and Traingles. Also Potentially
Normals.

### Mesh

#### 3D Mesh

Used by formates that contain triangle mesh data:

`Mesh3D`

- wavefront-obj
- stl
- gltf
- fbx

#### 3D Mesh

Some formats use this to define planes and other geometry in 2D space.

`Mesh2D`

## F-Splines

Used by Step formats and some drawing formats to create curves.

`FSpline`

## Point Clioud

Can be in either 2d or 3d. Alos has an optional rgb value. 

`PointCloud`