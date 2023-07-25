 const currPath = d3.arc()
    .innerRadius(22)
    .outerRadius(20)
 const path = svg
      .append("path")
      .attr("transform", `translate(${selectedRef.current.y + 20},${selectedRef.current.x})`)
      .attr('fill', '#ff4d4f')
      .attr('d', currPath);

function animatePath() {
  path.transition("animation")
    .ease(d3.easeLinear)
    .duration(2000)
    .attrTween("d", function(d: any) {
      const interpolateEnd = d3.interpolateNumber(d.endAngle, d.endAngle + 3.14 * 2);
      const interpolateStart = d3.interpolateNumber(d.startAngle, d.startAngle + 3.14 * 2);
      return function(t) {
        d.endAngle = interpolateEnd(t);
        d.startAngle = interpolateStart(t);
        return currPath(d) as any;
      };
    })
    .on("end", animatePath);
}
animatePath();
