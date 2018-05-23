export default function myTransform() {
  return function wrap(ReactClass) {
    return ReactClass;
  }
}