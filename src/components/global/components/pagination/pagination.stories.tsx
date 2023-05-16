import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  Pagination,
  PaginationButton,
  PaginationButtonGroup,
} from './pagination';
import {
  FaAngleRight,
  FaAngleLeft,
  FaAngleDoubleRight,
  FaAngleDoubleLeft,
} from 'react-icons/fa';
import { Icon, VisuallyHidden } from '@chakra-ui/react';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  argTypes: {},
} as ComponentMeta<typeof Pagination>;

export const PaginationWithButtons: ComponentStory<
  typeof Pagination
> = args => {
  const [active, setActive] = useState(0);
  const max = 5;
  return (
    <Pagination {...args}>
      <PaginationButton onClick={() => setActive(0)}>
        <VisuallyHidden>First Page</VisuallyHidden>
        <Icon as={FaAngleDoubleLeft} />
      </PaginationButton>
      <PaginationButton
        onClick={() => setActive(() => (active > 0 ? active - 1 : active))}
      >
        <VisuallyHidden>Previous page</VisuallyHidden>
        <Icon as={FaAngleLeft} />
      </PaginationButton>
      <PaginationButtonGroup>
        {Array(max)
          .fill('')
          .map((_, i) => {
            return (
              <PaginationButton
                key={i}
                isActive={active === i}
                onClick={() => setActive(i)}
              >
                {i + 1}
              </PaginationButton>
            );
          })}
      </PaginationButtonGroup>
      <PaginationButton
        onClick={() =>
          setActive(() => (active < max - 1 ? active + 1 : active))
        }
      >
        <VisuallyHidden>Next Page</VisuallyHidden>
        <Icon as={FaAngleRight} />
      </PaginationButton>
      <PaginationButton onClick={() => setActive(max - 1)}>
        <VisuallyHidden>Last Page</VisuallyHidden>
        <Icon as={FaAngleDoubleRight} />
      </PaginationButton>
    </Pagination>
  );
};

PaginationWithButtons.args = {};

export const PaginationWithManyButtons: ComponentStory<
  typeof Pagination
> = args => {
  const [active, setActive] = useState(0);
  const max = 6;
  return (
    <Pagination {...args}>
      <PaginationButton onClick={() => setActive(0)}>
        <VisuallyHidden>First Page</VisuallyHidden>
        <Icon as={FaAngleDoubleLeft} />
      </PaginationButton>
      <PaginationButton
        onClick={() => setActive(() => (active > 0 ? active - 1 : active))}
      >
        <VisuallyHidden>Previous page</VisuallyHidden>
        <Icon as={FaAngleLeft} />
      </PaginationButton>
      <PaginationButtonGroup>
        {Array(max)
          .fill('')
          .map((_, i) => {
            return (
              <PaginationButton
                key={i}
                isActive={active === i}
                onClick={() => setActive(i)}
              >
                {i + 1}
              </PaginationButton>
            );
          })}
      </PaginationButtonGroup>
      <PaginationButton
        onClick={() =>
          setActive(() => (active < max - 1 ? active + 1 : active))
        }
      >
        <VisuallyHidden>Next Page</VisuallyHidden>
        <Icon as={FaAngleRight} />
      </PaginationButton>
      <PaginationButton onClick={() => setActive(max - 1)}>
        <VisuallyHidden>Last Page</VisuallyHidden>
        <Icon as={FaAngleDoubleRight} />
      </PaginationButton>
    </Pagination>
  );
};

PaginationWithManyButtons.args = {};
