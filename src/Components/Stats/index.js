import React from "react";
import { Stat, StatGrid, Wrapper } from "./styled";

export const Stats = () => {
  return (
    <Wrapper>
      <StatGrid>
        <div className="stat">
          <h2>200 K+</h2>
          <h3>Downloads</h3>
        </div>
        <div className="stat">
          <h2>300 K+</h2> 
          <h3>Users</h3>
        </div>
        <div className="stat">
          <h2>150 K+</h2>
          <h3>Reviews</h3>
        </div>
      </StatGrid>
    </Wrapper>
  );
};
