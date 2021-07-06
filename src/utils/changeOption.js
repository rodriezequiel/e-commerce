export default (event, elements, style, setOption) => {
  elements.forEach(
    (element) => (document.getElementById(element).className = style.empty)
  );
  // setOption(event.id);
  event.className = style.fill;
};
