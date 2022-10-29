import { ConvexHullCollider } from "@react-three/rapier";

const vertices = [
  0.0, -1.172751, -0.0, 0.0, 1.172751, 0.0, 1.122302, -0.123811, 0.364658,
  0.693621, 0.123811, 0.954687, 0.0, -0.123811, 1.180058, 0.69362, -0.123811,
  -0.954687, 1.122302, 0.123811, -0.364658, 0.0, 0.123811, -1.180058, -0.693621,
  -0.123811, -0.954687, -1.122301, -0.123811, 0.364658, -1.122301, 0.123811,
  -0.364658, -0.693621, 0.12381, 0.954687,
].map((n) => n / 10);

export function D10Collider() {
  return <ConvexHullCollider args={[vertices]} />;
}