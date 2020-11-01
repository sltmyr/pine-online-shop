import React from "react";
import { Container, Selected, Option } from "./sizeSelector.styles";

const availableSizes = [42, 44, 46, 48];

const SizeSelector: React.FC<Props> = ({ selectedSize, setSelectedSize }) => {
  return (
    <Container>
      {availableSizes.map(size =>
        size === selectedSize ? (
          <Selected key={size}>{size}</Selected>
        ) : (
          <Option key={size} onClick={() => setSelectedSize(size)}>
            {size}
          </Option>
        )
      )}
    </Container>
  );
};

type Props = {
  selectedSize: number;
  setSelectedSize: (size: number) => void;
};

export default SizeSelector;
