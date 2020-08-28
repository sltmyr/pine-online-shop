import React from 'react';
import { Container, Selected, Option } from './SizeSelector.styles';

const availableSizes = [42, 44, 46, 48];

type SizeSelectorProps = {
  selectedSize: number;
  setSelectedSize: (size: number) => void;
};

export default ({ selectedSize, setSelectedSize }: SizeSelectorProps) => {
  return (
    <Container>
      {availableSizes.map((size) =>
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
