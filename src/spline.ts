/**
 * FSpline/NURBS is used for spline curve definitions.
 *
 * Defined by:
 * - controlPoints: The control points that define the curve.
 * - knots: The knot vector used for NURBS or spline evaluation.
 * - degree: Degree of the curve.
 * - weights: Optional: Weights applied to control points in NURBS (default to 1 if not NURBS).
 */
export interface FSpline {
	controlPoints: number[][]; // Control points [x, y, z] -- float
	knots: number[]; // Knot vector -- float
	degree: number; // Degree of the spline or NURBS -- int32
	weights?: number[]; // Optional: Weights for control points in NURBS -- float
}