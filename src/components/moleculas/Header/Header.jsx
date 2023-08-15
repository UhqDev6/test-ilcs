import React from "react";
import { Title, Wrapper } from "../../atoms";

function Header() {
  return (
    <Wrapper>
      <div className="w-full flex items-center h-24 mx-auto bg-gradient-to-b from-violet-200 ">
        <div className="flex mx-auto">
          <Title className="w-full flex text-4xl uppercase font-bold text-pink-400">
            <img
              className="w-72 h-20 pt-4"
              src="/src/assets/logilcs.png"
              alt="ilcs"
            />
          </Title>
        </div>
      </div>
    </Wrapper>
  );
}

export default Header;
