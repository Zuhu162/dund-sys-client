import React, { useState } from "react";

export default function eProfile({ match }) {
  return (
    <div>
      <h1>Employee ID: {match.params.id}</h1>
    </div>
  );
}
