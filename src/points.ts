/**
 * PointCloud holds a collection of points in 3D space.
 *
 * Defined by:
 * - points: Array of x, y, z coordinates.
 * - colors: Optional: Array of colors per point, defined as RGB values.
 * - size: Optional: Array of sizes for each point in space. 0-1 ideally.
 */
export interface PointCloud {
	points: number[][]; // Points in 2D/3D space [x, y, z] -- float
	colors?: number[][]; // Optional: RGB colors for each point [r, g, b, a] -- float
    size?: number[]; // Size of the points in Space. 
}