/**
 * TriMesh is a struct to hold a common triangle mesh library.
 * 
 * Defined by the general structure:
 * - vertices: Points in 3D Space defined as an x,y,z as a Float.
 * - faces: Array of 3 points that contain indexes for the verticies to assemble traingles
 * - normals: Optional: For each Triangle there exists a normal which is defined as a vector. Can be computed.
 */
export interface TriMesh {
	vertices: number[][]; // Geometric vertices (v) -- float
	faces: number[][]; // Faces representing at least 3 verticies -- int32
	normals?: number[][]; // Optional: Vertex normals (vn) -- float
}
