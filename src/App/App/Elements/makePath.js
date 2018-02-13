export const makePath = (path='M10 10 h 80 v 80 h -80 Z') => {
  const p = new Path2D(path);
  return p

  // Stroked triangle
  // ctx.beginPath();
  // ctx.moveTo(125, 125);
  // ctx.lineTo(125, 45);
  // ctx.lineTo(45, 125);
  // ctx.closePath();
  // ctx.stroke();
}
