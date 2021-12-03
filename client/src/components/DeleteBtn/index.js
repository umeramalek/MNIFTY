import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
// and because of this, it still allows us to delete each one
function DeleteBtn(props) {
  return (
    <span {...props} role="button" tabIndex="0">
      ❌
    </span>
  );
}

export default DeleteBtn;
