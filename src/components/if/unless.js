function Unless(props) {
  return !props.children ? props.children : null;
}

export default Unless;