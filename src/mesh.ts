/**
 * Mesh3D is a struct to hold a common triangle mesh library.
 * 
 * Defined by the general structure:
 * - vertices: Points in 3D Space defined as an x,y,z as a Float.
 * - faces: Array of 3 points that contain indexes for the verticies to assemble traingles
 * - normals: Optional: For each Triangle there exists a normal which is defined as a vector. Can be computed.
 */
export interface Mesh3D {
	vertices: number[][]; // Geometric vertices (v) -- float
	faces: number[][]; // Faces representing at least 3 verticies -- int32
	normals?: number[][]; // Optional: Vertex normals (vn) -- float
}

/**
 * Mesh2D holds a collection of 2D vertices and edges.
 *
 * Defined by:
 * - vertices: Points in 2D space defined by x, y.
 * - edges: Pairs of vertex indices representing connections.
 */
export interface Mesh2D {
	vertices: number[][]; // Geometric vertices in 2D space [x, y] -- float
	edges: number[][]; // Edges representing pairs of vertex indices -- int32
}