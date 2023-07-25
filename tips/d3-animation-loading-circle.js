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


// let valTransform = d3.zoomIdentity.translate(selectedRef.current.x + 200 - 300, selectedRef.current.x + 200 - 300).scale(1);
// svg.transition().duration(750).attr('transform', valTransform.toString())
// const svgNode: any = svg.node();
// d3.select(svgNode.parentNode).call(zoom.transform, valTransform)
// svgRef.current.call(zoom.transform, valTransform)
// zoom.translateBy(svgRef.current, 100, 100)
// const svgNode: any = svg.node();
// const transform = d3.zoomTransform(svgNode);
// transform.x = 100;
// transform.y = 100;
